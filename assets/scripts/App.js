const numberArray = [1, 2, 3];
function transformToObjects(numberArray) {
	const objectArray = numberArray.map(item => ({ val: item }));

	return objectArray;
}
