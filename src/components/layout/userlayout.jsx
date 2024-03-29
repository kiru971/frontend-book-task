import React, { useEffect, useState } from 'react'
import Header from '../header'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const UserLayout = () => {
    const navigate = useNavigate();
    const [isLogged, setLogged] = useState(false);
    const book = useSelector((state) => state.book.task)
 
    const [data,setData]=useState(book)
  
    const checkLogin = () => {
      const item = JSON.parse(sessionStorage.getItem("user"));
     
      if (!item) {
        setLogged(false);
        navigate("/");
      } else setLogged(true);
    };
  
    useEffect(() => {
      checkLogin();
    }, []);
    const filterBySearch = (e) => {
      if (e.target.value === "") {
        setData(book);
      } else {
        const filterItem = book.filter((item) => {
          return item.title.toLowerCase().includes(e.target.value.toLowerCase());
        });
        console.log(filterItem);
        setData(filterItem);
      }
    };

    
  return (
    <>
    {isLogged &&
    <>
    <Header filterBySearch={filterBySearch}/>
    <Outlet context={[data]}/>
    </>}
    </>
  )
}

export default UserLayout