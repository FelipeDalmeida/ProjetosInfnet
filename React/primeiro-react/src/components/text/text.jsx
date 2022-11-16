import PropTypes from 'prop-types' 



const Text =({text,type,style})=>{
   let styleDefault={
      margin:'10px'
   }

    let styleCustom={...styleDefault,...style}
     if(type==='h1'){
         return <h1 style={styleCustom}>{text}</h1>
     } else if(type==='h1'){
         return <h2 style={styleCustom}>{text}</h2>
     } else if(type==='h3'){
         return <h3 style={styleCustom}>{text}</h3>
     } else if(type==='h4'){
        return <h4 style={styleCustom}>{text}</h4>
     } else if(type==='h5'){
        return <h5 style={styleCustom}>{text}</h5>
     } else if(type==='h6'){
        return <h6 style={styleCustom}>{text}</h6>
     } else {
        return <p style={styleCustom}>{text}</p>
     }
}


Text.propTypes={
   style: PropTypes.object,
   text: PropTypes.string,
   type: PropTypes.string,
}

Text.defaultProps={
   text:"",
   type:"p",
}

export default Text