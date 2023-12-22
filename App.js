import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/Components/Contact";
import About from "./src/Components/About";
import ErrorPage from "./src/Components/ErrorPage";
import RestaurantPage from "./src/Components/RestaurantPage";
//React.createElement => object => HTMLElement 

const AppLayout = () => {
  return(
    <div className="App-cont">
        <Header/>
        <Outlet/>
    </div>
  )
    
};

const appRouter = createBrowserRouter([
  { path: '/',
    element: <AppLayout/>,
    children: [
      { path: '/',
        element: <Body/>
      },
      { path: '/about',
        element: <About/>
      },
      { path: '/contact',
        element: <Contact/>
      },
      {
        path: '/res/:id',
        element: <RestaurantPage/>
      }
    ],
    errorElement: <ErrorPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);