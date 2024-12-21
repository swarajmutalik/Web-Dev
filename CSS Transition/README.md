# CSS Transition

- CSS transitions allow you to change property values smoothly (over a specified duration) rather than abruptly. They are used to create animations and improve the user experience on web pages.

- With transitions, you can specify which CSS properties should be animated, how long the animation should last, and what type of timing function to use.

- The transition shorthand property allows you to define multiple aspects of a transition in a single line. Here's the syntax:

  `transition: property duration timing-function delay;`

  Parameters:

  - `property`: The name of the CSS property to which the transition is applied (e.g., color, background-color, transform). Use all to apply the transition to all properties.
  - `duration`: The time the transition takes to complete (e.g., 1s for 1 second, 500ms for half a second).
  - `timing-function`: The speed curve of the transition (default is ease). Common values:
  - `ease`: Starts slow, speeds up, then slows down.
  - `linear`: Constant speed throughout.
  - `ease-in`: Starts slow and speeds up.
  - `ease-out`: Starts fast and slows down.
  - `ease-in-out`: Combination of ease-in and ease-out.
  - `cubic-bezier(n,n,n,n)`: Custom speed curve using cubic-bezier values.
  - `delay`: Specifies a delay before the transition starts (optional, default is 0s).
