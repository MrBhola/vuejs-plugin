import emitter from './emitter'
export default class report {
    static open() {
        emitter.emit('open')
    }
    static close() {
        emitter.emit('open')
    }
}