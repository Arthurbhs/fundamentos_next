export default function Handler(req, res){
if(req.method === "GET"){
handleGet(req, res)
    
}else{
    res.status(405).send()
}}
function handleGet(req,res){
res.satus(200).json({
    id: 3,
    nome: 'Maria',
    idade: 33
})
}
