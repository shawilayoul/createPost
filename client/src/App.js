import React from "react";
//import InputForm from "./components/Input_form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/homes/Home"
import Post from "./pages/homes/post"
import Nav from "./components/Navagitor/Nav";
import CreatePost from "./pages/creates/createPost";

const App = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/create_post" element={<CreatePost />} />
                </Routes>
            </Router>
        </>
    )
}
export default App