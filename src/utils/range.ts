export default function (stop: number, start?: number){
    const _start = unref(start) ?? 0
    let range = []
    for (let index = _start; index <= unref(stop); index++) {
        range.push(index)
    }
    return range
}