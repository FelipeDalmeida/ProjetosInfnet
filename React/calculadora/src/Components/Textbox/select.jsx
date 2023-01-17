import CriaOption from "./option"



const Select=({label,options,style,className,styleDiv,classNameSel,onClick,onChange,name,value,labelStyle})=>{

    let optionsElement=<CriaOption options={options} />
    let styleDefault={
        padding: "5px",
        width:"100%"
    }
    let styleCustom={...styleDefault, ...style}
    let styleDivDefault={
        boxSizing:"border-box",
        display:"inline-block",
    }
    let styleDivCustom={...styleDivDefault,...styleDiv}

    let labelStyleDefault={
        display:"block",
        padding: "5px",
        
        
    }
    let labelStyleCustom={...labelStyleDefault,...labelStyle};

    const Label=label?<label htmlFor={name} style={labelStyleCustom}>{label}</label>:""

    return <div style={styleDivCustom} className={className}>{Label}<select style={styleCustom} className={classNameSel} onChange={onChange} onClick={onClick} name={name} value={value}>{optionsElement}</select></div>
}


export default Select
