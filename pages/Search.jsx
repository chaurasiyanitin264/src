import { useState, useEffect } from "react";

import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';

const Search=()=>{
    const [pro, setPro]=useState("");


    
 const [mydata, setMydata]= useState([]);
 const dispatch= useDispatch();
 const navigate= useNavigate();

const handleinput=(e)=>{
   let pro=e.target.value;
   setPro(pro);
   let api="http://localhost:3000/shopping";
   axios.get(api).then((res)=>{
       setMydata(res.data);
       pro(" ")
   })

}

//  const loadData=()=>{
//     let api="http://localhost:3000/shopping";
//     axios.get(api).then((res)=>{
//         setMydata(res.data);
//     })
//  }

//  useEffect(()=>{
//     loadData();
//  }, []);



 const cartDataAdd=(id, name, price, categ, desc, myimg)=>{
  dispatch(addToCart({id:id, name:name, price:price, category:categ, description:desc, image:myimg, qnty:1}))
 }


const goto_pro_detail=(id)=>{
  navigate(`/prodetail/${id}`);
}


 const ans=mydata.map((key)=>{
      let mystr=key.name.toLowerCase(); 
      console.log(mystr);
      let myPro= pro.toLowerCase();   
      let proStatus= mystr.includes(myPro);
      console.log(proStatus);
            
     if (proStatus==true)
     {


   return(
    <>
    
    <Card style={{width:"300px", margin:"15px"}}>
    <center>
    <a href='#' onClick={()=>{goto_pro_detail(key.id)}}>
           <img src={key.image} style={{height:"200px", width:"250px",marginTop:"20px" }}  />
        </a>  
    </center>
      <Card.Body>
        <Card.Title> {key.name}</Card.Title>
        <Card.Text>
            {key.description} 
            <br/>
            <span style={{color:'red', fontWeight:'bold'}}>Price : Rs. {key.price}/-</span>  
        </Card.Text>
        <Button variant="primary" 
        onClick={()=>{cartDataAdd(key.id, key.name, key.price, key.category, key.description, key.image)}}>add to cart</Button>
      </Card.Body>
    </Card>

    
    </>
   )
}
 })



    return(
        <>
        <center>
           <h1> Search Products</h1>
           {/* Enter Product Name: <  input type="text" value={pro} 
           onChange={(e)=>{setPro(e.target.value)}}  style={{width:"100px"}}/> */}
           Enter product Name:<input type="text" value={pro} onChange={handleinput}
           style={{width:"100px"}}/>
        </center>
          <hr />

         
       <div id="cardData">
         {ans}     
       </div>
        </>
    )
}
export default Search;