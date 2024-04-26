# Day 16 Overview

## CSS Box Model

The CSS Box Model is a fundamental concept in web design and development that describes how elements are structured and rendered in a webpage.

The CSS Box Model conceptualizes each element as a rectangular box with 4 distinct areas that are content, padding, margin and border.

### Key Components of CSS Box Model

1. Content Box

   - This is where the content is displayed.

   - The size of the content box is determined by properties like width, height, font-size etc.

2. Padding Box

   - The padding is the space between the content box and the border.

   - Padding doesn't change the content's size but affects the elements overall dimensions.

3. Border Box

   - This is the boundary around the element, enclosing the content and padding.

   - Borders can have different styles, colors and widths.

4. Margin Box

   - The margin is the space outside the border,seperating the elements from other elements.

   - Margins do not affect the element's size but influence its positioning.

### Box Sizing Property

One key property that affects the box model is the box sizing.

It determines how the total size of element is calculated, affecting how padding and border contribute to its width and heigth.

content-box - Padding and borders are added to the content's width and heigth to determine the total size of the element.

border-box - The total width and height include padding and borders. This setting ensures that the defined width and height do not increase with padding or border.
