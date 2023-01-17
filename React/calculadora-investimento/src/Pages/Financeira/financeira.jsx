import Text from "../../Components/Text/text"
import Input from "../../Components/Textbox/input"
import Select from "../../Components/Textbox/select"
import Table from "../../Components/Table/table"
import Button from "../../Components/Button/button"
import './financeira.css'
import '../../assets/css/grid.css'
import { useState } from "react"
import {calcularValorInvestimento,calcularIR} from "./calculadora"
import Plot from "react-plotly.js"



const Financeira=()=>{


    const [investInicial,setInvestInicial]=useState("");
    const [investMensal,setInvestMensal]=useState("")
    const [investTempo,setInvestTempo]=useState("")
    const [investJuros,setInvestJuros]=useState("")
    const [periodo,setPeriodo]=useState("Meses")
    const [juros,setJuros]=useState("Mensal")
    const [tipoInvest,setTipoInvest]=useState("CDB")
    const [totalBruto,setTotalBruto]=useState("")
    const [dinheiroInvestido,setDinheiroInvestido]=useState("")
    const [totalJuros,setTotalJuros]=useState("")
    const [imposto,setImposto]=useState("")
    const [totalIR,setTotalIR]=useState("")
    const [totalLiquido,setTotalLiquido]=useState("")
    const [montantePorMes,setmontantePorMes]=useState([])
    const [mesesPlot,setMesesPLot]=useState([])


    //////////////////////////////   FUNÇÃO PARA CÁLCULO DO IR
    const calculaInvestimento=()=>{
        const m=[]//montante
        const meses=[]

        let parcelasMensais=parseFloat(investMensal.replace(",","."));
        let c=parseFloat(investInicial.replace(",",".")); //capital inicial
        let i=parseFloat(investJuros.replace(",","."))/100; //taxa
        let t=parseInt(investTempo.replace(",",".")); //tempo
        
    
        if(periodo==="Anos"){ //converter tempo para meses
            t=t*12;
        }
        if(juros==="Anual"){
            i=Math.pow((1+i),1/12)-1;
        }
   
        
        
        calcularValorInvestimento(m,meses,c,parcelasMensais,t,i,tipoInvest) //retorna um array com o montante a cada mês TODO: Gráfico com progressão por mês

        setmontantePorMes(m)//Para o plot
        setMesesPLot(meses)


        let imposto=calcularIR(tipoInvest,t)
        let totalBruto=m[m.length-1]
        let totalInvestido=(c+t*parcelasMensais);
        let totalJuros=(m[m.length-1]-totalInvestido);
        let totalIR=totalJuros*imposto;
    
        setTotalBruto(`R$ ${totalBruto.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,')}`)
        setDinheiroInvestido(`R$ ${totalInvestido.toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,')}`)
        setTotalJuros(`R$ ${totalJuros.toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,')}`)
        setTotalLiquido(`R$ ${(totalBruto-totalIR).toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,')}`)
     
        if(tipoInvest==="LCI/LCA"){
            setImposto("Isento")
            setTotalIR("Isento")
        } else {
            setImposto(`${imposto*100}%`)
            setTotalIR(`R$ ${totalIR.toFixed(2).replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,')}`)
        }
    }
    
    

//////////////////////////////

    const style={
        border:"1px solid black",
        marginTop:"60px",
        boxSizing: "border-box",
        borderTopLeftRadius:"5px",
        borderTopRightRadius:"5px",
        position:"relative",
    }
    const styleDivSelect={
        padding:"5px"
    }
    const styleSelect={
        borderRadius:"5px",
        // fontSize:"1.1em",
        fontWeight:"300"
    }
    const tdStyle={
        width:"70%",
        // fontSize:"1.1em",
        textAlign:"justify"
        
    }
    const thStyle=tdStyle;

    const tableStyle={
        borderBottomLeftRadius:"5px",
        borderBottomRightRadius:"5px",
        borderTopWidth:"0"
    }

    const labelStyle={
        // fontSize:"1.1em",
        fontWeight:"700"
    }
    const inputStyle={
        // fontSize:"1.1em",
    }
    const buttonStyle={
        justifyContent: "center",
        fontSize:"1.5em",
        position:"absolute",
        right:"0",
        bottom:"0",
        width: "30%"
    }

    const optionsTempo=["Meses","Anos"];
    const optionsJuros=["Mensal","Anual"]
    const optionsInvest=["CDB","LCI/LCA"]
    
    const corpoTabela=[
        ["Descrição","Valor"],
        ["Total bruto",totalBruto],
        ["Dinheiro investido",dinheiroInvestido],
        ["Valor ganho em juros", totalJuros],
        ["Imposto de renda",imposto],
        ["Valor pago em imposto de renda",totalIR],
        ["Total líquido a receber",totalLiquido]
    ]


    return <div className=" offset-xl-2 offset-md-2 col-xl-8 col-md-8 col-12 zindex financeira" style={{marginTop:"60px"}}>
        <Text type={"h1"} text={"Calculadora Financeira"} style={{display: "block", margin: "60px 0", textAlign: "center", fontWeight:"700"}} className={"offset-md-2 offset-sm-1"}/>
        <div className="offset-xl-3 col-xl-6 offset-md-2 col-md-8 offset-sm-1 col-sm-10 col-12" style={style}>
            <Input inputStyle={inputStyle} labelStyle={labelStyle} label="Investimento Inicial" className={"col-6"} value={investInicial} onChange={(e)=>setInvestInicial(e.target.value)}/>
            <Input inputStyle={inputStyle} labelStyle={labelStyle} label="Investimento Mensal" className={"col-6"} value={investMensal} onChange={(e)=>setInvestMensal(e.target.value)}/>
            <Input inputStyle={inputStyle} labelStyle={labelStyle} label="Período em:" className={"col-4"} value={investTempo} onChange={(e)=>setInvestTempo(e.target.value)}/>
            <Select options={optionsTempo} className={"col-2"} classNameSel={'select-bg-color'} styleDiv={styleDivSelect} style={styleSelect} name={"TimeOptions"} onChange={(e)=>setPeriodo(e.target.value)}/>
            <Input inputStyle={inputStyle} labelStyle={labelStyle} label="Taxa de Juros" className={"col-4"} value={investJuros} onChange={(e)=>setInvestJuros(e.target.value)}/>
            <Select options={optionsJuros} className={"col-2"} classNameSel={'select-bg-color'} styleDiv={styleDivSelect} style={styleSelect} onChange={(e)=>setJuros(e.target.value)}/>
            <Select labelStyle={labelStyle} label={"Tipo de investimento:"} name={"tipo-de-investimento"} options={optionsInvest} className={"col-4"} classNameSel={'select-bg-color'} styleDiv={styleDivSelect} style={styleSelect} onChange={(e)=>setTipoInvest(e.target.value)}/>
            <Button  style={buttonStyle} type="button" title={"Calcular"} className={"select-bg-color"} onClick={()=>calculaInvestimento()}/>
            
        </div>
        <Table corpoTabela={corpoTabela} style={tableStyle} thStyle={thStyle} tdStyle={tdStyle} className={"offset-xl-3 col-xl-6 offset-md-2 col-md-8 offset-sm-1 col-sm-10 col-12 table-custom"}/>

        <div style={{textAlign: "center",boxSizing: "border-box"}} className={"col-12"}>
            <Plot
            data={[
            {
                x: mesesPlot,
                y: montantePorMes,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
            },
            ]}
            
            layout={{
            width: "auto",
            title: 'Evolução Patrimonial',
            xaxis: {
                title: 'Tempo [Meses]',
                titlefont: {
                  family: 'Arial, sans-serif',
                  size: 18,
                  color: 'rgb(10, 113, 197)'
                }, },
            yaxis: {
                title: 'Montante [R$]',
                titlefont: {
                    family: 'Arial, sans-serif',
                    size: 18,
                    color: 'rgb(10, 113, 197)'
                    },},
            }}
        />
        </div>
    
    </div>
}

export default Financeira