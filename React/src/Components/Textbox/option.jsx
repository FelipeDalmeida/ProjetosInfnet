const CriaOption=({options, onClick})=>{
    let optionsElement=[];

    for (let option of options){
        optionsElement.push(<option value={option}>{option}</option>)
    }
    return optionsElement;
}

export default CriaOption