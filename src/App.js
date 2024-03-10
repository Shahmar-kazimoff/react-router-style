import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import Layout from "./components/Layout/Layout"
import Services from "./Pages/Services/Services"
import Practice from "./Pages/Practice/Practice"
import Contact from "./Pages/Contact/Contact"
import Attorneys from "./Pages/Attorneys/Attorneys"
import About from "./Pages/About/About"

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes >
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="services" element={<Services />} />
            <Route path="practice" element={<Practice />} />
            <Route path="contact" element={<Contact />} />
            <Route path="attorneys" element={<Attorneys />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}