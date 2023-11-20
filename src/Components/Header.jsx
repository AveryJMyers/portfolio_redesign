import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import amWhite2 from '../Photos/amWhite3.png'




export default function Header() {

    const navOptions = [
        {
            text: 'WORK',
            path: '/'
        },
        {
            text: 'RESUME',
            path: '/',

        },
        {
            text: 'ABOUT',
            path: '/',

        },
        {
            text: 'CONTACT',
            path: '/'
        }
    ]


    return (
        <>  
            <section className='header'>
                <img src={amWhite2} alt='amWhite' className='logo'></img>
                <nav className='nav'>
                    {navOptions.map((navOption, index) => (
                        <Link key={index} to={navOption.path} className='navLink'>{navOption.text}</Link>
                    ))}
                </nav>
            </section>
        </>
    )
}