// import React, { useState } from "react";  // Import React
// import { useParams, useNavigate } from "react-router-dom";  // Import hooks
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import CashonDelivery from "./CashonDelivery";
// import InternetBanking from "./InternetBanking";
// import DebitCard from "./DebitCard";
// import Upi from "./Upi";

// import axios from "axios";
// import { message } from "antd";

// const CheckOut = () => {
//   const { amt } = useParams();
//   const [paymethod, setPayMethod] = useState("");
//   const [formData, setFormData] = useState({});

//   const navigate = useNavigate();

//   const handleInput = (e) => {
//     const { value } = e.target;
//     setPayMethod(value);
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const paydone = () => {


//     let api="http://localhost:3000/checkout";
//     axios.post(api,formData).then((res)=>{
//       message.success("data save");
//       console.log(res)
//     })



//     // Validate if all fields are filled
//     const isFormValid = Object.values(formData).every(field => field.trim() !== "");
//     if (isFormValid) {
//       navigate("/paydone");
//     } else {
//       alert("Please fill all the fields before submitting.");
//     }
//   };



//   let ans1;
//   if (paymethod === "cash") {
//     ans1 = <CashonDelivery />;
//   } else if (paymethod === "internet") {
//     ans1 = <InternetBanking />;
//   } else if (paymethod === "debit") {
//     ans1 = <DebitCard />;
//   } else {
//     ans1 = <Upi />;
//   }

//   return (
//     <>
//       <h1>CheckOut</h1>
//       <h3 align="center">Total Payable Amount: {amt}</h3>

//       <div id="paydesign">
//         <div id="cusform">
//           <h4>Fill Your Shipping Address</h4>
//           <Form>
//             <Form.Group className="mb-3" controlId="formBasicName">
//               <Form.Label>Enter name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicCity">
//               <Form.Label>Enter city</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicAddress">
//               <Form.Label>Enter Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPinCode">
//               <Form.Label>Enter Pin Code</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="pinCode"
//                 value={formData.pinCode}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicMobileNumber">
//               <Form.Label>Enter Mobile number</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="mobileNumber"
//                 value={formData.mobileNumber}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>

//             <Button variant="primary" type="button" onClick={paydone} >
//               Submit
//             </Button>
//           </Form>
//         </div>

//         <div id="paymethod">
//           <h4>Select Your Payment Method</h4>

//           <input
//             type="radio"
//             name="paymethod"
//             value="cash"
//             onChange={handleInput}
//           />
//           Cash on Delivery
//           <input
//             type="radio"
//             name="paymethod"
//             value="internet"
//             onChange={handleInput}
//           />
//           Internet Banking
//           <input
//             type="radio"
//             name="paymethod"
//             value="debit"
//             onChange={handleInput}
//           />
//           Debit/Credit Card
//           <input
//             type="radio"
//             name="paymethod"
//             value="upi"
//             onChange={handleInput}
//           />
//           UPI/Phone Pay

//           {ans1}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CheckOut;





import React, { useState } from "react";  // Import React
import { useParams, useNavigate } from "react-router-dom";  // Import hooks
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import CashonDelivery from "./CashonDelivery";
import InternetBanking from "./InternetBanking";
import DebitCard from "./DebitCard";
import Upi from "./Upi";
import axios from "axios";
import { message } from "antd";

const CheckOut = () => {
  const { amt, image } = useParams();  // Get the amount from the URL
  const [paymethod, setPayMethod] = useState("");  // Track selected payment method
  const [formData, setFormData] = useState({});  // Track form data
  const navigate = useNavigate();

  const handleInput = (e) => {
    setPayMethod(e.target.value);  // Update payment method on selection
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const paydone = () => {
    // Include payment method and amount in the form data
    const finalFormData = {
      ...formData,
      paymethod: paymethod,
      amount: amt // Adding the total amount to the form data

    };

    // API call for saving form data
    const api = "http://localhost:3000/checkout";
    axios.post(api, finalFormData)
      .then((res) => {
        message.success("Data saved successfully!");
        console.log(res);
      })
      .catch((error) => {
        message.error("Something went wrong, please try again.");
        console.error(error);
      });

    // Validate if all fields are filled (including paymethod)
    const isFormValid = Object.values(finalFormData).every((field) => field.trim() !== "");
    if (isFormValid) {
      navigate("/paydone");  // Navigate to the payment confirmation page
    } else {
      message.error("Please fill all the fields before submitting.");
    }
  };

  const renderPaymentMethodComponent = () => {
    switch (paymethod) {
      case "cash":
        return <CashonDelivery />;
      case "internet":
        return <InternetBanking />;
      case "debit":
        return <DebitCard />;
      case "upi":
        return <Upi />;
      default:
        return null;
    }
  };

  return (
    <>
      <h1 className="text-center my-4" >CheckOut</h1>
      <h3 className="text-center my-2">Total Payable Amount: ₹{amt}</h3>

      <div className="d-flex justify-content-center">
        <Card style={{ width: '50%' }}>
          <Card.Body>
            <h4 className="text-center mb-4">Fill Your Shipping Address</h4>
            <Form>
              {/* Form Fields */}
              <Row className="mb-3">
                <Col>
                  <Form.Label>Enter Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleFormChange}
                    required
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label>Enter City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city || ""}
                    onChange={handleFormChange}
                    required
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label>Enter Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address || ""}
                    onChange={handleFormChange}
                    required
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label>Enter Pin Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="pinCode"
                    value={formData.pinCode || ""}
                    onChange={handleFormChange}
                    required
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label>Enter Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobileNumber"
                    value={formData.mobileNumber || ""}
                    onChange={handleFormChange}
                    required
                  />
                </Col>
              </Row>

              <Button variant="primary" type="button" onClick={paydone} block>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>

      {/* Payment Method Section - below the form */}
      <div className="mt-4 text-center">
        <h4>Select Your Payment Method</h4>

        {/* Payment Method Radio Buttons */}
        <div className="mb-3">
          <Form.Check
            type="radio"
            label="Cash on Delivery"
            name="paymethod"
            value="cash"
            checked={paymethod === "cash"}
            onChange={handleInput}
          />
          <Form.Check
            type="radio"
            label="Internet Banking"
            name="paymethod"
            value="internet"
            checked={paymethod === "internet"}
            onChange={handleInput}
          />
          <Form.Check
            type="radio"
            label="Debit/Credit Card"
            name="paymethod"
            value="debit"
            checked={paymethod === "debit"}
            onChange={handleInput}
          />
          <Form.Check
            type="radio"
            label="UPI/Phone Pay"
            name="paymethod"
            value="upi"
            checked={paymethod === "upi"}
            onChange={handleInput}
          />
        </div>

        {/* Render Payment Method Component */}
        {renderPaymentMethodComponent()}
      </div>
    </>
  );
};

export default CheckOut;



