(function() {
	function BucketSort(arr) {
		var obj = {};
		var result = [];
		var max = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i];
			}
		}
		for (var i = 0; i < max + 1; i++) {
			obj[i] = 0;
		}
		for (var i = 0; i < arr.length; i++) {
			obj[arr[i]]++;
		}

		for (var k in obj) {
			if (obj[k] > 0) {
				for (var i = 0; i < obj[k]; i++) {
					result.unshift(Number(k));
				}
			}
		}
		return result;
	}

	var array = [5, 3, 5, 1, 8, 100, 1003, 200];
	var final = BucketSort(array);
	console.log(final);
})();
