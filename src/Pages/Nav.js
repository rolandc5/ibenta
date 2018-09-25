import React, { Component } from 'react';

export default class Nav extends Component {
    render = () => {
        return ( 
            <div className='n-container'>
                <div className='n-wrapper'>
                    <div className='n-topNav'>
                        <h1 className='n-title'> IBENTA </h1>
                        <input className='n-search' type='text' />
                        <button className='n-button'> sign in </button>
                        <button className='n-button'> sign up </button>
                    </div>
                </div>
            </div>
        )
    }
}