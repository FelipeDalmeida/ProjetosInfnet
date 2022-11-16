let styleDefault={}

const Logo=({img,style,alt})=>{
    let styleCustom={...styleDefault,...style}
    return <img src={img} alt={alt} style={styleCustom}/>
}

Logo.defaultProps={
    img:null,
    alt:""
}

export default Logo