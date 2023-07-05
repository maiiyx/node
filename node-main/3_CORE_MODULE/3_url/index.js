const url = require('url')
const address = 'https://www.al.senai.br/catalog?cursos=programadorBackEnd'
const persedUrl = new url.URL(address)

console.log(persedUrl.host)
console.log(persedUrl.pathname)
console.log(persedUrl.search)
console.log(persedUrl.searchParams)
console.log(persedUrl.searchParams.get('cursos'))
