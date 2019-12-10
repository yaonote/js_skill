

function getDateDiff(dateTimeStamp){
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var year = month * 12;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    var result;
    if(diffValue < 0){
        //若日期不符则弹出窗口告之
        //alert("结束日期不能小于开始日期！");
    }
    var yearC = diffValue/year;
    var monthC =diffValue/month;
    var weekC =diffValue/(7*day);
    var dayC =diffValue/day;
    var hourC =diffValue/hour;
    var minC =diffValue/minute;
    if(yearC>=1){
        result=yearC+ "年前";

    }
    else if(dayC>=2){
        result=parseInt(dayC) +"天前";
    }
    else if(dayC >= 1 && dayC <2) {
        result="昨天";
    }
    else if(hourC>=1){
        result=parseInt(hourC) +"小时前";
    }
    else if(minC>=1){
        result=parseInt(minC) +"分钟前";
    }else{
        result="刚刚";
    }
    return result;
}


console.log(` 非本年 => ${getDateDiff(1575198149000)}`)