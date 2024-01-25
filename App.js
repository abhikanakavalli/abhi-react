import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/Components/Contact";
import ErrorPage from "./src/Components/ErrorPage";
import RestaurantPage from "./src/Components/RestaurantPage";
import UserContext from "./src/Common/UserContext";
import AppStore from "./src/Common/AppStore";
import Cart from "./src/Components/Cart";

//React.createElement => object => HTMLElement 

const AppLayout = () => {
  const [userName, setName] = useState('Abhii');

  return(
    <Provider store={AppStore}>
    <UserContext.Provider value={{userName, setName}}>
    <div>
      <Header/>
      <Outlet/>        
    </div>
    </UserContext.Provider>
    </Provider>
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
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ],
    errorElement: <ErrorPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);