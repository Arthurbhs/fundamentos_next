import  Link  from "next/link";
import Navegator from "../components/navegator";
import styles from "../styles/Index.module.css"
export default function started(){
  return (  <div><center><h1>inicio</h1></center>
  <div className={styles.d}>
   <Navegator run="/style" name="estilo"/>
   <Navegator run="/example" name="Exemplo"/>
   <Navegator run="/jsx" name="jsx" />
   <Navegator run="/navegation" name="navegação" />
   <Navegator run="/client/filial_sp/123" name="navegação D" />
    </div>
    </div>  
  )
}
