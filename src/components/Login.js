import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../action/userActions';

export default function Login() {

    const [name,setName] = useState('');
    const [password , setPassword] = useState('');
    const dispatch = useDispatch();

    const close = (event) =>{
        if(event.target.getAttribute('class') === 'modal'){
            dispatch({type : 'CLOSE_MODAL'});
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            name,
            password
        }

        dispatch(loginUser(user));
        dispatch({type: 'CLOSE_MODAL'});
    }
    return (
        <div className='modal' onClick={close}>
            <div className='modal-body'>
                <form onSubmit={handleSubmit}>
                    <div className='form-heading'>
                        <h3>Login</h3>
                    </div>
                    <input type='text' value={name} onChange={(event)=>setName(event.target.value)} placeholder='Email' required />
                    <input type='password' value={password} onChange={(event)=>setPassword(event.target.value)}  placeholder='Password' required />
                    <button type='submit'>Login</button>
                    <div className='form-link'>
                        <span>Don't have an account ? Klik <strong onClick={()=>{dispatch({type: 'OPEN_REGISTER'})}}>Here</strong></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
