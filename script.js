const addButton = document.querySelector(".button-add");
const inputField = document.querySelector("#text-input");
const listContainer = document.querySelector(".list-container");

addButton.addEventListener("click", addItem);
inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log(e);
        addItem();
    }
});

function addItem(e) {
    console.log(e);
    const text = inputField.value.trim();
    listContainer.appendChild(buildListItem(text));
    inputField.value = "";
    inputField.focus();
}

function buildListItem(text) {
    // Create list item container
    const itemContainer = document.createElement("li");
    itemContainer.classList.add("item-container");

    // Create the main text div
    const listItem = document.createElement("div")
    listItem.classList.add("list-item");
    listItem.textContent = text;

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button-delete");
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", () => deleteListItem(itemContainer));

    // Build the list item
    itemContainer.appendChild(listItem);
    itemContainer.appendChild(deleteButton);

    return itemContainer;
}

function deleteListItem(item) {
    item.remove();
}