import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Use Link for navigation

const Product = () => {
  const [mydata, setMydata] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = () => {
    let api = "http://localhost:3000/shopping";
    axios.get(api)
      .then((res) => {
        setMydata(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching product data:", error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const cartDataAdd = (id, name, price, categ, desc, myimg) => {
    dispatch(addToCart({ id, name, price, category: categ, description: desc, image: myimg, qnty: 1 }));
  };

  const ans = mydata.map((key) => {
    return (
      <div className="col-md-4 col-sm-6" style={{ marginTop: "30px" }} key={key.id}>
        <Card className="product-card">
          <Link to={`/prodetail/${key.id}`}>
            <Card.Img variant="top" src={key.image} alt={key.name} className="product-img" />
          </Link>
          <Card.Body>
            <Card.Title className="product-title">{key.name}</Card.Title>
            <Card.Text className="product-category">{key.category}</Card.Text>
            <Card.Text className="product-description">{key.description}</Card.Text>
            <div className="product-footer">
              <span className="product-price">Rs. {key.price}/-</span>
              <Button
                variant="primary"
                className="add-to-cart-btn"
                onClick={() => { cartDataAdd(key.id, key.name, key.price, key.category, key.description, key.image); }}
              >
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div className="product-container">
      <h1 className="product-heading">Laptop Collection</h1>
      {loading ? (
        <div>Loading...</div>  // You could also use a spinner here
      ) : (
        <div className="row">
          {ans}
        </div>
      )}
    </div>
  );
};

export default Product;
