import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import {  FormDiv, FormLabel, FormResult, SubmitButton } from '../css/auth'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import '../css/auth.css'
import { grey, red } from '@mui/material/colors';
import { theme } from '../../../sharedComponents/theme';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../redux/slice/LoginSlice';

const SignUp = () => {
    const navigate = useNavigate()
    const [message,setMessage] = useState()
    const dispatch =useDispatch()
    
  const schema = yup.object({
    firstName: yup
      .string()
      .min(3, "Minimum 3 symbols")
      .required("First name is required"),
    lastName: yup
      .string()
      .min(3, "Minimum 3 symbols")
      .required("Last name is required"),
    img: yup
      .mixed()
      .required("Recipe picture is required")
      .test(
        "fileSize",
        "File size is too large. File size should be less than 2MB",
        (value) => {
          return value && value?.[0]?.size <= 2 * 1024 * 1024; // 1 MB
        }
      ),
    email: yup
      .string()
      .email("Wrong email format")
      .required("Email is required"),
    password: yup.string().min(6,"Atleast 6 characters must be").required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Confirm Password does not match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { isValid, errors, isDirty },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });

  const onSubmit = (data) => {

    data = { ...data, img: URL.createObjectURL(data.img[0]) };
    console.log(data);
    const id = Date.now();
    let task = { ...data, id };
    dispatch(addUser(task));
    setMessage("Registered Successful");
    reset();
    setTimeout(() => {
      navigate("/login");
    }, [1000]);
  };

  return (
   <Box sx={{display:'flex',justifyContent:"center",height:"100%",pt:4,width:"100%"}}>
    <Box sx={{display:"flex",flexDirection:"column",gap:2,width:380}}>
    <Typography variant='h3' sx={{textAlign:"center",mb:2,fontWeight:"bold"}}>Create Account</Typography>

    {message && <FormResult>{message}</FormResult>}
    <form onSubmit={handleSubmit(onSubmit)} >
            <div>
              <FormLabel>First name</FormLabel>
              <FormDiv
                className={`form-control ${
                  errors.firstName?.message
                    ? "invalid"
                    : isDirty && getValues("firstName") && "valid"
                }`}
              >
                <input placeholder="First name" {...register("firstName")} />
                {errors.firstName?.message && !isValid ? (
                  <MdOutlineErrorOutline fill="red" />
                ) : (
                  isDirty &&
                  getValues("firstName") && (
                    <FaCheck fill={theme.palette.success.main} />
                  )
                )}
              </FormDiv>
              {errors.firstName?.message && (
                <small style={{ color: red[400] }}>
                  {errors.firstName.message}
                </small>
              )}
            </div>
            <div style={{ marginTop: 15 }}>
              <FormLabel>Last name</FormLabel>
              <FormDiv
                className={`form-control ${
                  errors.lastName?.message
                    ? "invalid"
                    : isDirty && getValues("lastName") && "valid"
                }`}
              >
                <input placeholder="Last name" {...register("lastName")} />
                {errors.lastName?.message && !isValid ? (
                  <MdOutlineErrorOutline fill="red" />
                ) : (
                  isDirty &&
                  getValues("lastName") && (
                    <FaCheck fill={theme.palette.success.main} />
                  )
                )}
              </FormDiv>
              {errors.lastName?.message && (
                <small style={{ color: red[400] }}>
                  {errors.lastName.message}
                </small>
              )}
            </div>
           
            <div style={{ marginTop: 15 }}>
              <FormLabel>Image</FormLabel>
              <FormDiv style={{ marginTop: 10 }}>
                <input
                  type="file"
                  {...register("img")}
                  style={{ width: "100%" }}
                />
              </FormDiv>
              {errors.img?.message && (
                <small style={{ color: red[400] }}>{errors.img.message}</small>
              )}
            </div>
            <div style={{ marginTop: 15 }}>
              <FormLabel>Email</FormLabel>
              <FormDiv
                className={`form-control ${
                  errors.email?.message
                    ? "invalid"
                    : isDirty && getValues("email") && "valid"
                }`}
              >
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email?.message && !isValid ? (
                  <MdOutlineErrorOutline fill="red" />
                ) : (
                  isDirty &&
                  getValues("email") && (
                    <FaCheck fill={theme.palette.success.main} />
                  )
                  )}
              </FormDiv>
             {errors.email?.message && (
                <small style={{ color: red[400] }}>
                  {errors.email.message}
                </small>
              )}
            </div>
            <div style={{ marginTop: 15 }}>
              <FormLabel>Password</FormLabel>
              <FormDiv
                className={`form-control ${
                  errors.password?.message
                    ? "invalid"
                    : isDirty && getValues("password") && "valid"
                }`}
              >
                <input
                  type="password"
                  placeholder="Atleast 6 characters"
                  {...register("password")}
                />
                {errors.password?.message && !isValid ? (
                  <MdOutlineErrorOutline fill="red" />
                ) : (
                  isDirty &&
                  getValues("password") && (
                    <FaCheck fill={theme.palette.success.main} />
                  )
                )}
              </FormDiv>
              {errors.password?.message && (
                <small style={{ color: red[400] }}>
                  {errors.password.message}
                </small>
              )}
            </div>
            <div style={{ marginTop: 20 }}>
              <FormLabel>Confirm Password</FormLabel>
              <FormDiv
                className={`form-control ${
                  errors.confirmPassword?.message
                    ? "invalid"
                    : isDirty && getValues("confirmPassword") && "valid"
                }`}
              >
                <input
                  type="password"
                  placeholder="Password confirmation"
                  {...register("confirmPassword")}
                  style={{
                    color: theme.palette.warning.contrastText,
                  }}
                />
                {errors.confirmPassword?.message && !isValid ? (
                  <MdOutlineErrorOutline fill="red" />
                ) : (
                  isDirty &&
                  getValues("confirmPassword") && (
                    <FaCheck fill={theme.palette.success.main} />
                  )
                )}
              </FormDiv>
              {errors.confirmPassword?.message && (
                <small style={{ color: red[400] }}>
                  {errors.confirmPassword.message}
                </small>
              )}
            </div>
            <SubmitButton type="submit" variant="contained" disabled={!isValid} sx={{marginTop:3}}>
              Submit
            </SubmitButton>
           
          </form>
          <div style={{color:grey[800],textAlign:"center"}}>Already have an account? <NavLink to={"/login"} style={{ cursor: "pointer",fontWeight:"bold",textTransform:"none",textDecoration:"none",color:grey[800] }}> Sign In</NavLink>
          </div>
          </Box>
   </Box>
  )
}

export default SignUp