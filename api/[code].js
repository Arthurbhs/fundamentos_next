export default function handler(req, res){
    const code = req.query.codigo
    res.status(200).json({
        id: code,
        name: `Maria ${code}`,
        email: `mariajuaquinia${code}@gmail.com`
    })
}