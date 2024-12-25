import LoaderComp from "./Loader";
import { useState } from "react";
const PaymentDone=()=>{
    const [isLoader, setIsLoader]=useState(true);


    setTimeout(()=>{
        setIsLoader(false);
    }, 2000);

    return(
        <>


        {isLoader?(
             <div style={{width:"100px", margin:"auto", paddingTop:"30px"}}>
             <LoaderComp/>
             </div>
        ):(
            <h2 align="center" style={{color:"green"}}> Your Order Succesfully Placed <br/>
           We will send your products within 6 to 7 working days</h2>
        )}
        
         
          
        </>
    )
}

export default PaymentDone;