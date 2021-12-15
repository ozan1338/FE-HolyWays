import React from 'react'
import Navbar from '../components/Navbar'

export default function FormFund() {
    return (
        <div>
            <Navbar />
            <div className='container-2'>
                <div className='form-fund-page'>
                    <h1>Form fund</h1>
                    <form className='form-fund-page-form'>
                        <input type="text" placeholder='Title' />
                        <label htmlFor="file-input" >Attach A File</label>
                        <input id="file-input" type="file" />
                        <input type="text" placeholder='Goals Donation'/>
                        <textarea placeholder='Description' />
                    </form>

                </div>
            </div>
        </div>
    )
}
