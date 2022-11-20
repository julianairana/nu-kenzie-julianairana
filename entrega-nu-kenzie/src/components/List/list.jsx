import "../HomePage/homePage.css"

export const ListRender = ({index, element, deletCards}) => {

    if(element.typeValue === "Entrada") {
    return(
        
            <li className="liList card-entrada" key={index}>
            <div className="div-card">
                    <h3>{element.description}</h3>
                    <p>{element.valueForm}</p>
                    <button className="button-trash" onClick={deletCards}></button>
            </div>
                    <span>{element.typeValue}</span>
            </li> 
    )
}

    return (
        
            <li className="liList card-despesas" key={index}>
            <div className="div-card">
                    <h3>{element.description}</h3>
                    <p>{element.valueForm}</p>
                    <button className="button-trash" onClick={deletCards}></button>
            </div>
                    <span>{element.typeValue}</span>
            </li>
                
    )

}