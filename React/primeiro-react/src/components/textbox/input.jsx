import '../../assets/css/style.css'
import PropTypes from 'prop-types' 
import Text from '../text/text';
import { FaEye, FaEyeSlash, FaSmileWink, FaRegMeh, FaMehRollingEyes } from "react-icons/fa";
import { useState} from 'react';


const Input=({type,label,id,style,textStyle,labelStyle,onChange,className, value,error,errorType})=>{

    const [showPassword,setShowPassword]=useState(false);
    const switchPasswordVisibility =()=>{
        setShowPassword(!showPassword)
    }

    const errorColor=()=>{
        if(errorType==="warning"){
            return "#ff9800"
        }
        if(errorType==="good"){
            return "green"
        }
        if(errorType==="danger"){
            return "red"
        }
        return "black"
    }

    let styleDefault={
        width:"100%",
        padding:"5px",
        // position:"relative"
    }
    let textStyleDefault={
        display:"block",
        width:"100%",
        padding:"5px",
        // positon:"relative",
    }
    let labelStyleDefault={
        display:"block",
        padding:"5px",
        float:"left"
    }
    let buttonStyle={
        color:"black",
        border: "none",
        background: "transparent",
        position: "absolute",
        top: "50%",
        right: "5%",

    }


    


    let styleCustom={...styleDefault,...style};
    let textStyleCustom={...textStyleDefault,...textStyle};
    let labelStyleCustom={...labelStyleDefault,...labelStyle};
    return <div className={className} style={styleCustom}>
                <label htmlFor={id} style={labelStyleCustom}>{label}</label>
                <div className="pos-relative">
                    <input value={value} className="boxSizingBB" type={type==="password" ? (showPassword ? "text" : "password") : type} style={textStyleCustom} id={id} onChange={onChange}/>
                    {type==="password"? <button onClick={switchPasswordVisibility} type="button" style={buttonStyle}> {showPassword ? <FaEyeSlash/>:<FaEye/>} </button>:""}
                </div>
                <div style={{display: "flex", alignItems: "end"}}>
                    <span style={{fontSize:"14px", padding:"0", margin:"0 5px 0 0", color:`${errorColor()}`}}>{(errorType==="warning")?<FaRegMeh/>:(errorType==="good")?<FaSmileWink />:(errorType==="danger")?<FaMehRollingEyes/>:""}</span>
                    <Text text={error} style={{fontSize:"12px", padding:"0", margin:"0", color:`${errorColor()}`}}/>
                </div>
            </div>
}

Input.protoType={
    type: PropTypes.string,
    label:PropTypes.string,
    id: PropTypes.string,
    onchange: PropTypes.func,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    className:PropTypes.string,
    value:PropTypes.string,
}

Input.defaultProps={
    type:"text",
    label:"",
    id:null,
    onchange:null,
    value:null,
    className:"",
    value:null
}

export default Input