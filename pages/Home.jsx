import { useState, useEffect } from 'react';
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';



const Home = () => {



  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = () => {
    let api = "http://localhost:3000/shopping/?type=new";
    axios.get(api).then((res) => {
      setMydata(res.data);
    })
  }

  useEffect(() => {
    loadData();
  }, []);

  const cartDataAdd = (id, name, price, categ, desc, myimg) => {
    dispatch(addToCart({ id, name, price, category: categ, description: desc, image: myimg, qnty: 1 }))
  }

  const goto_pro_detail = (id) => {
    navigate(`/prodetail/${id}`);
  }

  const productCards = mydata.map((key) => {
    return (
      <div className="col-md-4 col-sm-6 mb-4" key={key.id} style={{marginTop:"10px"}}>
        <Card className="product-card">
        <div className='note'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/047/240/845/small_2x/red-corner-new-ribbon-design-template-png.png" alt="" height="100px" />
          </div>
          <a href="#" onClick={() => { goto_pro_detail(key.id)  }} >
            <Card.Img variant="top" src={key.image} className="product-img" />
          </a>
              
          
          <Card.Body>
            <Card.Title className="product-title">{key.name}</Card.Title>
            <Card.Text className="product-description">{key.description}</Card.Text>
            <div className="product-footer">
              <span className="product-price">Rs. {key.price}/-</span>
              <Button className="add-to-cart-btn" onClick={() => { cartDataAdd(key.id, key.name, key.price, key.category, key.description, key.image) }}>
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  });

  return (
    <>
      {/* Carousel Section */}
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400" alt="First slide" />

          <Carousel.Caption className="carousel-caption">
            <h3>Discover the Latest Laptops</h3>
            <p>Explore our exclusive range of laptops for every need.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Second slide" />
          <Carousel.Caption className="carousel-caption">
            <h3>Best Deals of the Year</h3>
            <p>Shop laptops at unbeatable prices.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvqVBZqBV6DPKQ-fyP8HL0b0PYsIoRIIGJw&s" alt="Third slide" />
          <Carousel.Caption className="carousel-caption">
            <h3>Top Tech, Top Performance</h3>
            <p>Boost your productivity with the latest tech innovations.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* New Arrivals Section */}
      <section className="new-arrivals">
        <center>
        <img className='logo' src="https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg" alt="" />
        </center>
        <div className="row">
          {productCards}
        </div>
      </section>
    </>
  )
}

export default Home;
