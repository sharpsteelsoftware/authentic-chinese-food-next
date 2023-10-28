// app/api/posts.js

import sanityClient from '../sanity'

export default async function handler(req, res) {
  const query = '*[_type == "post"]{ title, content }'
  try {
    const posts = await sanityClient.fetch(query)
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch posts' })
  }
}
