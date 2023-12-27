import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./common/Navbar";
import Home from "./common/Home";
import Error from "./common/Error";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./core/PrivateRoute";
import Setting from "./components/Dashboard/Setting";
import MyProfile from "./components/Dashboard/MyProfile";
import Writeblog from "./components/Dashboard/Writeblog";
import MyBlogs from "./components/Dashboard/MyBlogs";

function App() {
  return (
    <div className="w-[100%] min-w-screen min-h-[100vh] flex flex-col font-inter bg-[#031525] overflow-x-hidden">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="my-profile" element={<MyProfile />}></Route>
          <Route path="settings" element={<Setting />}></Route>
          <Route path="write-blog" element={<Writeblog />}></Route>
          <Route path="my-blogs" element={<MyBlogs />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
