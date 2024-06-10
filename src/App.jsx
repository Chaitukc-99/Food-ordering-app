
/*
*header with logo on right and navbar on left
*body 
search bar
food cards
*footer
copyright 
links
social media


*/
import './App.css';
import Body from './Body';
import Header from './Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './About';
import React from 'react';
import ReactDOM from 'react-dom/client'
import RestaurantMenu from './RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './.utils/appStore';
import Cart from './Cart';
import UserLogin from './UserLogin';


const App = () => {

  return (
    <Provider store={appStore}>
      <div className="app-container">
        <Header />
        <Outlet />

      </div>
    </Provider>

  )
}



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div><App /></div>

    ),
    children: [{
      path: "/",
      element: (<div>
        <Body />
      </div>),
    }, {
      path: "/about",
      element: (<div>
        <About />
        <About />
      </div>),
    }, {
      path: "/restaurants/:resId",
      element: (<div><RestaurantMenu /></div>)
    },
    {
      path: "/cart",
      element: (<div><Cart /></div>)
    },
    {
      path: "/login",
      element: (<div><UserLogin /></div>)
    }]
  },

  /**{path: /restaurants/:resId,
  element: (<div><RestaurantMenu/></div>)
  }]**/
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>,
)



export default App;





