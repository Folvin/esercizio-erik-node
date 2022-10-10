import express from "express";

import productRouter from "./routes/products";
import categoryRouter from "./routes/categories";

const server = express();

server.use("/api", productRouter, categoryRouter)


server.get("/", (req, res) => {
  res.send("OK");
});

const port = 3000;
server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
