const blogsRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Blog = require('../models/blog')
const User = require('../models/user')
const middleware = require('../utils/middleware')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', {
    username: 1,
    name: 1,
  })

  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const { body } = request
  const { token } = request
  const decodedToken = jwt.verify(token, process.env.SECRET)

  const user = await User.findById(decodedToken.id)

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id,
  })

  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()

  response.status(201).json(savedBlog)
})

blogsRouter.delete(
  '/:id',
  middleware.userExtractor,
  async (request, response) => {
    const { id } = request.params
    const { user } = request

    const deletedBlog = await Blog.findById(id)

    if (!deletedBlog) {
      return response.status(204).end()
    }

    if (
      !user ||
      user._id.toString() !== deletedBlog.user.toString()
    ) {
      return response.status(401).json({ error: 'invalid user' })
    }

    await Blog.findByIdAndRemove(id)
    response.status(204).end()
  },
)

blogsRouter.put('/:id', async (request, response) => {
  const { id } = request.params
  const { body } = request
  const blogToUpdate = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  }
  const updatedBlog = await Blog.findByIdAndUpdate(id, blogToUpdate, {
    new: true,
  })

  if (!updatedBlog) {
    return response.status(404).end()
  }

  response.status(201).json(updatedBlog)
})

module.exports = blogsRouter
