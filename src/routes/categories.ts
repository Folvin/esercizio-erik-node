import {Router} from "express";
import {categories} from "../data";

const router = Router();

router.get("/categories", (req, res) => {
  res.json(categories);
});

router.get("/categories/:id(\\d+)", (req, res) => {
  const id = Number(req.params.id);
  const category = categories.find((category) => category.id === id);
  if (!category) return res.send(`there is no category with id equal ${id}`);
  res.json(category);
});

router.post("/categories/category", (req, res) => {
  const queryParamName = String(req.query.name);

  if (!queryParamName.search(/[0-9]/)) return res.send("the query parameter name must be a string");
  if (!queryParamName) return res.send("the query parameter name cannot be undefined");

  const newCategory = {
    id: categories.length + 1,
    name: queryParamName,
  };

  categories.push(newCategory);

  res.json(categories.find((category) => category.name === queryParamName));
});

export default router;
