# CSS Object-Fit and Object-Position

- The `object-fit` property in CSS is used to define how the content of a replaced element, such as an image or video, should be resized to fit within its container.

  - `fill` - Stretches the content to fill the container, possibly distorting it.

  - `contain` - Resizes the content to fit within the container while maintaining its aspect ratio.

  - `cover` - Resizes the content to completely cover the container while maintaining its aspect ratio, possibly cropping it.

  - `scale-down` - Scales the content down to either none or contain, whichever results in a smaller content size.

- The `object-position` property specifies the position of the content inside its container. This property works in tandem with object-fit.

  - `Keywords` - top, bottom, left, right, center.

  - `Percentage or Length` - Specifies the position as percentages (e.g., 50% 50%) or pixel values
