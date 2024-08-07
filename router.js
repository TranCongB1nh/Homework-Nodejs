const { handleHello, handlePing } = require('./controller')

function router(req, res) {
    if(req.url === '/ping') {
        if(req.method === 'GET') {
            handlePing(req, res)
        } else {
            res.writeHead(405, {'Content-Type': 'test/plain'})
            res.end('Method not allowed')
        }
    } else if(req.url === '/') {
        if(req.method === 'GET') {
            handleHello(req, res)
        } else {
            res.writeHead(405, {'Content-Type': 'test/plain'})
            res.end('Method not allowed')
        }
    } else {
        res.writeHead(404, {'Content-Type': 'test/plain'})
        res.end('Not found')
    }
}

module.exports = {
    router
}