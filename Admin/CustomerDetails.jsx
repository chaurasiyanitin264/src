import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
// import "./CustomerDetails.css"; // Make sure to import the CSS file

const CustomerDetails = () => {
  const [mydata, setMydata] = useState([]);

  // Load data when the component is mounted
  const loadData = () => {
    let api = "http://localhost:3000/checkout";
    axios.get(api).then((res) => {
      console.log(res.data);
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
  <div className="div">
      <Container className="mt-5">
      <h1 className="text-center mb-4">Customer Details</h1>
      <Row>
        <Col xs={12} md={10} lg={8} className="mx-auto">
          <Table striped bordered hover responsive variant="light" className="positioned-table">
            <thead className="bg-primary text-white">
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Address</th>
                <th>Pin Code</th>
                <th>Mobile Number</th>
                <th>Payment Method</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {mydata.map((key) => (
                <tr key={key.id}>
                  <td>{key.name}</td>
                  <td>{key.city}</td>
                  <td>{key.address}</td>
                  <td>{key.pinCode}</td>
                  <td>{key.mobileNumber}</td>
                  <td>{key.paymethod}</td>
                  <td>{key.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default CustomerDetails;
