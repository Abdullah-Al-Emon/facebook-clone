import React from 'react';
 import { useFormik } from 'formik';
 import './LogInForm.css'
 
 const LogInForm = () => {
   // Note that we have to initialize ALL of fields with values. These
   // could come from props, but since we don’t want to prefill this form,
   // we just use an empty string. If we don’t do this, React will yell
   // at us.
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <div className='form-div'>
        <form onSubmit={formik.handleSubmit}>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       /> 
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       /> <br />
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       /> <br />
 
       <button type="submit">Submit</button>
     </form>
     </div>
   );
 };

 export default LogInForm;