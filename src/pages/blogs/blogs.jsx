import React, { useState, useCallback, useEffect } from "react";
import Container from "../container/Container";
import Popup from '../popup/popup';
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
  });

const Blogs =()=>{
    const handleOnSubmit = (values) => {
        const fullName = Object.keys(values)
          .map((key) => values[key])
          .join(" ");
        console.log(values);
      };

      const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
        },
        validationSchema: schema,
        onSubmit: handleOnSubmit,
      });

      const setInputValue = useCallback(
        (key, value) =>
          formik.setValues({
            ...formik.values,
            [key]: value,
          }),
        [formik]
      );


    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    
    const variables = {
        title:'Blog Page'
    }

    useEffect(() => {
       // Access initial value from session storage
        var pageView = sessionStorage.getItem("pageView");
        if (pageView == null) {
          // Initialize page views count
          pageView = 1;
        } else {
          // Increment count
          pageView = Number(pageView) + 1;
        }
        // Update session storage
        sessionStorage.setItem("pageView", pageView);
    
        setCount(pageView);
        console.log('useeffectc call');
        console.log(sessionStorage.getItem("pageView"));
    }, [setCount]); //No dependency to trigger in each page load


    return (
        <Container {...variables}>
            <div>        
                <button onClick={() => setOpen(true)}> Click to Open       Popup</button>
                {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
            </div>    
          
              <div>Page View Count is:</div>
              {count}
             

            <form className="signupFrom" method="post" onSubmit={formik.handleSubmit}>
                <label>Name</label><br></br>
                <input
                    placeholder="Type your First Name"
                    value={formik.values.firstName}
                    onChange={(e) => setInputValue("firstName", e.target.value)}
                />
                 <small>{formik.errors.firstName}</small>
                <label>Email</label><br></br>
                <input
                    placeholder="Type your Last Name"
                    value={formik.values.lastName}
                    onChange={(e) => setInputValue("lastName", e.target.value)}
                />
                <small>{formik.errors.lastName}</small>
                {!!formik.errors.lastName && <br />}
                <button type="submit" disabled={!formik.isValid}>
                    Submit
                </button>
            </form>

        </Container>
    )
}

export default Blogs