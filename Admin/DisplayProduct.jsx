import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { itemRemove } from "../cartSlice";

const DisplayProduct = () => {
  const [mydata, setMydata] = useState([]); // Holds the data from API
  const dispatch = useDispatch();

  // Function to fetch the data from API
  const loadData = () => {
    const api = "http://localhost:3000/shopping"; // Replace with your backend URL
    axios.get(api).then((res) => {
      setMydata(res.data); // Populate mydata with fetched product data
    });
  };

  useEffect(() => {
    loadData(); // Fetch products on component mount
  }, []);

  // Function to remove product from the cart and database
  const remove = (id) => {
    console.log("Removing product with id:", id);
    
    // Send DELETE request to the backend to remove the product
    axios
      .delete(`http://localhost:3000/shopping/${id}`) // Make sure your API supports this
      .then((res) => {
        console.log("Product deleted from database:", res);
        
        // Dispatch the action to remove the item from the Redux store
        dispatch(itemRemove({ id }));

        // Manually update the `mydata` to remove the product from the UI
        setMydata((prevData) => prevData.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error("Error removing product:", error);
        alert("Failed to remove the product");
      });
  };

  // Render product rows dynamically
  const productRows = mydata.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100px", height: "auto" }}
          />
        </td>
        <td>{product.type}</td>
        <td>
          <button onClick={() => remove(product.id)}>Remove</button>
        </td>
      </tr>
    );
  });

  return (
    <>
     <div className="div">
     <h1 className="text-center my-4">Display Products</h1>
      <Container>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{productRows}</tbody>
        </Table>
      </Container>
     </div>
    </>
  );
};

export default DisplayProduct;
