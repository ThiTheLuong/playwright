/**
 * ****************************
 * Sort
 * ****************************
 */
// let intArr = [12, 34, 1, 16, 28];
function sortArray(arr) {
    let length = arr.length;
    for (let index = 0; index < length -1; index++) {
        for (let index2 = 0; index2 < length -1 - index; index2++) {
            if (arr[index2] > arr[index2 + 1]) {
                let temp = arr[index2];
                arr[index2] = arr[index2 + 1];
                arr[index2 + 1] = temp;
            }
        }
    }
    
    return arr;
}
// console.log(sortArray(intArr));
module.exports = { sortArray };

// Selection Sort
function ascSortedArr(arr) {
    let sortedArr = [...arr]; // Tạo một bản sao của mảng đầu vào để không thay đổi mảng gốc.
    let sortedArrLength = sortedArr.length;

    for (let i = 0; i < sortedArrLength - 1; i++) { 
        let minIndex = i; // Giả định phần tử tại vị trí i là nhỏ nhất.

        // Tìm phần tử nhỏ nhất trong phần còn lại của mảng.
        for (let j = i + 1; j < sortedArrLength; j++) {
            if (sortedArr[j] < sortedArr[minIndex]) {
                minIndex = j; // Cập nhật chỉ số của phần tử nhỏ nhất.
            }
        }

        // Nếu tìm được phần tử nhỏ hơn, hoán đổi vị trí.
        if (minIndex != i) {
            let stamp = sortedArr[minIndex]; // Lưu tạm giá trị nhỏ nhất.
            sortedArr[minIndex] = sortedArr[i]; // Đưa giá trị tại i vào vị trí nhỏ nhất.
            sortedArr[i] = stamp; // Đưa giá trị nhỏ nhất về vị trí i.
        }
    }

    console.log('ASC sorted arr: ', sortedArr); // In mảng đã sắp xếp ra console.
    return sortedArr; // Trả về mảng đã sắp xếp.
}