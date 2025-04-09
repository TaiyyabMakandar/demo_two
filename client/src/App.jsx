import React from 'react'
import DrawerAppBar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DesignAndBuild from './pages/DesignAndBuild'
import Registration from './pages/Register'
import Contact from './pages/Contact'
import Login from './pages/Login'
import { Logout } from './pages/logout'
import { AdminUsers } from './pages/Admin-user'
import { AdminContacts } from './pages/Admin-Contacts'
import { AdminLayout } from './components/layouts/Admin-Layout'
import './App.css';
import { AdminUpdate } from './pages/Admin-Update'

const App = () => {
  return (
    <>
      <BrowserRouter>
        < DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designandbuild" element={<DesignAndBuild />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

