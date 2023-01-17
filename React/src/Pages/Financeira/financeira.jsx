import Text from "../../Components/Text/text"
import Input from "../../Components/Textbox/input"
import Select from "../../Components/Textbox/select"
import Table from "../../Components/Table/table"
import Button from "../../Components/Button/button"
import './financeira.css'
import '../../assets/css/grid.css'
import { useState } from "react"
import calculaInvestimento from "./calculadora"


const Financeira=()=>{


    const [investInicial,setInvestInicial]=useState("");
    const [investMensal,setInvestMensal]=useState("")
    const [investTempo,setInvestTempo]=useState("")
    const [investJuros,setInvestJuros]=useState("")
    const [periodo,setPeriodo]=useState("Meses")
    const [juros,setJuros]=useState("Mensal")
    // const [tipoInvest,setTipoInvest]=useState("CDB")
    const [totalBruto,setTotalBruto]=useState("")
    const [dinheiroInvestido,setDinheiroInvestido]=useState("")
    const [totalJuros,setTotalJuros]=useState("")
    // const [imposto,setImposto]=useState("TODO")
    // const [totalIR,setTotalIR]=useState("TODO")
    // const [totalLiquido,setTotalLiquido]=useState("TODO")
    

    

    const style={
        border:"1px solid black",
        marginTop:"60px",
        boxSizing: "border-box",
        borderTopLeftRadius:"5px",
        borderTopRightRadius:"5px"
    }
    const styleDivSelect={
        padding:"5px"
    }
    const styleSelect={
        borderRadius:"5px"
    }
    const tdStyle={
        width:"50%"
    }
    const tableStyle={
        borderBottomLeftRadius:"5px",
        borderBottomRightRadius:"5px",
        borderTopWidth:"0"
    }

    const buttonStyle={
        justifyContent: "center",
        fontSize:"1.5em",
    }

    const optionsTempo=["Meses","Anos"];
    const optionsJuros=["Mensal","Anual"]
    // const optionsInvest=["CDB","LCI/LCA"]
    
    const corpoTabela=[
        ["Descrição","Valor"],
        ["Total bruto",totalBruto],
        ["Dinheiro investido",dinheiroInvestido],
        ["Valor ganho em juros", totalJuros],
        // ["Imposto de renda sobre a rentabilidade",imposto],
        // ["Valor pago em imposto de renda",totalIR],
        // ["Total líquido a receber",totalLiquido]
    ]


    return <div className="offset-xl-1 offset-md-2 col-xl-10 col-md-8 col-12 financeira" style={{marginTop:"60px"}}>
        <Text type={"h1"} text={"Calculadora Financeira"} style={{display: "block", margin: "60px 0", textAlign: "center"}} className={"offset-md-2 offset-sm-1"}/>
        <div className="offset-md-2 col-md-10 offset-sm-1 col-sm-10 col-12" style={style}>
            <Input label="Investimento Inicial" className={"col-6"} value={investInicial} onChange={(e)=>setInvestInicial(e.target.value)}/>
            <Input label="Investimento Mensal" className={"col-6"} value={investMensal} onChange={(e)=>setInvestMensal(e.target.value)}/>
            <Input label="Período em:" className={"col-4"} value={investTempo} onChange={(e)=>setInvestTempo(e.target.value)}/>
            <Select options={optionsTempo} className={"col-2"} classNameSel={'select-bg-color'} styleDiv={styleDivSelect} style={styleSelect} name={"TimeOptions"} onChange={(e)=>setPeriodo(e.target.value)}/>
            <Input label="Taxa de Juros" className={"col-4"} value={investJuros} onChange={(e)=>setInvestJuros(e.target.value)}/>
            <Select options={optionsJuros} className={"col-2"} classNameSel={'select-bg-color'} styleDiv={styleDivSelect} style={styleSelect} onChange={(e)=>setJuros(e.target.value)}/>
            {/* <Select options={optionsInvest} className={"col-2"} classNameSel={'select-bg-color'} styleDiv={styleDivSelect} style={styleSelect} onChange={(e)=>setTipoInvest(e.target.value)}/> */}
            <Button  style={buttonStyle} type="button" title={"Calcular"} className={"select-bg-color"} onClick={()=>calculaInvestimento(investInicial,investMensal,investJuros,investTempo,periodo,juros,setTotalBruto,setDinheiroInvestido,setTotalJuros)}/>

        </div>
        <Table corpoTabela={corpoTabela} style={tableStyle} tdStyle={tdStyle} className={"offset-md-2 col-md-10 offset-sm-1 col-sm-10 col-12"}/>
    
    
    
    
    </div>
}

export default Financeira