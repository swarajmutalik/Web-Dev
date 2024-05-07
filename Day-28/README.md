# Day 28 Overview

## CSS Flexbox

It is a powerful layout model designed to provide a more effective way to distribute space and align items within a container,even when their size is unknown or dynamic.

### Key Concepts of Flexbox

1. Flex Container - The parent item which contains all the flex items is known as Flex Container. To activate the Flexbox layout,set the 'display' property of the container to 'flex' or 'inline-flex'.

2. Flex Items - The Children of a flex container are called flex items. These items can be aligned and distributed within the container along the main axis and cross axis.

3. Main Axis and Cross Axis - Flexbox layout operates along 2 axes, main and cross axis. The main axis is defined by the 'flex-direction' property, while the crosss axis is perpendicular to it.

   - For flex-direction: row, the main axis is horizontal, and the cross axis is vertical.

   - For flex-direction: column, the main axis is vertical, and the cross axis is horizontal.

4. Main Start,End,Cross Start,Cross End - These terms refer to the start and end points along the main and cross axes.

### Proprties of Flex Container

1. 'display' - It is used to set the container as a flex container.

2. 'flex-direction' - It determines the main axis direction.

3. 'flex-wrap' - It is used to control the arrangement of flex items onto a single line or can wrap onto mutiple lines.

4. 'justify-content - It is used to align the flex items along the main axis.

5. 'align-items' - it aligns the flex items along the cross axis when they do not fill the container.

6. 'align-content' - It aligns the flex lines within the flex container when there is extra space.

### Properites of Flex Items

1. 'order' - Specifies the order of the flex item relative to the other items.

2. 'flex-grow' - It defines the ability for a flex item to grow if necessary.

3. 'flex-shrink' - It defines the ability for a flex item to shrink if necessary.

4. 'flex-basis' - It specifies the initial size of a flex item.

5. 'align-self' - It overrides the 'align-items' property for a specific flex item.

### Advantages of Flexbox

1. Simplified Layouts - It is easy to make complex layouts with the help of this.

2. Dynamic Sizing - It automatically adjusts the size of flex items to fit the container, making it suitable for responsive designs.

3. Alignment Control - It provides precise control over alignment and spacing of items along the main and cross axis.

4. Ordering - Allows you to rearrange the order of flex items independent of their source code in HTML.
