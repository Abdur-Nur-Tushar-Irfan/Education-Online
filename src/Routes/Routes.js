import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import About from "../Pages/About/About";
import AllCourse from "../Pages/AllCourses/AllCourse";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Register from "../Pages/Register/Register";


export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/allcourses/:id',
                element:<AllCourse></AllCourse>,
                loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
                
            },
          
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
          
           
        ]

    }
])