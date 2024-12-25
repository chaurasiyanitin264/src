// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import axios from 'axios';
// import { message } from 'antd';
// import { useNavigate } from 'react-router-dom';

// const InsertProduct = () => {
//   const [input, setInput] = useState({});
//   const navigate = useNavigate();

//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setInput((values) => ({ ...values, [name]: value }));
//     console.log(input);
//   };

//   const handleSubmit = () => {
//     let api = "http://localhost:3000/shopping";
//     axios.post(api, input).then((res) => {
//       message.success("Product Succesfully save!!!");
//     });

//     navigate("/dashboard");
//   };

//   return (
//     <>
//       <style>
//         {`
//           h1 {
//             text-align: center;
//             margin: 20px;
//             color: #333;
//           }
//           .form-container {
//             width: 50%;
//             margin: 0 auto;
//           }
//           .form-label {
//             font-weight: bold;
//             color: #555;
//           }
//           .form-control, select {
//             border-radius: 4px;
//             padding: 10px;
//             font-size: 16px;
//             width: 100%;
//           }
//           button {
//             padding: 10px 20px;
//             font-size: 16px;
//             background-color: #007bff;
//             border: none;
//             border-radius: 4px;
//             cursor: pointer;
//           }
//         `}
//       </style>
//       <h1>Insert New Product</h1>
//       <Form className="form-container">
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label className="form-label">Enter name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={input.name}
//             onChange={handleInput}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label className="form-label">Enter price</Form.Label>
//           <Form.Control
//             type="text"
//             name="price"
//             value={input.price}
//             onChange={handleInput}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label className="form-label">Enter description</Form.Label>
//           <Form.Control
//             type="text"
//             name="description"
//             value={input.description}
//             onChange={handleInput}
//           />
//       </Form.Group>
//        {  /*<Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label className="form-label">Select Category</Form.Label>
//           <select
//             name="category"
//             value={input.category}
//             onChange={handleInput}
//           >
//             <option>men</option>
//             <option>women</option>
//             <option>kids</option>
//           </select>
//         </Form.Group> */}
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label className="form-label">Enter Image Path</Form.Label>
//           <Form.Control
//             type="text"
//             name="image"
//             value={input.image}
//             onChange={handleInput}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label className="form-label">Select Product Type</Form.Label>
//           <select
//             name="type"
//             value={input.type}
//             onChange={handleInput}
//           >
//             <option>new</option>
//             <option>old</option>
//           </select>
//         </Form.Group>

//         <Button
//           variant="primary"
//           type="button"
//           onClick={handleSubmit}
//         >
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default InsertProduct;









import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InsertProduct = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const api = "http://localhost:3000/shopping";
    axios.post(api, input)
      .then((res) => {
        message.success("Product Successfully saved!");
        navigate("/dashboard");
      })
      .catch((error) => {
        message.error("There was an error saving the product.");
      });
  };

  return (
    <div style={{ marginTop: '-50px', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Insert New Product</h1>
      <Form className="form-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Product Name */}
        <Form.Group className="mb-3">
          <Form.Label className="form-label" style={{ fontWeight: 'bold' }}>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={input.name || ''}
            onChange={handleInput}
            required
          />
        </Form.Group>

        {/* Product Price */}
        <Form.Group className="mb-3">
          <Form.Label className="form-label" style={{ fontWeight: 'bold' }}>Product Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={input.price || ''}
            onChange={handleInput}
            required
          />
        </Form.Group>

        {/* Product Description */}
        <Form.Group className="mb-3">
          <Form.Label className="form-label" style={{ fontWeight: 'bold' }}>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="description"
            value={input.description || ''}
            onChange={handleInput}
            required
          />
        </Form.Group>

        {/* Product Image Path */}
        <Form.Group className="mb-3">
          <Form.Label className="form-label" style={{ fontWeight: 'bold' }}>Image Path</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={input.image || ''}
            onChange={handleInput}
            required
          />
        </Form.Group>

        {/* Product Type */}
        <Form.Group className="mb-3">
          <Form.Label className="form-label" style={{ fontWeight: 'bold' }}>Product Type</Form.Label>
          <Form.Select
            name="type"
            value={input.type || ''}
            onChange={handleInput}
            required
          >
            <option value="new">New</option>
            <option value="old">Old</option>
          </Form.Select>
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          style={{ width: '100%', padding: '12px' }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default InsertProduct;
