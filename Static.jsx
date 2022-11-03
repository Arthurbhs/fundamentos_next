import Layount from "../components/leyount"

export default function gatStaticProps(){

    return{
        props: {
            number: Math.random()

        }



    }
}

export default function Static(){
return(
<Layount title="Conteudo estatico">
    <div>{props.number}</div>
</Layount>

)
}