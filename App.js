import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/Components/Contact";
import ErrorPage from "./src/Components/ErrorPage";
import RestaurantPage from "./src/Components/RestaurantPage";
//React.createElement => object => HTMLElement 

const AppLayout = () => {
  return(
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
    
};

const About = lazy(() => import('./src/Components/About'));

const appRouter = createBrowserRouter([
  { path: '/',
    element: <AppLayout/>,
    children: [
      { path: '/',
        element: <Body/>
      },
      { path: '/about',
        element: <Suspense><About/></Suspense>
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