import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


export default function Hero() {
    const words = ['CREATE', 'DESIGN', 'BUILD', 'LEARN',];
    const [currentWord, setCurrentWord] = useState(words[0]);
    useEffect(() => {
        let currentIdx = 0; // start with the first word
        const interval = setInterval(() => {
            currentIdx = (currentIdx + 1) % words.length;
            setCurrentWord(words[currentIdx]);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);



    return (
        <> 
            <section className='hero'>
                <div className='headingContainer'>
                    <h1 className='heroHeadings mainLine'>I AM AVERY MYERS, <br></br>A FULL-STACK DEVELOPER</h1>
                    <h3 className='heroHeadings tagLine'>LET'S <span className='currentWord'>{currentWord}</span> TOGETHER.</h3>
                </div>
            </section>
        </>
    )
}