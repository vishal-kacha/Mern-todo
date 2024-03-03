import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element:  <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //  <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />
)
