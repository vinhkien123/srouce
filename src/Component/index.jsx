import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAciton } from '../Redux/action';
import { LOGIN } from '../Redux/action/type';
import $ from 'jquery'
function Component(props) {
    const dispatch = useDispatch()
    const login = useSelector(state => state.productReducer.login)


    function submit() {
        dispatch(createAciton(LOGIN, true))
    }
    function onClick() {
        if ($(".login").hasClass('active')) {
            $(".login").removeClass("active")
        } else {
            $(".login").addClass("active")
        }
    }

    function bodyClick(){

    }
    useEffect(()=>{
        document.body.addEventListener('click',bodyClick)
        
        return () => {
            document.body.removeEventListener('click',  )
        }
    },[])
    return (
        <div>
            {login ?
                <div className="login" onClick={onClick} >đăng nhập thành công</div> :
                <p className="hello">hello</p>

            }
            <button onClick={submit}>Đăng nhập</button>
        </div>
    );
}

export default Component;