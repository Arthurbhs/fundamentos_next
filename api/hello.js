// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'API test',
    method: req.method,
    nome: req.query.name,
    idade: +req.query.idade
  })
}
