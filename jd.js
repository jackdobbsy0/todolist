//Assigning the variables

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var deleteBtn = document.getElementsByTagName("button");

//Returning the value of list length

function listLength() {
	console.log(listItems.length);
	return listItems.length
}

//Returning the value of the user input

function inputLength() {
	return input.value.length;
}

//Creating a delete button for existing items

for (i = 0; i < listLength(); i++ ) {
	var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete!"));
		listItems[i].appendChild(btn);
	btn.onclick = removeParent;
}

//Remove function for existing/new buttons

function removeParent(evt) {
	evt.target.removeEventListener("Click", removeParent, false);
	evt.target.parentNode.remove();
}

//Adding a toggle option for a "done" item

function checked(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

//Creating new list element

function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

//Creating delete button for new list elements

		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete!"));
		li.appendChild(btn);
		btn.onclick = removeParent;
	}


//Function for add/enter button

	function addListAfterClick() {
		if (inputLength() > 0) {
		createListElement();
	}
}

function deleteBtnsLength() {
	console.log(deleteBtn.length);
	return deleteBtn.length
}

//Function for add/enter button with keypress

	function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//Event listeners for click and keypress with functions

ul.addEventListener("click", checked);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
	