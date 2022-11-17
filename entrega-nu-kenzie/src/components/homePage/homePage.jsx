import noCard from "../../img/NoCard.svg"
import "./homePage.css"

export const Home = () => {
    return(
        <div className="div-main">
            <div className="div-form">
                <form action="">
                    <label htmlFor="">Descrição</label>
                    <input type="text" placeholder="Digite aqui sua descrição" />
                    <span className="span-ex">Ex: Compra de roupas</span>
                    <div className="div-value">
                        <div className="div-span">
                            <span className="span-value">Valor</span>
                            <input type="text" placeholder="R$" />
                        </div>
                        <div className="div-span-value">
                            <span className="span-value">Tipo de valor</span>
                            <select name="" id="">
                                <option value="">Entrada</option>
                                <option value="">Despesas</option>
                            </select>
                        </div>
                    </div>
                    <button>Inserir valor</button>
                </form>
            </div>
            <div className="div-launch">
                <div className="div-button">
                    <h3>Resumo financeiro</h3>
                    <button>Todos</button>
                    <button>Entrada</button>
                    <button>Despesas</button>
                </div>
                <div>
                    <h2>Você ainda não possui nenhum lançamento</h2>
                    <img className="img-noCard" src={noCard} alt="" />
                    <img className="img-noCard" src={noCard} alt="" />
                    <img className="img-noCard" src={noCard} alt="" />
                </div>
            </div>
        </div>
    )
} 