let bgContainerEle = document.createElement("div");
bgContainerEle.classList.add("bg-container");
document.body.appendChild(bgContainerEle);
// console.log(bgContainerEle);

let headingEle = document.createElement("h1");
headingEle.classList.add("heading");
headingEle.textContent = "Grocery List";
bgContainerEle.appendChild(headingEle);
// console.log(headingEle);

let GroceryListContainer = document.createElement("ul");
GroceryListContainer.classList.add("list-container");
bgContainerEle.appendChild(GroceryListContainer);
// console.log(GroceryListContainer);

let GroceryItem = ['Milk', "Peanut Butter" ,"Dairy Milk","Biscuit" , "Chako chips", "Tomoto sauce", "cup cake", "Noodels" , "etc........."];

for(let item of GroceryItem){
    let GroceryItems = document.createElement("li");
    GroceryItems.textContent = item;
    // console.log(item);
    GroceryListContainer.appendChild(GroceryItems)
}

let inputEle = document.createElement("input");
inputEle.type = "checkbox";
inputEle.id = "checkBoxId";
bgContainerEle.appendChild(inputEle);
// console.log(inputEle);

let labelEle = document.createElement("label");
labelEle.setAttribute("for", "checkBoxId");
labelEle.classList.add("delivery-text");
labelEle.textContent = "Need Home Delivery";
bgContainerEle.appendChild(labelEle);
// console.log(labelEle);

let nextLineEle = document.createElement("br");
bgContainerEle.appendChild(nextLineEle);
// console.log(nextLineEle);

let buttonEle = document.createElement("button");
buttonEle.classList.add("btn", "btn-primary");
buttonEle.textContent = "Proceed to pay";
bgContainerEle.appendChild(buttonEle);
// console.log(buttonEle);