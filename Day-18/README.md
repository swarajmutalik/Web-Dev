# Day 18 Overview 

## CSS Specificity

It is a measure of the importance of a CSS rule. It helps in determining which style is applied when multiple rules target the same element. Specificity is calculated based on the type and number of selectors used in the rule.

### Specificity Calculation 

Specificity is generally calculated based on 4 levels.

1. Inline Styles - They have the highest specificity.

2. ID Selectors - They have the second highest specificity.

3. Class/Attribute/Pseudo-class selectors - They have lower specificity than ID selectors.

4. Element/Pseudo-element selectors - They have the lowest specificity.

### Cascading Algorithm 

It is used to describe how the browser determines which styles to apply when multiple CSS rules target the same element.

### Working of Cascading Algorithm 

1. !important - styles marked with !important have the highest priority.

2. Specificty - When multiple rules are being applied on the same element, the rule with the highest specificity takes the precendence.

3. Source Order - If two rules have the same specificity, the one that appears later in the CSS file takes precedence.
