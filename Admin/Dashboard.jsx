// import { Link, Outlet } from "react-router-dom";
// import { useState } from "react";

// const DashBoard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       {/* Fixed Header */}
//       <div
//         style={{
//           backgroundColor: "lightblue",
//           padding: "10px",
//           position: "fixed",
//           top: "0",
//           left: "0",
//           right: "0",
//           zIndex: "1000",
//         }}
//       >
//         <h1>Admin DashBoard</h1>
//       </div>

//       {/* Main Content */}
//       <div
//         id="adminDash"
//         style={{
//           display: "flex",
//           minHeight: "100vh",
//           flexDirection: "row",
//           marginTop: "60px",
//         }}
//       >
//         {/* Left Menu (Aside) */}
//         <aside
//           id="leftmenu"
//           style={{
//             width: "250px",
//             backgroundColor: "lightblue",
//             color: "#fff",
//             padding: "20px",
//             position: "fixed",
//             top: "60px",
//             bottom: "0",
//             left: "0",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             zIndex: "10",
//             transition: "all 0.3s ease",
//             transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
//             boxShadow: sidebarOpen ? "3px 0 6px rgba(0, 0, 0, 0.1)" : "none", // Adds shadow when open
//           }}
//         >
//           <h3>Admin Menu</h3>
//           {/* <Link
//             to="homepro"
//             style={{
//               color: "#fff",
//               marginBottom: "10px",
//               textDecoration: "none",
//               fontWeight: "bold",
//               fontSize: "18px",
//             }}
//           >
//             Home
//           </Link> */}
//           <Link
//             to="insertpro"
//             style={{
//               color: "#fff",
//               marginBottom: "10px",
//               textDecoration: "none",
//               fontWeight: "bold",
//               fontSize: "18px",
//             }}
//           >
//             Insert Product
//           </Link>
//           <Link
//             to="displaypro"
//             style={{
//               color: "#fff",
//               marginBottom: "10px",
//               textDecoration: "none",
//               fontWeight: "bold",
//               fontSize: "18px",
//             }}
//           >
//             Display Product
//           </Link>
//         </aside>

//         {/* Right Data Area */}
//         <div
//           id="rightdata"
//           style={{
//             marginLeft: sidebarOpen ? "250px" : "0",
//             padding: "20px",
//             width: "100%",
//             transition: "margin-left 0.3s ease",
//             marginTop: "60px",
//             transition: "margin-left 0.3s ease", 
//           }}
//         >
//           <Outlet />
//         </div>

//         {/* Mobile View - Checkbox for Sidebar Toggle */}
//         <input
//           type="checkbox"
//           id="sidebarToggle"
//           style={{ display: "none" }}
//           checked={sidebarOpen}
//           onChange={() => setSidebarOpen(!sidebarOpen)}
//         />
//         <label
//           htmlFor="sidebarToggle"
//           style={{
//             position: "absolute",
//             top: "20px",
//             left: "20px",
//             zIndex: "1001",
//             cursor: "pointer",
//             fontSize: "24px",
//             backgroundColor: "lightblue",
//             padding: "10px",
//             borderRadius: "5px",
//             boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)", // Adds shadow for mobile button
//           }}
//         >
//           ☰
//         </label>
//       </div>

//       {/* Mobile and Tablet View (Sidebar toggle) */}
//       <style>
//         {`
//           @media screen and (max-width: 768px) {
//             #adminDash {
//               flex-direction: column;
//             }
//             #leftmenu {
//               position: absolute;
//               height: 100%;
//               width: 250px;
//               background-color: lightblue;
//               top: 60px;
//               left: 0;
//               z-index: 100;
//             }
//             #rightdata {
//               margin-left: 0;
//               padding: 10px;
//               width: 100%;
//             }
//             #leftmenu a {
//               font-size: 16px;
//               padding: 10px;
//               display: block;
//             }
//             #sidebarToggle:checked ~ #leftmenu {
//               transform: translateX(0);
//             }
//           }

//           @media screen and (max-width: 1024px) {
//             #leftmenu {
//               width: 200px;
//             }
//             #rightdata {
//               margin-left: 200px;
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default DashBoard;







import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, Container, Collapse, Button, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate=useNavigate()

  return (
    <>
      {/* Fixed Header */}
      <Navbar bg="primary" variant="dark" fixed="top" style={{ zIndex: 1000 }}>
        <Container>
          <Navbar.Brand href="#" style={{ fontWeight: "bold", textAlign: "center", width: "100%" }}>
            Admin Dashboard
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div id="adminDash" style={{ display: "flex", minHeight: "100vh", marginTop: "60px" }}>
        {/* Left Menu (Sidebar) */}
        <Offcanvas
          show={sidebarOpen}
          onHide={() => setSidebarOpen(false)}
          placement="start"
          scroll={true}
          backdrop={false}
          style={{
            width: "250px",
            backgroundColor: "#2980b9", // Darker blue for sidebar
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admin Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="home" className="text-white" >
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="insertpro" className="text-white">
                Insert Product
              </Nav.Link>
              <Nav.Link as={Link} to="displaypro" className="text-white">
                Display Product
              </Nav.Link>
              <Nav.Link as={Link} to="customerdetails" className="text-white">
                Customer Details
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Right Data Area */}
        <div
          id="rightdata"
          style={{
            marginLeft: sidebarOpen ? "250px" : "0",
            padding: "20px",
            width: "100%",
            transition: "margin-left 0.3s ease",
            marginTop: "60px",
          }}
        >
          <Outlet />
        </div>

        {/* Sidebar Toggle Button for Mobile */}
        <Button
          variant="primary"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            position: "fixed",
            top: "-10px",
            // left: "20px",
            zIndex: 1001,
            fontSize: "24px",
            padding: "10px",
            borderRadius: "5px",
            color: "#fff",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          ☰
        </Button>
      </div>

      {/* Mobile and Tablet View (Sidebar toggle) */}
      <style>
        {`
          @media screen and (max-width: 768px) {
            #adminDash {
              flex-direction: column;
            }
            #leftmenu {
              position: absolute;
              height: 100%;
              width: 250px;
              background-color: #2980b9;
              top: 60px;
              left: 0;
              z-index: 100;
            }
            #rightdata {
              margin-left: 0;
              padding: 10px;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default DashBoard;
