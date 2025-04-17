import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Products from './pages/Products.jsx'
import SingleProduct from './pages/singleproduct.jsx'
import Signup from './pages/signup.jsx'
import Moile from './pages/Moile.jsx'
import Cart from './pages/cart.jsx'
import Vehical from './pages/Vehical.jsx'
import Bike from './pages/bike.jsx'
import Electronic from './pages/Electronic.jsx'
import Fashion from './pages/Fashion.jsx'
import Furniture from './pages/Furniture.jsx'
import { store } from '../src/config/redux/store/store.js'
import { Provider } from 'react-redux'
import Search from './pages/Search.jsx'
import Checkout from './pages/Checkout.jsx'
const router = createBrowserRouter([
  {
    path: '',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'Signup',
        element: <Signup/>
      },
      {
        path: 'checkout',
        element: <Checkout/>
      },
      {
        path: 'mobile',
        element: <Moile/>
      },
      {
        path: 'fashion',
        element: <Fashion/>
      },
      {
        path: 'furniture',
        element: <Furniture/>
      },
      {
        path: 'vehical',
        element: <Vehical/>
      },
      {
        path: 'electronic',
        element: <Electronic/>
      },
      {
        path: 'bike',
        element: <Bike/>
      },
      {
        path: 'product/:id',
        element: <SingleProduct/>
      },
      {
        path: 'search',
        element: <Search/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
   <RouterProvider router={router}/>
     </Provider>
  </StrictMode>,
)
