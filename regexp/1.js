// 匹配ID
const ele = `<div id="container" class="main"></div>`;
const matchEleId = (str) => {
    const reg = /id=".*?"/g;
    const reg1 = /id="[^"]*"/g;
    return str.match(reg)[0] 
}
// 匹配 {{}}
// const str1 = '{{test}}{{test2}}'
// const reg2 = /\{\{(.*?)\}\}/g;
// console.log(str1.match(reg2)[0])
// console.log('yao-coding reg =>',RegExp.$1)
// 数字的千位分割符表示法 

/**
 * 将数字转成千位分割符表示法  12345678 => 12,345,678
 * @param {*} num 
 */
const num2kb = (num) => {
    if(typeof num === Number){
        num = num.toString();
    }
    /**
     * (\d{3})$ 结尾的三位数字
     * (\d{3})+$  至少出现一次的 结尾的三位数字
     * (?=(\d{3})) 三位数字之前的位置
     * (?!^) 不是开头的位置
     */
    const reg = /(?!^)(?=(\d{3})+$)/g;
    return num.replace(reg,',') 
}
// const str = 123456789;
// console.log('yao-coding num2kb =>',num2kb(str))

/**
 * 6-12 位的密码 至少包括两种字符
 * @param {*} pwd 
 */
const pwdVerify = (pwd) => {
    /**
     * (?=.*[0-9]) 因为写在最前面 所以代表 开始的位置 .*[0-9] 任何多个字符中后面跟一个数字 
     * (?!^[0-9]) 不能全部都是数字
     */
    const reg = /(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9a-zA-Z]{6,12}$/g;
    return reg.test(pwd)
}


// const str = '/web_content/test/index.html';
// const handlePathName = (pathname) => {
//     return pathname.replace(/\/(?=[^/]*$).*$/g,"/")
// }
// console.log(handlePathName(str))




