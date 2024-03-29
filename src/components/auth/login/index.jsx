import { Box,  Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FormDetail, FormDiv, FormLabel, FormSubmit } from '../css/auth'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { theme } from '../../../sharedComponents/theme';
import { FaCheck } from 'react-icons/fa';
import { red } from '@mui/material/colors';
import { useSelector } from 'react-redux';

const Login = () => {
   const user = useSelector((state) => state.user.taskList)
    
    const navigate = useNavigate()
    const [message,setMessage]=useState()

    const schema = yup.object({
        email: yup
          .string()
          .email("Wrong email format")
          .required("Email is required"),
        password: yup.string().required("Password is required"),
      });
    
      const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isValid, isDirty },
      } = useForm({ mode: "all", resolver: yupResolver(schema) });

      const onSubmit = (data) => {
        const check = user?.find((val) => val.email === data.email && val.password === data.password);
        if (check) {
          const detail = user.filter(
            (val) => val.email === data.email && val.password === data.password
          );
          sessionStorage.setItem("user", JSON.stringify(detail));
          navigate("/home");
        } else {
          setMessage("The login details are incorrect");
        }
      };

      useEffect(() => {
        if (JSON.parse(sessionStorage.getItem("user")))
          return navigate("/home");
      }, []);

  return (
        <Box sx={{display:"flex",justifyContent:"center",width:"100%",height:"100%",pt:4}}>
        <Box sx={{display:"flex",flexDirection:"column",gap:2,width:380}}>
            <Typography variant='h3' sx={{textAlign:"center",mb:2,fontWeight:"bold"}}>Sign In</Typography>
            {message && <FormDetail>{message}</FormDetail>}
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                    <FormLabel>Email</FormLabel>
                    <FormDiv
                        className={`form-control ${
                        errors.email?.message
                            ? "invalid"
                            : isDirty && getValues("email") && "valid"
                        }`}
                    >
                        <input {...register("email")} />
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
                    <div style={{ marginTop: 20 }} className="form">
                    <FormLabel>Password</FormLabel>
                    <FormDiv
                        className={`form-control ${
                        errors.password?.message
                            ? "invalid"
                            : isDirty && getValues("password") && "valid"
                        }`}
                    >
                        <input type="password" {...register("password")} />
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
                    <FormSubmit type="submit" value="Sign in" />
                </form>
                <div style={{marginTop:30}}>
                    <Divider>New to Book Seller?</Divider>
                </div>
                <NavLink to={"/register"} style={{textTransform:"none",textDecoration:"none",width:"100%",cursor:"pointer",color:"black"}}> 
                  <button style={{border:"2px solid #dbdfe9",color:"black",borderRadius:12,padding:"5px",width:"100%",background:"white",cursor:"pointer"}}>
                  Sign Up 
                </button>
                </NavLink>
                </Box>
        </Box>
  )
}

export default Login