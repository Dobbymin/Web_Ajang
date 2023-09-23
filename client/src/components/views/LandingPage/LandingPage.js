import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './LandingPage.css';
import Auth from '../../../hoc/auth';

function LandingPage() {
    useEffect(() => {
        axios.get('/api/hello').then((response) => console.log(response.data));
    }, []);

    const onClickHandler = () => {
        axios.get('/api/users/logout').then((response) => {
            console.log(response.data);
            if (response.data.success) {
                window.location.href = '/login';
            } else {
                alert('로그아웃 하는데 실패 했습니다.');
            }
        });
    };

    return (
        <div className="Wrapper_div">
            <h2>시작 페이지</h2>

            <button onClick={onClickHandler}>로그아웃</button>
        </div>
    );
}

export default Auth(LandingPage, null);
