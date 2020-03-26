/**
* 请用您认为最优化的方式，将arr中的type为4的数据过滤出来，
* 然后按相同的 name + date（按天）合并value（value累加），
* 然后按 value 降序(从大到小)排序，
* 最后每行按照 "${name},${本地日期},售出${sum(value)}部" 的格式，如："小米2,2017年06月08日,售出5部", 打印(console.log)出来。
* 可以使用第三方js库，可以使用es6。
* 请在半小时内完成。
*/
var arr = [
   {name:'小米1', value: 1,  type: 2, date: '2018-06-07T08:00:01.589Z' },
   {name:'锤子T1', value: 1, type: 2, date: '2018-06-07T08:10:01.589Z' },
   {name:'小米2', value: 1, type: 4, date: '2018-06-07T20:00:01.589Z' },
   {name:'小米2', value: 4, type: 4, date: '2018-06-07T20:10:21.189Z' },
   {name:'小米4', value: 1, type: 4, date: '2018-06-07T08:00:01.560Z' },
   {name:'小米4', value: 2, type: 4, date: '2018-06-07T08:10:31.584Z' },
   {name:'小米6', value: 1, type: 3, date: '2018-06-07T08:00:01.589Z' },
   {name:'小米5s',value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
   {name:'锤子T2', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
   {name:'锤子T1', value: 4, type: 4, date: '2018-06-07T08:06:01.589Z' },
   {name:'魅蓝note5', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
   {name:'魅蓝note2', value: 5, type: 4, date: '2018-06-02T08:07:01.589Z' },
   {name:'魅蓝note2', value: 6, type: 4, date: '2018-06-07T08:00:01.589Z' },
   {name:'魅蓝note3', value: 1, type: 4, date: '2018-06-05T08:00:01.589Z' },
   {name:'魅蓝note', value: 1, type: 4, date: '2018-06-07T08:00:01.589Z' },
   {name:'oppor9', value: 7, type: 4, date: '2018-06-04T08:04:01.588Z' },
   {name:'华为p9', value: 1, type: 4, date: '2018-06-02T08:00:01.577Z' },
   {name:'华为p9', value: 2, type: 4, date: '2018-06-07T08:00:01.110Z' },
   {name:'华为p10', value: 1, type: 1, date: '2018-06-07T08:00:01.534Z' }
];

function formatDate(value) {
    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDay();
    month = month > 9 ? month : `0${month}`;
    day = day > 9 ? day : `0${day}`;
    return `${year}年${month}月${day}日`;
}
/**
 * type 4
 * 格式化日期 
 * 累加 value 
 * value 排序
 * 输出 小米2,2017年06月08日,售出5部
 */
const result = arr.reduce((acc,curr) => {
    if(curr.type !== 4) return acc;
    curr = {...curr,date: formatDate(curr.date)};
    let findIndex = acc.findIndex(item => item.name === curr.name && item.date === curr.date)
    return findIndex === -1
        ? [...acc,curr]
        : acc.map((item,index) => {
            return index === findIndex
                ? {...item,value: item.value+curr.value}
                : item
        })
},[]).sort((a,b) => b.value-a.value);

// result.forEach(item => {
//     console.log(`${item.name},${item.date},售出${item.value}`)
// })

/**
 * 总结 
 *  排序还是没有弄明白 
 *  还有就是时间格式化
 */

//  const bar = {
//      1: {
//          value: 1
//      },
//      2: {
//          value: 2
//      }
//  }
//  const foo = {...bar,2: {value: 4}}
//  console.log('foo =>',foo)