import Text from "../../components/text/text";
import Imput from '../../components/textbox/input'
import Button from '../../components/button/button'
import Checkbox from '../../components/textbox/checkbox'
import {useNavigate } from "react-router";
import './auth.css'
import {useState} from 'react';

const Register=()=>{
    const navigate=useNavigate();
    const goToPage=()=>{navigate('/login')}

    const [nome,setNome]=useState('')
    const [username,setUsername]=useState({value:"",error:null,errorType:null})
    const [email,setEmail]=useState('')
    const [emailConfirma,setEmailConfirma]=useState('')
    const [senha,setSenha]=useState('')
    const [senhaConfirma,setSenhaConfirma]=useState('')
    const [telefone,setTelefone]=useState('')
    const [senhaComparaError, setSenhaError]=useState({error:null,errorType:null})

    const registerSend=()=>{
        if(senha!==senhaConfirma){
            setSenhaError({...senhaComparaError,error:"Senhas não coincidem",errorType:"danger"})
        } else if(senha===senhaConfirma){
            setSenhaError({...senhaComparaError,error:"",errorType:"good"})
        }
    }
    const verificaUsername=(e)=>{

        if(username.value.length<8 || username.value.length>12){
            setUsername({...username, value:e.target.value, error:"O username deve conter de 8 a 12 caracteres", errorType:"warning"})
            return true
        }
        if(username.value.length>7 && username.value.length<13){
            setUsername({...username, value:e.target.value, error:"Username permitido",errorType:"good"})
            return true
        }
        return false
    }   

    let registroStyle={
        maxWidth: "500px",
        boxSizing:"borderBox",
        marginLeft:"auto",
        marginRight:"auto",
        padding:"5px",
        marginTop:"2em",
        marginBottom:"2em",
        border:"1px solid rgb(227, 82, 20)",
        borderRadius:"5px",
        boxShadow:"5px 5px 10px rgb(227, 82, 20)"
    }
    let styleTitulo={
        'color':'rgb(227, 82, 20)',
        textTransform:"uppercase"
    
    }

    
    return <div style={registroStyle}>
        <Text text={"Registre-se"} type={'h1'} style={styleTitulo}/>
        <Imput value={nome} onChange={(e)=>setNome(e.target.value)} id={'nome'} type={'text'} label={'Digite seu nome:'}/>
        <Imput value={username.value} onChange={(e)=>verificaUsername(e)} id={'username'} type={'text'} label={'Digite seu username:'} error={username.error} errorType={username.errorType}/>
        <Imput value={email} onChange={(e)=>setEmail(e.target.value)} id={'email'} type={'email'} label={'Digite seu e-mail:'}/>
        <Imput value={emailConfirma} onChange={(e)=>setEmailConfirma(e.target.value)} id={'emailConfirma'} type={'email'} label={'Confirme seu e-mail:'}/>
        <Imput value={senha} id={'senha'} onChange={(e)=>setSenha(e.target.value)} type={'password'} label={'Digite sua senha:'}/>
        <Imput value={senhaConfirma} onChange={(e)=>setSenhaConfirma(e.target.value)} id={'senhaConfirma'} type={'password'} label={'Confirme sua senha:'}  error={senhaComparaError.error} errorType={senhaComparaError.errorType}/>
        <Imput value={telefone} onChange={(e)=>setTelefone(e.target.value)} id={'telefone'} type={'tel'} label={'Deigite seu telefone'}/>
        <div>
        <Checkbox id={'termoCheckbox'} label={'Aceito os termos'} checked={false} style={{display: "block"}}/>
        <Checkbox id={'termoEmail'} label={'Quero receber email com novidades '} checked={true}/>
        </div>
        <Button className={"button-principal"} title={"registrar"} type={"button"} onClick={registerSend}/>
        <div><Text text={"Não é cadastrado?"} style={{display: "inline"}}/><Button className={"button-secundario"} title={"registrar"} type={"button"} onClick={goToPage}/></div>
    </div>
    
}

export default Register