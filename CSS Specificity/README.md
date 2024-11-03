# CSS Specificity and Cascade

- CSS Specificity and Cascade are the fundamental concepts in CSS that help in determining which style should be applied to the elements on a webpage.

- CSS Specificity is a scoring system that is used by the browser to decide which CSS rule should take precedence when multipe rules target the same element.

- The specificity of a selector is calculated based on its components.

- CSS Cascade determine the order in which the CSS rules are applied and priortize them based on the following criteria -

  - CSS rules marked with `!important` take the highest precedence, even over the specificity scores.

  - Among the rules without `!important`, the one with the highest speicificity score is applied.

  - If two rules have the same specificity, the last one defined in the CSS is applied, as it is closest to the actual HTML.
