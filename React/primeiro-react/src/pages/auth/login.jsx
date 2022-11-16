import Button from '../../components/button/button'
import Text from '../../components/text/text'
import Logo from '../../components/img/logo'
import imgLogo from '../../assets/img/logo.png'
import Imput from '../../components/textbox/input'
import Checkbox from '../../components/textbox/checkbox'
import './auth.css'
import {useNavigate } from "react-router";
import {useState} from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
    const goToPage=()=>{navigate('/register')}

    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    

    let loginStyle={
        // width:"100%",
        maxWidth: "300px",
        boxSizing:"borderBox",
        marginLeft:"auto",
        marginRight:"auto",
        padding:"5px",
        marginTop:"4em",
        border:"1px solid rgb(227, 82, 20)",
        borderRadius:"5px",
        boxShadow:"5px 5px 10px rgb(227, 82, 20)"
    }
    
    let logoStyle={
        width:"100%",
    }


    let styleTitulo={
        'color':'rgb(227, 82, 20)',
        textAlign: "center",
        textTransform:"uppercase"
        
    }

    let styleCheckbox={
        margin:"5px 0"
    }
    let checkStyle={
        'color':'rgb(227, 82, 20)'
    }

    
    return  <div style={loginStyle}>
                <Logo img={imgLogo} alt={'Logo Hardwareflix'} style={logoStyle}/>
                <Text text={'Faça seu Login'} type={'h3'} style={styleTitulo}/>
                <Imput value={email} id={'email'} type={'email'} label={'Digite seu e-mail:'} onChange={(e)=>setEmail(e.target.value)}/>
                <Imput value={password} id={'password'} type={'password'} label={'Digite sua senha:'} onChange={(e)=>setPassword(e.target.value)} />
                <Checkbox id={'loginCheckbox'} label={'Manter conectado?'} style={styleCheckbox} checked={true} checkStyle={checkStyle}/>
                <Button className={"button-principal"} title={"entrar"} type={"button"}/>
                <div><Text text={"Não é cadastrado?"} style={{display: "inline"}}/><Button className={"button-secundario"} title={"registrar"} type={"button"} onClick={goToPage}/></div>
                
            </div>
    

}

export default Login;