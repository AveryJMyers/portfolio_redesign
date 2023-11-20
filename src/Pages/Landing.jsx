import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import '../App.css'
import MyWork from '../Components/MyWork';
import Footer from '../Components/Footer';


export default function SingleLanding() {

    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <MyWork></MyWork>
            <Footer></Footer>
        </>
    )
}