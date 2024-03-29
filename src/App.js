import { Navigate, Route, RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './pages/login';
import Home from './components/home';
import Dashboard from './components/dashboard';
import SignUp from './components/auth/signup';
import { ThemeProvider } from '@emotion/react';
import { theme } from './sharedComponents/theme';
import UserLayout from './components/layout/userlayout';
import MyBook from './components/book';
import BookShow from './components/booklist';


function App() {

  const router=createBrowserRouter(createRoutesFromElements(
    <Route  path='/'>
      <Route index element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<SignUp/>}/>
      <Route element={<UserLayout/>}>
        <Route path='home' element={<Dashboard/>}/>
        <Route path='home/book/:id' element={<BookShow/>}/>
        <Route path='mybooks' element={<MyBook/>}/>
      </Route>
      <Route path='*' element={<Navigate to={'/'}/>}/>
    </Route>
  ))

  return (
    <ThemeProvider theme={theme}>
   <RouterProvider router={router}/>
   </ThemeProvider>
  );
}

export default App;
