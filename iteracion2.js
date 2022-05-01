// **Iteración #2: Condicionales avanzados**

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

// Puedes usar este array para probar tu función:

const alumns = [
	{ name: "Pepe Viruela", T1: false, T2: false, T3: true },
	{ name: "Lucia Aranda", T1: true, T2: false, T3: true },
	{ name: "Juan Miranda", T1: false, T2: true, T3: true },
	{ name: "Alfredo Blanco", T1: false, T2: false, T3: false },
	{ name: "Raquel Benito", T1: true, T2: true, T3: true },
];

alumns.map(function (alumn, index, array) {
	alumn.isApproved =
		(alumn.T1 === true && alumn.T2 === true) ||
		(alumn.T1 === true && alumn.T3 === true) ||
		(alumn.T2 === true && alumn.T3 === true)
			? true
			: false;
});
console.log(alumns);
