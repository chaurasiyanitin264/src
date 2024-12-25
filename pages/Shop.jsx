import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import { useNavigate } from "react-router-dom";

const Shop=()=>{
    const [lowPrice, setLowPrice]=useState("");
    const [heighPrice, setHeighPrice]=useState("");
    const [showFilter, setShowFilter]=useState(true);
    const [mydata, setMydata]= useState([]);
    // const dispatch= useDispatch();
    const dispatch= useDispatch();
    const navigate= useNavigate();


    const loadData=()=>{
      let api="http://localhost:3000/shopping";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
     }

     const showData=()=>{
        let api="http://localhost:3000/shopping";
        axios.get(api).then((res)=>{
            setShowFilter(false);
            setMydata(res.data);
        })
     }
    
     useEffect(()=>{
        loadData();
     }, []);
    
     useEffect(()=>{
        if (lowPrice=="" && heighPrice=="")
        {
            setShowFilter(true);
        }
     })

     const cartDataAdd=(id, name, price, categ, desc, myimg)=>{
      dispatch(addToCart({id:id, name:name, price:price, category:categ, description:desc, image:myimg, qnty:1}))
     }
    
    
const goto_pro_detail=(id)=>{
  navigate(`/prodetail/${id}`);
}
    
     const ans=mydata.map((key)=>{
      
       
       return(
        <>
     <div className="col-md-4 col-sm-6 mb-4" key={key.id}>
        <Card className="product-card">
          <a href="#" onClick={() => { goto_pro_detail(key.id) }}>
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
    
        
        </>
       )
      
     })


     const ans1=mydata.map((key)=>{
      
        if (key.price>=lowPrice && key.price<=heighPrice)
        {
       return(
        <>
        <div className="col-md-4 col-sm-6 mb-4" key={key.id}>
        <Card className="product-card">
          <a href="#" onClick={() => { goto_pro_detail(key.id) }}>
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
    
        
        </>
       )
        }
     })


    return(
        <>
          <h1> My Shop Page</h1>

          <div id="shoppage">
            <div id="shopmenu">
          
            <h4> Filter data by Price</h4>
           
           Enter Low Price <input type="text" value={lowPrice}
           onChange={(e)=>{setLowPrice(e.target.value)}} />
           <br/>
            To 
            <br/>
          Enter High Price  <input type="text" value={heighPrice}
          onChange={(e)=>{setHeighPrice(e.target.value)}} />
            <br/>
            <button onClick={showData}> Show Data</button>



            </div>
             <div id="shopdata">
                  
             <div id="cardData">
                {showFilter?ans:ans1}      
            </div>

             </div>

          </div>
        </>
    )
}

export default Shop;