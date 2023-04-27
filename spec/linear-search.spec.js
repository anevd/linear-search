const { linearSearch, globalLinearSearch } = require("../linear-search");

describe("linearSearch()", function () {
	it("returns first index of item in array", function () {
		let item = 3;
		let arr = [1, 2, 3, 4, 5];
		expect(linearSearch(item, arr)).toEqual(2);
	});
	it("returns first index of item in array", function () {
		let item = 10;
		let arr = [1, 2, 3, 4, 5];
		expect(linearSearch(item, arr)).toBe(-1);
	});
	it("returns first index of item in array", function () {
		let item = 3;
		let arr = [1, 2, 3, 3, 3];
		expect(linearSearch(item, arr)).toEqual(2);
	});
	it("returns first index of item in array", function () {
		let item = -5;
		let arr = [1, -5, 3, 4, 5];
		expect(linearSearch(item, arr)).toEqual(1);
	});
	it("returns first index of item in array", function () {
		let item = "a";
		let arr = ["b", "a", "n", "a"];
		expect(linearSearch(item, arr)).toBe(1);
	});
	it("returns first index of item in array", function () {
		let item = "a";
		let arr = ["b", "c", "n", "d"];
		expect(linearSearch(item, arr)).toEqual(-1);
	});
});

describe("globalLinearSearch()", function () {
	it("returns array indexes of items in array", function () {
		let item = "a";
		let arr = ["b", "a", "n", "a", "n", "a", "s"];
		expect(globalLinearSearch(item, arr)).toEqual([1, 3, 5]);
	});
	it("returns array indexes of items in array", function () {
		let item = "a";
		let arr = ["b", "c", "n", "c", "n", "c", "s"];
		expect(globalLinearSearch(item, arr)).toEqual([]);
	});
	it("returns array indexes of items in array", function () {
		let item = 3;
		let arr = [1, 2, 3, 3, 3];
		expect(globalLinearSearch(item, arr)).toEqual([2, 3, 4]);
	});
	it("returns array indexes of items in array", function () {
		let item = 3;
		let arr = [1, 2, 4, 5, 6];
		expect(globalLinearSearch(item, arr)).toEqual([]);
	});
});
