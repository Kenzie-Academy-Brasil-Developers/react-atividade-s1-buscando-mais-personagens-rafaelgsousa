import "./style.css"

function CharCard({nome,imagem,status}){

        return(
            <div className={status==="Alive"?"itemverde":"itemoutro"}>
                <p>{nome}</p>
                <img src={imagem} alt="foto"/>
            </div>
        )
}
export default CharCard