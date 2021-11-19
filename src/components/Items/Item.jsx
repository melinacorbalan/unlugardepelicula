import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <div className="card">
            <img src={item.image} alt={item.nombre} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} en {item.locacion}</h5>
                <p className="card-text">{item.descripcion}</p>
                <Link to='.' className="btn btn-primary">Reservar este tour</Link>
            </div>
        </div>
    )
}

export default Item
