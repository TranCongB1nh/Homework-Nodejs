function handlePing(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'test/plain')
    res.write('pong')
    res.end()
}

function handleHello(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'test/plain')
    res.write('Hello World')
    res.end()
}

module.exports = {
    handlePing,
    handleHello
}