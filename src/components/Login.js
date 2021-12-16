import React from 'react'
import { useDispatch } from 'react-redux';

export default function Login() {

    const dispatch = useDispatch();

    const close = (event) =>{
        if(event.target.getAttribute('class') === 'modal'){
            dispatch({type : 'CLOSE_MODAL'});
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type : 'LOGIN_SUCCESS'});
        dispatch({type: 'CLOSE_MODAL'});
    }
    return (
        <div className='modal' onClick={close}>
            <div className='modal-body'>
                <form onSubmit={handleSubmit}>
                    <div className='form-heading'>
                        <h3>Login</h3>
                    </div>
                    <input type='text' placeholder='Email' required />
                    <input type='password' placeholder='Password' required />
                    <button type='submit'>Login</button>
                    <div className='form-link'>
                        <span>Don't have an account ? Klik <strong onClick={()=>{dispatch({type: 'OPEN_REGISTER'})}}>Here</strong></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
