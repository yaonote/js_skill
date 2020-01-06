

function phoneHide(num) {
    return String(num).replace(/(\d{3})\d{4}(\d{4})/g,'$1****$2')
}
const res = phoneHide(18999990000)

function params2query(params) {
    return Object.keys(params).reduce((acc, key) => {
        return [...acc,`${key}=${params[key]}`] 
    },[]).join('&')
}
const params = {
    a: 123,
    b: 233
}
// const res = params2query(params)

let url = 'http://www.baidu.com?q=1&b=4?sds';
function query2prams(url) {
    return url.replace(/^(.*?)\?/,'').split('&').reduce(function(acc,curr) {
        const [key,val] = curr.split('=');
        return {
            ...acc,
            [key]: val
        }
    },{})
}
// const res = query2prams(url)

function numFormat(num) {
    return String(num).replace(/(?!^)(?=(\d{3})+$)/gu,',')
}
// const num = 123456789;
// const res = numFormat(num);
console.log(res);



/**
 *  replace 的第二个参数是函数的话 
 * 
 *  函数的参数 第一个是匹配到的整体 
 *  有子语句的话 第二个以后的参数对应 子语句
 *  倒数第一个是原字符串
 *  倒数第二个是匹配到的位置
 */

const toUpper = (str) => str.replace(/\_(\w)/g,(_,needUpper) => needUpper.toUpperCase()) 

const toLine = (str) => str.replace(/([A-Z])/g,'_$1').toLowerCase();

