import { articles } from "../data/articles.data";

export default function handler(req, res) {
  res
    .status(200)
    .json(articles)
}