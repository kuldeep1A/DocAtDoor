import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import Contact from "./pages/Contact"
import Doctor from "./pages/Doctor"
import { Sform } from "./Components/Filter/sform"
import LoginForm from "./Pages/LoginForm"
import RegisterForm from "./Pages/RegisterForm"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "doctor",
    element: <Doctor/>
  },
  {
    path: "contact",
    element: <Contact/>
  },
  {
    path: "/test",
    element: <Sform/>
  },
  {
    path: "/login",
    element: <LoginForm/>
  },
  {
    path: "/register",
    element: <RegisterForm/>
  },
  {
    path: "*",
    element: <Error />
  }
]);

function App() {
  return (
    <>
      <div className="App">
        <div className="">
          <header className="App-header">
              <RouterProvider  router={router} />
          </header>
        </div>
      </div>
    </>
  )
}

export default App
