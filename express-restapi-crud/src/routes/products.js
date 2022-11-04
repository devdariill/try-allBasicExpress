const {Router} = require("express");

const router = Router();
// let= allows you to reassign the variable
let products = [
  {
    id: 1,
    name: "product1",
    price: 100,
  },
];
router.get("/products", (req, res) => {
  res.json(products);
});
router.post("/products", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body }; //TODO: study this
  console.log(newProduct);
  products.push(newProduct);
  res.json({ product_created: newProduct });
});
router.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  //   const productFound=products.find(function (product) {
  const productFound = products.find((p) => p.id === parseInt(req.params.id));
  if (!productFound) {
    return res.status(404).json({ error: "1Product not found" });
  }
  console.log(productFound);
  res.send(productFound);
});
router.delete("/products/:id", (req, res) => {
  const productFound = products.find((p) => p.id === parseInt(req.params.id));
  if (!productFound) {
    return res.status(404).json({ error: "2Product not found" });
  }
  const newProducts = products.filter((p) => p.id !== parseInt(req.params.id));
  products = newProducts;
  console.log(products);
  //   res.sendStatus(204);//204 means no content
  res.status(200).json({ message: "Product eliminated" });
});
router.put("/products/:id", (req, res) => {
  const productFound = products.find((p) => p.id === parseInt(req.params.id));
  if (!productFound) {
    return res.status(404).json({ error: "3Product not found" });
  }
  const newData = req.body;
  const newProduct = products.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  ); //TODO: study this
  products = newProduct;
  console.log(products);
  //   res.sendStatus(204);//204 means no content
  res.status(200).json({
    Product_Updated: newProduct,
  });
});

module.exports = router;