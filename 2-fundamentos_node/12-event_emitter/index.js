const EventRmitter = require('events')
const eventEmitter = new EventRmitter()


eventEmitter.on('start', () => {

    console.log('Durante')
})

console.log('antes')

eventEmitter.emit('start')

console.log('depois')