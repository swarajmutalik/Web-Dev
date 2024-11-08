# HTML Forms

- HTML Forms are a crucial part of web development, enabling the users to input and submit the data, which can be processed or stored on the server.

- An HTML Form is created using the `<form>` element, which wraps various form controls such as text fields, radio buttons, checkboxes and submit buttons.

- Some of the attributes that are passed in the form element are as follows -

    - `action`: Specifies the URL where the form data will be sent for processing.

    - `method`: Determines the HTTP method to use when submitting the form (GET or POST).

    - `enctype`: Defines the encoding type (important when uploading files). Use `enctype="multipart/form-data"` when handling file uploads.

- Some of the common controls that are used in Forms are as follows -

    - Text Fields

        - `<input type="text">`: Allows users to enter a single line of text

    - Password Field

        - `<input type="password">`: Masks input, commonly used for passwords.

    - Email and Number Fields

        - `<input type="email">`: Validates that input matches an email format.

        - `<input type="number">`: Restricts input to numbers, with optional min, max, and step attributes.

    - Radio Buttons

        - `<input type="radio">`: Allows users to select one option from a group.

    - Checkboxes

        - `<input type="checkbox">`: Allows users to select one or multiple options.

    - Dropdown(Select Box)

        - `<select>`: Provides a dropdown list of options.

    - Textarea

        - `<textarea>`: Allows users to enter multi-line text.

    - File Upload

        - `<input type="file">`: Allows users to upload files.

    - Submit and Reset Button

        - `<input type="submit">`: Submits the form data.

        - `<input type="reset">`: Resets all form fields to their default values
