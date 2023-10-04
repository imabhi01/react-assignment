"use client";

import React, { useState } from 'react';
import Link from 'next/link';
// import {axios} from 'axios';

export default function SignUp(){
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirm_password: ""
    });

    const onSignUp = async () => {
        alert('Sign Up');
        // Implement signup logic using Axios or other means
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>SignUp</h1>
            <hr />
            <label htmlFor="email">Email</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg-mb-4 focus:outline-none focus: border-gray-600 rounded-md"
                id="email" 
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Email"
                data-autocomplete="custom-value"
            />

            <label htmlFor="email">Password</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg-mb-4 focus:outline-none focus: border-gray-600 rounded-md"
                id="password" 
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Password"
                data-autocomplete="custom-value"
            />
            <label htmlFor="confirm_password">Confirm Password</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg-mb-4 focus:outline-none focus: border-gray-600 rounded-md"
                id="confirm-password" 
                type="password"
                value={user.confirm_password}
                onChange={(e) => setUser({...user, confirm_password: e.target.value})}
                placeholder="Confirm Password"
                data-autocomplete="custom-value"
            />

            <button 
                onClick={onSignUp}
                className='p-2 m-2 border border-gray-300 
                rounded-md mb-4 focus: outline-none 
                focus: border-gray-600'>Submit</button>
            <hr />
            <Link
                className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600"
                href="/login"
            >
                Go to Login
            </Link>
        </div>
    )
}