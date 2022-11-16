import PropTypes from 'prop-types' 

const Checkbox=({id,name,checked,label,style,labelStyle,checkStyle,className})=>{
    let styleDefault={
        padding:"5px"
    }
    let labelStyleDefault={
        padding:"5px",
    }
    let checkStyleDefault={
        
    }

    let styleCustom={...styleDefault,...style};
    let labelStyleCustom={...labelStyleDefault,...labelStyle};
    let checkStyleCustom={...checkStyleDefault,...checkStyle};



    return <span style={styleCustom} className={className}>
        <input type="checkbox" id={id} name={name} checked={checked} style={checkStyleCustom}/>
        <label for={id} style={labelStyleCustom}>{label}</label>
    </span>
}
Checkbox.protoType={
    label:PropTypes.string,
    name:PropTypes.string,
    checked:PropTypes.bool,
    id: PropTypes.string,
    style: PropTypes.object,
    labelStyle: PropTypes.object,
    checkStyleCustom:PropTypes.object,
    className:PropTypes.string
}

Checkbox.defaultProps={
    label:"",
    name:"",
    checked:false,
    id: "",
    style: null,
    labelStyle: null,
    checkStyleCustom:null,
    className:""
}

export default Checkbox