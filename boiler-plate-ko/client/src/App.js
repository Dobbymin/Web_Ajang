import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';

function App() {
    return (
        <div>
            <Routes>
                <Route index element={Auth(LandingPage, null)} />
                <Route path="login" element={Auth(LoginPage, false)} />
                <Route path="register" element={Auth(RegisterPage, false)} />
            </Routes>
            {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        </div>
    );
}

export default App;
