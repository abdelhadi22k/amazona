// https://github.com/basir/mern-amazona/commits/master
// Mobile 7XXXX-3948

import express from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

import seedRouter from "./routers/seedRouter.js";
import product from "./routers/product.js";
import user from "./routers/user.js";
import order from "./routers/order.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
dotenv.config();
const port = process.env.PORT || 4444;
//
app.use(cors());
app.use(express.json());

app.use("/api/seed", seedRouter);
app.use("/api/products", product);
app.use("/api/users", user);
app.use("/api/orders", order);
//
app.get("/api/keys/paypal", (req, res) => {
  res.send("sb");
});
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(__dirname, "/client/build/index.html");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}....`);
    });
    console.log("Connecte");
  })
  .catch((err) => {
    console.log(`Filde` + err);
  });
