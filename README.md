Active learning: A dynamic shopping list

In this challenge we want to make a simple shopping list example that allows you to dynamically add items to the list using a form input and button. When you add an item to the input and press the button.

---

### Features

1. **Add Items**: Enter an item into the input field and press the "Add Item" button to add it to the list.
2. **Delete Items**: Each item in the list has a "Delete" button to remove it from the list.
3. **Auto-Focus**: After adding an item, the input field clears and is refocused, ready for the next item.

---

### Demo

The final application will look similar to this:

![project demo](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents/shopping-list.png)


**Description**:

Follow these steps to complete the exercise. Ensure that the list behaves as described above.

1. **Setup**
   - Download a copy of `shopping-list.html` and place it in your project folder.
   - This file contains minimal CSS and a base structure with:
     - A `div` containing a label, input field, and button.
     - An empty `<ul>` list.
     - A `<script>` element where you will write JavaScript code.

2. **Get Started with JavaScript**
   - Create three variables to hold references to:
     - The list (`<ul>`)
     - The input (`<input>`)
     - The button (`<button>`)

3. **Create a Button Click Handler**
   - Write a function that will run when the "Add Item" button is clicked.

4. **Function Steps**
   - **Store the Input Value**: Start by saving the current value of the input element to a variable.
   - **Clear the Input Field**: Set the input field's value to an empty string (`''`) to clear it.
   - **Create New Elements**:
     - Create a list item (`<li>`)
     - Create a `<span>` element
     - Create a `<button>` element
   - **Build the List Item**:
     - Set the `<span>` text content to the value of the input.
     - Set the `<button>` text content to "Delete."
     - Append both the `<span>` and `<button>` as children of the `<li>`.
   - **Add the Item to the List**: Append the `<li>` to the `<ul>` list.
   - **Add Delete Functionality**: Attach an event listener to the delete button. When clicked, it should remove the entire list item (`<li>`).
   - **Refocus the Input Field**: Use `focus()` to refocus the input field, ready for the next entry.

---

### Example HTML Structure

Here’s an example of what the HTML structure will look like after adding an item:

```html
<div id="container">
  <label for="newItem">Enter a new item</label>
  <input id="newItem" type="text" />
  <button>Add Item</button>
  <ul>
    <li>
      <span>Sample Item</span>
      <button>Delete</button>
    </li>
  </ul>
</div>
<script src="script.js"></script>