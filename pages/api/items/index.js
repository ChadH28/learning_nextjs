import { articles } from "../data/articles.data";

export default function handler(req, res) {
  if (articles.length > 0) {
    res
      .status(200)
      .json(articles)
  } else {
    res
      .status(404)
      .json({ message: `Articles not found on Server` })
  }
}