import { useState } from "react"


const ProductosContainer = (props) =>{

const [cantidad, setCantidad] = useState(0)
let stock = 10;


const handleClick = () =>{
    setCantidad(cantidad + 1)
}
    return(
        <>
        <div>
        
        <h2> {props.parrafo} </h2>

        <p> {cantidad} </p>

        <button onClick={handleClick}> Click </button>

        </div>

        </>
    )
} 
export default ProductosContainer;