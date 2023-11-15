export function updateSequenceAnimation(arr, stateCallback, cumulative, loopStart) {

	if (cumulative) {
		for (let i = loopStart; i < arr.length; i++) {
			if (arr[i] == false) {
				arr[i] = true;
				break;
			} else if (i == arr.length - 1) {
				arr = [...Array(arr.length)].map(() => false);
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
