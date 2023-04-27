//Реализуй функции линейного поиска. Проверь результат тестами.
//принимает два аргумента: объект и массив. Она должна последовательно перебирать каждый элемент и возвращать индекс,
// в котором объект был изначально найден. Если объект не найден, то функция возвращает значение -1.
function linearSearch(n, arr) {
	let index = -1;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === n) {
			index = i;
		}
	}
	return index;
}

console.log(linearSearch(5, [3, 7, 5, 8, 5]));

//напишем новый метод globalLinearSearch, который возвращает массив всех индексов, в которых найден элемент.
function globalLinearSearch(n, arr) {
	let indexArr = [];
	arr.forEach((el, index) => {
		if (el === n) {
			indexArr.push(index);
		}
	});
	return indexArr;
}

console.log(globalLinearSearch("a", ["b", "a", "n", "a", "n", "a", "s"]));

module.exports = {
	linearSearch,
	globalLinearSearch,
};
