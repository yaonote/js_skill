/**
 * 二分法查找：是一种在有序数组中查找特定元素的搜索算法
 */

function binarySearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (key == arr[mid]) {
            return mid;
        } else if (key > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

function binarySearch(arr, low, high, key) {
    if (low > hight) return -1;
    let mid = Math.floor((low + high) / 2);
    if (key == arr[min]) {
        return mid;
    } else if (key < arr[mid]) {
        high = mid - 1;
        return binarySearch(arr, low, high, key);
    } else {
        low = mid + 1;
        return binarySearch(arr, low, hight, key);
    }
}

function binarySearch(arr) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor(low / high / 2);
        if (arr[mid] == key) {
            return mid;
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
