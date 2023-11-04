import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [slug, setslug] = useState("");
  const [image, setimage] = useState("");
  const [brand, setbrand] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [countInStock, setcountInStock] = useState("");
  const [rating, setrating] = useState("");
  const [numReviews, setnumReviews] = useState("");

  // const { data } =  Axios.post('http://localhost:7000/api/products/addProduct', {
  //   name,slug,image,brand,category,description,price,bcountInStockrand,rating,numReviews

  // });

  const submitHandler = async (event) => {
    // event.preventDefault();
    const respons = await fetch(
      "http://localhost:7000/api/products/addProduct",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          slug,
          image,
          brand,
          category,
          description,
          price,
          countInStock,
          rating,
          numReviews,
        }),
      }
    );
    const data = await respons.json();
    console.log(data);
  };

  return (
    <Container className="small-container">
      <Helmet>
        <title>create product</title>
      </Helmet>
      <h1 className="my-3">Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control 
          type="text"
          onChange={(e) => setName(e.target.value)} 
          required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="slug">
          <Form.Label>slug</Form.Label>
          <Form.Control
           type="text"
            required
            onChange={(e) => setslug(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>image</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={(e) => setimage(e.target.value)}
          />

          <Form.Group className="mb-3" controlId="brand">
            <Form.Label>brand</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setbrand(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="category">
            <Form.Label>category</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setcategory(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setdescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>price</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setprice(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="countInStock">
            <Form.Label>countInStock</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setcountInStock(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="rating">
            <Form.Label>rating</Form.Label>
            <Form.Control
              max={5}
              type="number"
              onChange={(e) => setrating(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="numReviews">
            <Form.Label>numReviews</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setnumReviews(e.target.value)}
              required
            />
          </Form.Group>
        </Form.Group>

        <div className="mb-3">
          <Button type="submit">Add product</Button>
        </div>
      </Form>
    </Container>
  );
}

export default AddProduct;
