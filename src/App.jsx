import React, { Suspense, useState, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./assets/tailwind.css";
import Loading from "./components/Loading";
// import FiturXyz from "./pages/FiturXyz.jsx";

// Menggunakan React.lazy untuk optimasi performa
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const NotFound = lazy(() => import("./components/NotFound"));
const MainLayouts = lazy(() => import("./layouts/MainLayouts"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Forgot = lazy(() => import("./pages/Auth/Forgot"));
const AuthLayout = lazy(() => import("./layouts/AuthLayouts"));

const Product = lazy(() => import("./pages/Product"));
const ProductDetail = lazy(() => import("./pages/ProductDetail.jsx"));
const Components = lazy(() => import("./pages/Components"));
const FiturXyz = lazy(() => import("./pages/FiturXyz"));
const Note = lazy(() => import("./pages/Note"));

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const location = useLocation();

    // Cek apakah route valid
    // const validRoutes = ["/", "/orders", "/customers", "/login", "/register", "/forgot", "/product","/products/:id"];
    // const isErrorPage = !validRoutes.includes(location.pathname);

    // Jika route tidak ditemukan, tampilkan NotFound
    // if (isErrorPage) {
    //     return (
    //         <Suspense fallback={<Loading />}>
    //             <NotFound />
    //         </Suspense>
    //     );
    // }

    // Return utama untuk Routes aplikasi
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {/* Grup Route dengan Layout Utama (Pakai Sidebar/Header) */}
                <Route element={<MainLayouts />}>
                    <Route path="/" element={<Dashboard searchTerm={searchTerm} />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/components" element={<Components />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/fiturxyz" element={<FiturXyz />} />
                    <Route path="/notes" element={<Note />} />
                </Route>

                {/* Grup Route untuk Auth (Login/Register) */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot" element={<Forgot />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;