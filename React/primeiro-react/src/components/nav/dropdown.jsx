import GeradorLi from '../../components/nav/geradorLi';
import {useState} from 'react';

const Dropdown=({title,listaLi, liStyle, ulStyle})=>{
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovering(false);
      };


    let liStyleDefault={
        // position: "relative",
    }
    let ulStyleDefault={
        display: isHovering ? "block" : "none",
        listStyle: "none",
        // border: "1px solid black",
        position: "absolute",
        minWidth: "100px",
        padding: "0",
        marginTop: "12px",
    }
    let liStyleCustom={...liStyleDefault,...liStyle}
    let ulStyleCustom={...ulStyleDefault,...ulStyle}

    return <li style={liStyleCustom} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{title}
                <ul style={ulStyleCustom}><GeradorLi listaLi={listaLi}/></ul>
            </li>
    
}

export default Dropdown