import Layount from "../components/leyount"

export default function Jsx() {
    const tile = <h1>JXS</h1>
    const a = 1
    const b = 3
    const c = 2
    function subtitle(){
        return(
        <h3>{"muito bom".toUpperCase()}</h3>
    )}

return(
<Layount title="entendendo 0 JSX">
<div>
    <h2> {tile}</h2>
{(a + b)} <br/>
{subtitle()}

</div>
</Layount>
)}
