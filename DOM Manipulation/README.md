# DOM Manipulation

- Document Object Model is a programming interface for web documents.

- It represents the structure of an HTML or XML document as a tree-like structure, where each element in the document is a node.

## DOM Tree Structure

The DOM represents the document as a hierarchy of nodes:

- `Document Node` – Represents the entire HTML document (document object).

- `Element Nodes` – Represent HTML elements such as `<div>`, `<p>`, `<h1>`, etc.

- `Attribute Nodes` – Represent attributes like class, id, and src.

- `Text Nodes` – Represent the actual text inside an element.

# DOM Properties

- `innerText` - It is used to get or set the visible text inside an element.

- `innnerHTML` - It is used to get or set the HTML content inside an element.

- `textContent` - It is used to get or set all the text inside an element.

- `id` - It is used to get or set the `id` attribute of an element.

- `classname` - It is used to get or set the class attirbute as a single string.

- `classList` - It allows adding, removing, and toggling classes dynamically.

- `getAttribute()` - It is used to retirieve the value of an attribute.

- `setAttribute()` - It is used to set or update an attribute's value.

- `removeAttribute()` - It removes the specified attribute from an element.

- `hasAttribute()` - It checks if an element has a specific attribute.

- `style` - It is used to modify the inline CSS styles of an element.

- `parentElement` - It returns parent element of a given element.

- `children` - It returns a live HTMLcollection of an element's child elements.

- `childNodes` - It returns a `NodeList` of child nodes.

- `firstChild` - It returns the first child node.

- `firstElementChild` - It returns the first child that is an element.

- `lastChild` - It returns the last child node.

- `lastElementChild`- Returns the last child that is an element.

- `nextSibling` - Returns the next sibling node (could be text, element, or comment).

- `nextElementSibling`- Returns the next sibling element (ignores text and comments).

- `previousSibling` - Returns the previous sibling node (could be text, element, or comment).

- `previousElementSibling` - Returns the previous sibling element (ignores text and comments).

- `nextElementSibling` - It returns the next sibling element.

- `previousElementSibling` - It returns the previous sibling element.

- `value` - It gets or sets the value of input, textarea or select elements.

- `checked` - It gets or sets the checked state of a checkbox or a radio button.

- `selected` - It gets or sets the selected option in a `<select>` element.
