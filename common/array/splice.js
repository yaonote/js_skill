/**
 * splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。 改变原数组
 * arrayObject.splice(index,howmany,item1,.....,itemX)
 * index：必需，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
 * howmany：必需，要删除的项目数量。如果设置为 0，则不会删除项目。
 * item1, ..., itemX：可选。向数组添加的新项目。
 */


 const arr = [1,2,5,7,4];
 arr.splice(2,2,"a","b");
 console.log(arr)