import Home from "./Pages/Home"
import About from "./Pages/About"
import Error from "./pages/Error"
import Contact from "./pages/Contact"
import Doctor from "./pages/Doctor"
import PatientProfile from "./Pages/PatientProfile"
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
    element: <Home />
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "ḍoctor",
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
    path: "/profile",
    element: <PatientProfile/>
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
              <RouterProvider  router={router} />
        </div>
      </div>
    </>
  )
}

export default App
