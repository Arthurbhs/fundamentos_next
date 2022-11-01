import Link from "next/link";
import styles from '../styles/Navegation.module.css'
export default function Navegator(props){
    return(
        <Link href={props.run}>
       <div className={styles.Navegator}>
       <p>{props.name}</p></div>  
        
        </Link>
    )
}