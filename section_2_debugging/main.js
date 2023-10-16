/**
 * Bug: nó ám chỉ các lỗi xảy ra trong các đoạn code mà mình viết, hoặc có thể bất cứ vấn đề gì làm cho ứng dụng của mình 
 * không thể chạy được, hoặc có thể hoạt động sai so với yêu cầu
 */

// Debug: tìm kiếm những vấn đề gây ra lỗi trong ứng dụng, để có hướng giải quyết, sửa các lỗi cho ứng dụng (fix bug)


// Printlining: sử dụng các hàm như consle.log(); console.table(), ...
// Debug Devtool: sử dụng trên trình duyệt trong tab source
// - break point (điểm dừng): khi chương trình gặp cái break point thì sẽ dừng hoạt động tại điểm break point đó

function divide() {
    const x = 100;
    const y = 0;
    return x / y;
}
divide();


function findLargestElement(arr) {
	let max = arr[0];
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		if (max < element) {
			max = element;
		}
	}

	return max;
}
const result = findLargestElement([100, 1000, 9999, 873, 32349, 473734]);