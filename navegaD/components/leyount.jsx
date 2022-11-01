import Link from "next/link";
import styles from "../styles/Layount.module.css";

export default function Layount(props){

return(

<div className={styles.Layount}>
    <div className={styles.Header}>
        <h1>{props.title ?? "Exemplo"}</h1>
    <Link href="/"><p>Voltar</p></Link>

    </div>
    <div className={styles.Container}>

    {props.children}
</div>
    
 
   
</div>

)

}