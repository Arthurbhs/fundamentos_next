import Layount from "../../../components/leyount";
import {useRouter} from "next/router";
export default function ClientCode(){
    const router = useRouter()
return(

    <Layount title="Navegação dinamica">
<span>codigo = {router.query.code}</span>

    </Layount>
)


}