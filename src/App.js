// import { useState, useEffect } from "react";
// import "./App.css";
// import logo from "./smartserv-logo.png";

// function App() {
//   const initialValues = { username: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);

//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;

//   if (!values.email) {
//     errors.email = "Email is required!";
//   } 

//   else if (!emailRegex.test(values.email)) {
//     errors.email = "This is not a valid email format!";
//   }

//   if (!values.password) {
//     errors.password = "Password is required";
//   }

//   // || password !== 'SmartServTest@123'
//   else if(!passwordRegex.test(values.email)){
//     errors.password = "Password is in wrong format"; 
//   }
  
//   if(emailRegex.test(values.email) && passwordRegex.test(values.email) && values.password === 'SmartServTest@123'){
    
//     return <Redirect to="/dashboard" />;

//     // Email.send({
//     //   Host : "smtp.elasticemail.com",
//     //   Username : "senrajvansh83@gmail.com",
//     //   Password : "8086313C0B9AEE61894B570194C30EE01275",
//     //   To : 'senrajvansh83@gmail.com',
//     //   From : "senrajvansh83@gmail.com",
//     //   Subject : "This is the subject",
//     //   Body : bodyMsg
//     // }).then(message => alert("message"));

//   }
//     return errors;
//   };

//   return (
//     <div className="container">

//       <div class="logo">
//         <image src={logo} alt="Logo" />
//       </div>
//       <div className="login-form">
//         <form className="loginform" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="text"
//               name="email"
//               id="email"
//               placeholder="Username"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//             <p>{formErrors.email}</p>
//           </div>
//           <div className="input-group">
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//             <p>{formErrors.password}</p>
//           </div>
//           <button className="fluid ui button blue">Submit</button>

//         </form>
//         <a href="#" class="forgot-password">Forgot the password?</a>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginUI from './Pages/LoginUI/LoginUI';
import DashboardUI from './Pages/DashboardUI/DashboardUI';
// import "./App.css"

function App() {
  return (
    <div className='page'>
      <Router>
        <Routes>
          <Route exact path='/' element={<LoginUI />} />
          <Route path='/dashboard' element={<DashboardUI />} />
        </Routes>
      </Router>
    </div>
  );

}



export default App;


// .................