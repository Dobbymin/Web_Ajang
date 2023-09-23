import React from 'react';
// import Axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

const Auth = (SpecificComponent, option, adminRoute = null) => {
    function AuthenticationCheck() {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            dispatch(auth()).then((res) => {
                console.log(res);
                if (!res.payload.isAuth) {
                    if (option) {
                        navigate('/login');
                    }
                } else {
                    if (adminRoute && !res.payload.isAdmin) {
                        navigate('/');
                    } else {
                        if (option === false) {
                            navigate('/');
                        }
                    }
                }
            });
        }, []);

        return <SpecificComponent />;
    }
    return AuthenticationCheck;
};

export default Auth;
