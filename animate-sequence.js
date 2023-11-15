export function updateSequenceAnimation(arr, cumulative, loopStart, callback) {
	// *** map/merge functions wont update reference; must update original array in callback in adidtion to state update		
	
	let nextArr = [...arr];

	if (cumulative) {
		for (let i = loopStart; i < arr.length; i++) {
			if (nextArr[i] == false) {
				nextArr[i] = true;
				break;
			} else if (i == arr.length - 1) {
				nextArr = arr.map(() => false);
			}
		}
	} else {
		nextArr = arr.map((itm, idx) => {
			if (itm == false && ((!arr[idx -1] && arr[arr.length - 1] == true) || arr[idx - 1] == true)) {
				return true;
			} else if (idx == 0 && arr.find((val) => val == true) == null) {
				return true;
			} else {
				return false;
			}
		});
	}

	callback(nextArr);
}
