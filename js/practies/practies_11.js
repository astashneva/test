const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
	let str = "";

	arr.length === 0 ? str = "Семья пуста" : str = "Семья состоит из: ";

	arr.forEach(member => {
		str += `${member} `;
	});
	// let str = "Семья состоит из: ";
	// for (let key in arr){
	// 	str+=`${arr[key]} `;
	// }
	return str;
}

console.log(showFamily(family));

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
	arr.forEach(city =>{
		console.log(city.toLowerCase());
	});
}

standardizeStrings(favoriteCities);
