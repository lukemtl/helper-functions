export function updateSequenceAnimation(arr, cumulative, loopStart, stateCallback) {
	

	if (cumulative) {
		for (let i = loopStart; i < arr.length; i++) {
			console.log(i, arr);
			if (arr[i] == false) {
				arr[i] = true;
				console.log("break")
				break;
			} else if (i == arr.length - 1) {
				// *** map/merge function wont update reference
				for (let j = 0; j < arr.length; j++) {
					arr[j] = false;
				}
				console.log("redo:", arr)
				
			}
		}
	} else {
		arr = arr.map((itm, idx) => {
			if (itm == false && ((!arr[idx -1] && arr[arr.length - 1] == true) || arr[idx - 1] == true)) {
				return true;
			} else if (idx == 0 && arr.find((val) => val == true) == null) {
				return true;
			} else {
				return false;
			}
		});
	}

	stateCallback(arr);
}
