import { Route, Routes } from "react-router-dom"
import Layout from "./common/Layout"
import Home from "./Home/Home"
import LoginPage from "./pages/LoginPage"
import HomeHeader from "./Home/HomeHeader"
import Register from "./pages/Register"
import { UserContextProvider } from "./UserContext"
import Account from "./pages/Account"
// import Dashboard from "./dashBoard/Dashboard"
// import Availibility from "./dashBoard/dashBoardPage/Availibility"
import Overview from "./dashBoard/Overview/Overview"


function App() {

  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route element={<HomeHeader />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/dash" element={<Layout />} >
            <Route path="overview" element={<Overview />} />
            {/* <Route path="availability" element={<Availibility />} /> */}
            {/* <Route path="dashboard" component={Dashboard} /> */}

            <Route path="/dash/account" element={<Account />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
