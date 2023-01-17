import CriaOption from "./option"



const Select=({options,style,className,styleDiv,classNameSel,onClick,onChange,name,value})=>{

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

    return <div style={styleDivCustom} className={className}><select style={styleCustom} className={classNameSel} onChange={onChange} onClick={onClick} name={name} value={value}>{optionsElement}</select></div>
}


export default Select
