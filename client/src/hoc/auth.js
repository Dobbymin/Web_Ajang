//client\src\hoc\auth.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

const Auth = (SpecificComponent, option, adminRoute = null) => {
    // null => 아무나 출입가능한 페이지
    // true => 로그인한 유저만 출입가능한 페이지
    // false => 로그인한 유저는 출입불가능한 페이지

    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            dispatch(auth()).then((response) => {
                console.log(response);

                //로그인x 상태
                if (!response.payload.isAuth) {
                    //옵션이 true인 페이지(로그인유저만 출입가능)
                    if (option) {
                        navigate('/login');
                    }
                }
                //로그인o 상태
                else {
                    if (adminRoute && !response.payload.isAdmin) {
                        navigate('/');
                    } else {
                        //옵션이 false인 페이지(로그인x유저만 출입가능)
                        if (option == false) {
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
