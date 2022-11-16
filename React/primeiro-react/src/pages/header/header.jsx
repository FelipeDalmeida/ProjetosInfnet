import {Link } from 'react-router-dom';
import Navbar from '../../components/nav/navbar';
import Logo from '../../components/img/logo';
import imgLogo from '../../assets/img/logo.png'
import Dropdown from '../../components/nav/dropdown';
import '../../assets/css/bootstrap.css'
import './header.css'




const Header=()=>{

    // const onHover=(event)=>{
    //     event.target.style.backgroundColor="rgb(227, 82, 20)"
    // }
    // const offHover=(event)=>{
    //     event.target.style.backgroundColor="rgb(255, 101, 0)"
    // }

    let headerStyle={
        display:"flex",
        justifyContent:"space-between",
        height: "50px",
        backgroundColor:"rgb(255, 101, 0)",
        alignItems: "center",
        
    }
    let logoStyle={
        width:"100%",
        
    }
    let anchorStyle={
        textDecoration: "none",
        padding: "15px",
        color:"white",
    }

    let ulStyleDropdown={
        backgroundColor:"rgb(255, 101, 0)",
        color:"white",
    }
    let anchorStyleSub={
        textDecoration: "none",
        color:"white",
        width: "100%",
        float: "right",
        textAlign: "center"
    }
    let navbarStyle={
        
        float:"right"
    }
    
   


    let subProdutos=[<Link style={anchorStyleSub} className={"anchor-header"} to="/product/1">Produto 1</Link>,
    <Link style={anchorStyleSub} className={"anchor-header"} to="/product/2">Produto 2</Link>,
    <Link style={anchorStyleSub} className={"anchor-header"} to="/product/3">Produto 3</Link>,
    <Link style={anchorStyleSub} className={"anchor-header"} to="/product/4">Produto 4</Link>]

    let lis=[<Link style={anchorStyle} className={"anchor-header"} to="/">Login</Link>,
            <Link style={anchorStyle} className={"anchor-header"} to="/home">Home</Link>,
            <Dropdown title={<Link style={anchorStyle} className={"anchor-header"} to="/product/:id">Produto</Link>} ulStyle={ulStyleDropdown} listaLi={subProdutos}/>,
            <Link style={anchorStyle} className={"anchor-header"} to="/register">Registre-se</Link>,
            <Link style={anchorStyle} className={"anchor-header"} to="/cart">Carrinho</Link>]

    return <header style={headerStyle}>
    
    <div className={"col-3"} style={{float:"left", margin:"0 0 0 10px"}} ><Logo img={imgLogo} alt={'Logo Hardwareflix'} style={logoStyle} /></div>
    
        
    <Navbar listaLi={lis} navStyle={navbarStyle}/>
      
    
    </header>
}

export default Header