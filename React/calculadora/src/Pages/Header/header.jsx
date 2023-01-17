import {Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from '../../Components/Nav/nav';
import './header.css'
import '../../assets/css/grid.css'
import Button from '../../Components/Button/button';
import { FaLinkedin, FaGithub, FaWhatsapp, FaBars } from "react-icons/fa";

const Header=()=>{
    const [click,setClick]=useState(false)

    const manipulaMenuMobile=()=>{
        setClick(!click);
    
    }

    const fechaMenuMobile=()=>{
        setClick(false);
    }

    const styleMobile={
        display: click?"block":"none",
    }
    const navMobile={
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        width: "100%",
    }

    const lis=[<Link to="/Financeira">Financeira</Link>]

    const lisMeida=[<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/felipe-seabra-d-almeida-a7478b159/"><FaLinkedin/></a>,
                    <a target="_blank" rel="noreferrer" href="https://github.com/FelipeDalmeida"><FaGithub/></a>,
                    <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5521976595909"><FaWhatsapp/></a>]
    return <header className='header-main col-xl-2 col-md-2 col-12'>
            <Button  className={'menu-mobile'} onClick={manipulaMenuMobile} title={<FaBars/>}/>
            <Nav style={click?navMobile:""} onClick={fechaMenuMobile} lis={lis} styleUl={styleMobile} classNameUl={"ul-header ul-desktop"}/>
            <Nav lis={lisMeida} classNameUl={"ul-header social-media"}/>
        
    </header>
}

export default Header 