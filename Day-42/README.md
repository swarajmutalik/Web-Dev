# Day 42 Overview

## Introduction to DOM Manipulation

Document Object Model is a programming interface for web documents. It represents the page so that programs can change the document structure,style and content.

Here are some of the key properties for handling the different types of relationships that are present in DOM - 

### Accessing Child Nodes 

1. Children - It returns a live HTMLCollection of the child elements of the specified element.

2. ChildNodes - It returns a live NodeList of all the child nodes of the specified node, inlcluding the text nodes and comment nodes. 

3. firstChild - It returns the first child node of the specified node.

4. firstElementChild - It returns first child element of the specified element.

5. lastChild - It returns the last child node of the specified node. 

6. lastElementChild - It retuns the last child element of the specified element.

### Accessing Parent Nodes 

1. parentNode - It returns the parent node of the specified node. 

2. parentElement - It returns the parent element of the specified element.

### Accessing Sibling Nodes 

1. nextSibling - It returns the node immediately following the specified node.

2. nextElementSibling - It returns the element immediately following the specified element or 'null' if there is no such element.

3. previousSibling - It returns the node immediately preceding the specified node or 'null' if there is no such element.

4. previousElementSibling - It returns the element immediately preceding the specified element or 'null' if there is no such element. 
