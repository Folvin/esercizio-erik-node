import {Router} from "express";
import {products} from "../data";

const router = Router();

router.get("/products", (req, res) => {
  res.json(products);
});

router.post("/products/product", (req, res) => {
  const queryParamName = String(req.query.name);
  const queryParamPrice = Number(req.query.price);
  const queryParamImg = String(req.query.img);
  const queryParamCategory = Number(req.query.category);

  if (!queryParamName.search(/[0-9]/) || isNaN(queryParamPrice) || !queryParamImg.search(/[0-9]/) || isNaN(queryParamCategory)) {
    return res.send("query params name, price, img and category must be of type string, number, string and number");
  }

  if (!queryParamName || !queryParamPrice || !queryParamImg || !queryParamCategory) {
    return res.send("query parameters name, price, img and category cannot be undefined");
  }

  const newProduct = {
    id: products.length + 1,
    name: queryParamName,
    price: queryParamPrice,
    img: queryParamImg,
    category_id: queryParamCategory,
  };

  products.push(newProduct);
  
  res.json(products.find((category) => category.name === queryParamName));
});
export default router;
