const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://math:Aa11223344-@cluster0.89wbtaz.mongodb.net/products-test?retryWrites=true&w=majority&appName=Cluster0";

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }
  client.close();

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);

  let products = { takla: "balta", price: 12.99 };

  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
  } catch (error) {
    return res.json({ message: "Could not retrieve products." });
  }
  client.close();
  products = { takla: "balta", price: 12.99 };
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
