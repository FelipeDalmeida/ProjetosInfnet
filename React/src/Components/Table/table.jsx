import CriaCorpoTabela from "./criacorpotabela";
import './table.css'


const Table=({corpoTabela,className,style,theadStyle,thStyle,tbodyStyle,trStyle, tdStyle})=>{
    const styleDefault={
        border:"1px solid black",
        borderSpacing: "0"

    }  
    

    const theadStyleDefault={
        borderColor: "inherit",
        borderStyle: "solid",
        borderWidth: "0px"
    }
    const thStyleDefault={
        borderColor: "inherit",
        borderStyle: "solid",
        borderWidth: "0px",
        padding:"10px",
        borderBottomWidth: "1px",
    }
    const tbodyStyleDefault={
        borderColor: "inherit",
        borderStyle: "solid",
        borderWidth: "0px"
    }
    const trStyleDefault={
        borderColor: "inherit",
        borderStyle: "solid",
        borderWidth: "0px"
    }
    const tdStyleDefault={
        padding:"10px",
        borderColor: "inherit",
        borderStyle: "solid",
        borderWidth: "0px",
        borderBottomWidth: "1px",
    }

    const styleCustom={...styleDefault,...style}
    const theadStyleCustom={...theadStyleDefault,...theadStyle}
    const thdStyleCustom={...thStyleDefault,...thStyle}
    const tbodyStyleCustom={...tbodyStyleDefault,...tbodyStyle}
    const trStyleCustom={...trStyleDefault,...trStyle}
    const tdStyleCustom={...tdStyleDefault,...tdStyle}
    

    let tabela=<CriaCorpoTabela corpoTabela={corpoTabela} theadStyle={theadStyleCustom} thStyle={thdStyleCustom} tbodyStyle={tbodyStyleCustom} trStyle={trStyleCustom} tdStyle={tdStyleCustom} />


    return <table className={className} style={styleCustom}>{tabela}</table>
}

export default Table