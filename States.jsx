import { useState } from "react"
import Layount from "../components/leyount"

export default function States(){
 const [number, setNumber]= useState(0)

 function inc(){
    setNumber(number + 1)
 }
return (

    <Layount title="componente com estado">
        <div>{number}</div>
        <button onClick={inc}>incrementar</button>
    </Layount>
)

}