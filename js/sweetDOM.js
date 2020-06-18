const makeSweetHTML = ( sweetObj ) => {
	const domElement = `<p>${sweetObj.name}</p>
	<p>${sweetObj.seasonId}</p>
	<p>${sweetObj.typeId}</p>
	<p>${sweetObj.shapeId}</p>
	<p>${sweetObj.quantity}</p>
	<p>${sweetObj.desc}</p>
	`
	return domElement
}

export default makeSweetHTML;