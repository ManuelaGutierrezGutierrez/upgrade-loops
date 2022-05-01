// Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:

const toys = [
	{ id: 5, name: "Buzz MyYear" },
	{ id: 11, name: "Action Woman" },
	{ id: 23, name: "Barbie Man" },
	{ id: 40, name: "El gato con Guantes" },
	{ id: 40, name: "El gato felix" },
];

const ArrayIndex = [];

for (let toy of toys) {
	if (toy.name.includes("gato")) {
		let index = toys.indexOf(toy);
		ArrayIndex.push(index);
	}
}

ArrayIndex.sort(function (a, b) {
	return b - a;
});

for (let i = 0; i < ArrayIndex.length; i++) {
	toys.splice(ArrayIndex[i], 1);
}

console.log(toys);

// Sin la obligación de hacer el bucle for...of

// for (let i = 0; i < toys.length; i++) {
// 	if (toys[i].name.includes("gato")) {
// 		toys.splice(i, 1);
// 		i--;
// 	}
// }

// console.log(toys);
