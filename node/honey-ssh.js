//@ts-check
//@TODO collect incoming credentials with ssh2 (https://www.npmjs.com/package/ssh2)
import net from 'net'
const sshPort = 22

const server = net.createServer((c) => {
  console.log(new Date(), c.remoteAddress)
  c.on('data', d => {
    var string = new TextDecoder().decode(d);
    console.log(new Date(), string)
  })
  c.on('error', err => {
    console.error(new Date(), err)
  })
})
server.on('error', (err) => {
  console.error(err)
})
server.listen(sshPort, () => {
  console.log('honey start...')
})