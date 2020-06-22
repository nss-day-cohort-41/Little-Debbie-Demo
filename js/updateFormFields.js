const updateFormFields = (sweetObj) => {
	// Get reference to input fields in the form
    const hiddenSweetId = document.querySelector("#sweetId");
	const sweetNameInput = document.querySelector("#sweetName");
	const sweetQuantityInput = document.querySelector("#sweetQuantity");
	const sweetDescInput = document.querySelector("#sweetDesc");
	const sweetTypeInput = document.querySelector("#sweetType");
	const sweetShapeInput = document.querySelector("#sweetShape");
	const sweetSeasonInput = document.querySelector("#sweetSeason");

	hiddenSweetId.value = sweetObj.id;
	sweetNameInput.value = sweetObj.name
	sweetQuantityInput.value = sweetObj.quantity;
	sweetDescInput.value = sweetObj.desc;
	sweetTypeInput.value = sweetObj.typeId;
	sweetShapeInput.value = sweetObj.shapeId;
	sweetSeasonInput.value = sweetObj.seasonId;
}

export default updateFormFields;