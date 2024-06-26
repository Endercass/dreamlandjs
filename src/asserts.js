class DreamlandError extends Error {
    constructor(message) {
        super('[dreamland-js/dev] ' + message)
        this.name = 'DreamlandDevError'
    }
}

export function log(message) {
    console.log('[dreamland-js/dev] ' + message)
}

export function panic(message) {
    throw new DreamlandError('fatal: ' + message)
}

export function assert(condition, message) {
    if (!condition) {
        panic(message)
    }
}
