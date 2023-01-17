
import PropTypes from 'prop-types'

const Input=({type,label,id,style,inputStyle,labelStyle,onChange,className, value})=>{
    let styleDefault={
        boxSizing: "border-box",
        padding: "5px",
        display: "inline-block",
    }
    let styleCustom={...styleDefault,...style};

    let inputStyleDefault={
        display:"block",
        width:"100%",
        boxSizing: "border-box",
        padding: "5px",
        border:"1px solid black",
        borderRadius:"5px"

    }
    let inputStyleCustom={...inputStyleDefault,...inputStyle};

    let labelStyleDefault={
        display:"block",
        padding: "5px",
        
        
    }
    let labelStyleCustom={...labelStyleDefault,...labelStyle};
    
    
    return <div style={styleCustom} className={className}>
        <label htmlFor="id" style={labelStyleCustom} >{label}</label>
        <input value={value} type={type} style={inputStyleCustom} onChange={onChange}/>
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