function parse(str) {
    return eval(`(${str})`)
}




function parse2(str) {
    return new Function(`return ${str}`)
}

console.log(parse(JSON.stringify({d: 8})))