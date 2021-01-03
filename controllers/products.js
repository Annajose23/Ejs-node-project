const Product = require("../model/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    heading: "Add Title",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getAllProducts = (req, res, next) => {
  const products = Product.fetchAll();
  console.log(products);
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    heading: "My Products",
  });
};
