import PropTypes from 'prop-types' 



const Button = ({style, title, type,onClick,onMouseOver, className, onMouseLeave}) =>{
    

    let styleDefault={
        padding : "5px 10px",
        borderRadius:"5px",
        border:"none",
        cursor:"pointer",
        margin:"5px 0"
    }

    let styleCustom={...styleDefault,...style}
    return <button style={styleCustom} 
        type={type} onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className={className}>{title}</button>
}

Button.propTypes={
    title: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseLeave: PropTypes.func,
    className:PropTypes.string


}

Button.defaultProps={
    title:"",
    type:"button",
    onClick:null,
    onMouseOver:null,
    onMouseLeave:null,
    className:""
}

export default Button