import { Routes,Route } from "react-router-dom";
// import ProtectedRouter from "../components/ProtectedRoute";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path = "/login" element={<Login/>}/>
              <Route path = "/signup" element={<Signup/>}/>
              <Route path = "/" element={<Dashboard/>}/>
             {/* <Route path ="/calculator" element={<ProtectedRouter><Calculator/></ProtectedRouter>}/>
             <Route path ="/profile" element={<ProtectedRouter><Profile/></ProtectedRouter>}/>  */}
        </Routes>
    )
}

export default AppRoutes;