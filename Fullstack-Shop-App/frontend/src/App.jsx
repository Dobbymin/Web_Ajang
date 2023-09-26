// import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/LandingPage';
import NotAuthRoutes from './components/NotAuthRoutes';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';

function Layout() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <NavBar />
            <main className="mb-auto w-10/12 max-w-4xl mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
function App() {
    // const [count, setCount] = useState(0);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* 로그인과 상관없이 갈 수 있는 경로 */}
                <Route index element={<LandingPage />} />

                {/* 로그인한 사람은 갈 수 없는 경로 */}
                <Route element={<NotAuthRoutes />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>

                {/* 로그인한 사람만 갈 수 있는 경로 */}
                {/* <Route element={<ProtectedRoutes />}>
                    <Route path="/product/upload" element={<UploadProductPage />} />
                    <Route path="/product/:productId" element={<DetailProductPage />} />
                    <Route path="/user/cart" element={<CartPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Route> */}
            </Route>
        </Routes>
    );
}

export default App;
