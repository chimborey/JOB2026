import { Route, Routes } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import AdminLayout from "../Components/Layout/AdminLayout";
import Home from "../Page/Page/Home";
import BlogDetails from "../Components/Details/BlogDetails";
import Blog from "../Page/Page/Blog";
import Recruters from "../Page/Page/Recruters";
import RecrutersDetails from "../Components/Details/RecrutersDetails";
import Candidates from "../Page/Page/Candidates";
import Candidates_Details from "../Components/Details/Candidates_Details";
import About from "../Page/Page/About";
import FAQ from "../Page/Page/FAQ";
import Contact from "../Page/Page/Contact";
import LoginForm from "../Page/Page/LoginForm";

export default function AppRouter() {
      return (
            <Routes>
                  {/* ============================================ MainLayout ============================================ */}
                  <Route path="/" element={<MainLayout />}>
                        {/* ----------------------------------------- Home ----------------------------------------- */}
                        <Route index element={<Home />} />
                        {/* ----------------------------------------- Blog ----------------------------------------- */}
                        <Route path="/blog" element={<Blog />} />
                        {/* ----------------------------------------- BlogDetails ----------------------------------------- */}
                        <Route path="/blog/:id" element={<BlogDetails />} />
                        {/* ----------------------------------------- Recruters ----------------------------------------- */}
                        <Route path="/recruters" element={<Recruters />} />
                        {/* ----------------------------------------- BlogDetails ----------------------------------------- */}
                        <Route path="/recruters/:id" element={<RecrutersDetails />} />
                        {/* ----------------------------------------- Candidates ----------------------------------------- */}
                        <Route path="/candidates" element={<Candidates />} />
                        {/* ----------------------------------------- Candidates_Details ----------------------------------------- */}
                        <Route path="/candidates/:id" element={<Candidates_Details />} />
                        {/* ----------------------------------------- About ----------------------------------------- */}
                        <Route path="/pages-about" element={<About />} />
                        {/* ----------------------------------------- FAQ ----------------------------------------- */}
                        <Route path="/pages-faq" element={<FAQ />} />
                        {/* ----------------------------------------- Contact ----------------------------------------- */}
                        <Route path="/pages-contact" element={<Contact />} />
                  </Route>
                  {/* ============================================ AdminLayout ============================================ */}
                  <Route path="/:businessType/" element={<AdminLayout />}></Route>
                  {/* ============================================ LoginForm ============================================ */}
                  <Route path="/login" element={<LoginForm />}></Route>
            </Routes>
      )
}