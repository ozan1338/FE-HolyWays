import React from 'react'

export default function Login({openLogin,openRegister}) {
    const close = (event) =>{
        if(event.target.getAttribute('class') === 'modal'){
            openLogin(false);
        }
    }
    return (
        <div className='modal' onClick={close}>
            <div className='modal-body'>
                <form>
                    <div className='form-heading'>
                        <h3>Login</h3>
                    </div>
                    <input type='text' placeholder='Email' required />
                    <input type='password' placeholder='Password' required />
                    <button type='submit'>Login</button>
                    <div className='form-link'>
                        <span>Don't have an account ? Klik <strong onClick={()=>{openRegister(true); openLogin(false)}}>Here</strong></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
