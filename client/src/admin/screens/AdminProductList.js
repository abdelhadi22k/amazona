import React, { useEffect, useReducer } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import logger from "use-reducer-logger";
import { Row, Col } from "react-bootstrap";
import Product from '../components/Product'
import { Helmet } from "react-helmet-async";
import Loading from "../../components/utilit/Loading.js";
import Message from "../../components/utilit/Message.js";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };

    case "FETCH_SECCESS":
      return { ...state, products: action.payload, loading: false };

    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function AdminProductList() {
  const [{ loading, error,  products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });


  

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("http://localhost:7000/api/products");
        dispatch({ type: "FETCH_SECCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Acos</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default AdminProductList;
