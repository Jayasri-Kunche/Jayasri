// import logo from './logo.svg';
// import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import {createBrowserRouter, Outlet} from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Login from './Components/Login';
import ResMenu from './Components/ResMenu';
import Error from './Components/Error';
// import Test from './Components/Test';
const App = () => {
  return(
    <div>
      <Head/>
      <Outlet/>
      {/* <Body/> */}
    </div>
  )
}
export const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Body/>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/cart',
        element : <Cart/>
      },
      {
        path : '/login',
        element : <Login/>
      },
      {
        path : '/menu/:id',
        element : <ResMenu/>
      }
    ],
    errorElement : <Error/>
  }
 
])

// export default App;