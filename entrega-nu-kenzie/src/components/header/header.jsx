import imgLogoHeader from "../../img/Nu Kenzie-header.svg"
import "./header.css"

export const Header = () => {
    return(
        <div className="div-header">
            <img src={imgLogoHeader} alt="logo Nu Kenzie" />
            <button>Inicio</button>
        </div>
    )
}