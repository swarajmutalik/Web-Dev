# Event Bubbling

- It is a mechanism in JS where an event starts from the target element and propogates upwards through its ancestors in the DOM hierarchy.

- This means if you click on a child element inside a parent, the event first triggers on the child and then bubbles up to the parent and further up to the higher ancestors unless stopped.

## setInterval() and setTimeout() 

- Both these functions are used for executing functions at specific time intervals. 

    - `setinterval()` - It repeats a function at specified intervals.

    - `setTimeout()` - It executes a function once after a delay. 
