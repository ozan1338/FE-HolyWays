import React from 'react'
import { useDispatch } from 'react-redux';

export default function Register() {

    const dispatch = useDispatch();

    const close = (event) =>{
        if(event.target.getAttribute('class') === 'modal'){
            dispatch({ type : 'CLOSE_MODAL' });
        }
    }
    return (
        <div className='modal' onClick={close}>
            <div className='modal-body'>
                <form>
                    <div className='form-heading'>
                        <h3>Register</h3>
                    </div>
                    <input type='text' placeholder='Email' required />
                    <input type='password' placeholder='Password' required />
                    <input type='text' placeholder='Full Name' required />
                    <button type='submit'>Login</button>
                    <div className='form-link'>
                        <span>Already have an account ? Klik <strong onClick={()=>{dispatch({type : 'OPEN_LOGIN'})}}>Here</strong></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
