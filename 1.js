
function word2number(w){  
    var e = "零一二三四五六七八九";  
    var ew = ["十","百","千"];  
    var ej = ["万","亿"];  
    var bar = e+ew.join("");
    var foo = `^([${bar}]+${ej[1]})?([${bar}]+${ej[0]})?([${bar}]+)?$`;
    console.log('foo =>',foo)
    var rss = "^(["+e+ew.join("")+"]+"+ej[1]+")?(["+e+ew.join("")+"]+"+ej[0]+")?(["+e+ew.join("")+"]+)?$";  
    console.log('rss =>',new RegExp(rss))
    var arr = new RegExp(rss).exec(w);  
    console.log('arr =>',arr)
    function foh(str){  
        str = new String(str);      
        var a=0;  
        if(str.indexOf(ew[0])==0)a=10;                
            str=str.replace(new RegExp(e.charAt(0),"g"),"");  
        if(new RegExp("(["+e+"])$").test(str))  
            a+=e.indexOf(RegExp.$1);  
        if(new RegExp("(["+e+"])"+ew[0]).test(str))  
            a+=e.indexOf(RegExp.$1)*10;  
        if(new RegExp("(["+e+"])"+ew[1]).test(str))  
            a+=e.indexOf(RegExp.$1)*100;  
        if(new RegExp("(["+e+"])"+ew[2]).test(str))  
            a+=e.indexOf(RegExp.$1)*1000;  
        return a;  
    }  
    return foh(arr[1])*100000000+foh(arr[2])*10000+foh(arr[3]);  
}  
  
//Test  
//==============  
  
var str1 = "二十五";  
var str2 = "五百零二";  
var str3 = "四千五百";  
var str4 = "七十亿零八百五十万四千五百零二";  
  
console.log(str1, " : ", word2number(str1));  
// console.log(str2, " : ", word2number(str2));  
// console.log(str3, " : ", word2number(str3));  
// console.log(str4, " : ", word2number(str4));  
  
  
  