import {Link } from 'react-router-dom';
import GeradorLi from '../../components/nav/geradorLi';

const Navbar=({listaLi, liStyle, navStyle,ulStyle,className})=>{
    let navStyleDefault={
        
    }
    let ulStyleDefault={
        listStyle:"none",
        display:"flex",
        justifyContent:"space-between",
        alignItems: "center",
        margin:"0"

    }
    let liStyleDefault={
        position: "relative",
    }

    let navStyleCustom={...navStyleDefault,...navStyle};
    let ulStyleCustom={...ulStyleDefault,...ulStyle}
    let liStyleCustom={...liStyleDefault,...liStyle}

    return <nav className={className} style={navStyleCustom}>
    <ul style={ulStyleCustom}>
    <GeradorLi style={liStyleCustom} listaLi={listaLi}/>
    
    </ul>
    </nav>
}

export default Navbar