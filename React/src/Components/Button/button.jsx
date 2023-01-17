import PropTypes from 'prop-types' 
const Button=({style, title, type,onClick,onMouseOver, className, onMouseLeave})=>{
    let styleDefault={
        borderRadius:"5px",
        border:"1px solid black",
        backgroundColor:"transparent",
        padding:"5px",
        margin: "5px",
        display: "flex",
    }
    let styleCustom={...styleDefault,...style}


    return <button style={styleCustom} type={type} onClick={onClick} onMouseOver={onMouseOver} className={className} onMouseLeave={onMouseLeave}>{title}</button>
}




Button.prototype={
    style:PropTypes.object,
    title:PropTypes.string,
    type:PropTypes.string,
    onClick:PropTypes.func,
    onMouseOver:PropTypes.func,
    onMouseLeave:PropTypes.func,
    className:PropTypes.string
}

Button.defaulftProps={
    style:null,
    title:"Button",
    type:"button",
    onClick:null,
    onMouseOver:null,
    onMouseLeave:null,
    className:""
}



export default Button