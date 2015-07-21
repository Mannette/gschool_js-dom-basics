console.log("sanity check!");

// targets all elements with #main.
var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

// targets all elements with ul tag. Outputs to an array.
var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

// targets first ul element within document.
var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

// targets all li tags. Outputs to an array.
var allListItems = document.getElementsByTagName('li');
console.log(allListItems);

// loops through collection of li tags. Outputs individual elements
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}

// targets text within selected elements.
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText);
}

// changes text to the index of element
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}
console.log(allListItems);

// innerText will present only text and not show tags.
// innerHTML will present text with included tags.

// creates new element.
var li = document.createElement('li');
console.log(li);

// populates text within selected tags
var newElement = li.innerText = "another list item";
console.log(newElement);
console.log(li);

// Adds new element to existing list.
getSingleElement.appendChild(li);
console.log(allListItems);

//
var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend";
console.log(anotherListElement);
getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);