import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/header'
import Hero from './Component/hero'
import Section1 from './Component/section1'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Social from "./Component/social"
import Footer from './Component/Footer'
import About from './Pages/About'
import BookPuppy from './Pages/BookPuppy'
import Blog from './Pages/Blog'
import PetPortrait from './Pages/PetPortrait'
import Contact from './Pages/Contact'
import { Toaster } from "sonner";
import AdminDashboard from './Pages/Admin'
import AdminAddBlog from './Pages/AddBlog'
import AdminManageBlogs from './Pages/ManageBlog'

function App() {
  return (
    <>
     <BrowserRouter>
        <Social />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-a-puppy" element={<BookPuppy />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pet-portrait" element={<PetPortrait />} />
          <Route path="/contact-us" element={<Contact />} />
        
        {/* <Routes> */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-blog" element={<AdminAddBlog />} />
          <Route path="/admin/manage-blogs" element={<AdminManageBlogs />} />
          <Route path="*" element={<NotFound />} />
        {/* </Routes> */}
          
        </Routes>
        <Footer />
     </BrowserRouter >
     <Toaster position="top-right" />
      
    </>
  )
}

export default App
