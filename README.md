# Cat Intake Form

This is a simple web form for collecting information about cats, created using HTML, CSS, and JavaScript.

## Getting Started

To use this form, simply open the `index.html` file in a web browser. The form will appear in the browser window, and you can fill in the fields as needed.

## Form Fields

The form includes the following fields:

- **Name of Cat:** A text input field where you can enter the name of the cat.
- **Age of Cat:** A number input field where you can enter the age of the cat.
- **Days Needed:** Checkboxes for each day of the week (Monday through Sunday) where you can indicate which days you need the cat to be taken care of.
- **Time Arrive:** A time input field where you can enter the time you would like the cat to be dropped off.
- **Time Leave:** A time input field where you can enter the time you would like the cat to be picked up.
- **Cat Spayed/Neutered:** A checkbox where you can indicate whether or not the cat has been spayed or neutered.
- **Special Diet:** A checkbox where you can indicate whether or not the cat requires a special diet.
- **Describe Diet:** A text input field that appears when the "Special Diet" checkbox is checked, where you can describe the cat's special dietary needs.
- **Temperament of Cat:** Radio buttons where you can indicate the cat's temperament. The options are "Friendly," "Sleepy," "Independent," and "Territorial."
- **Describe Territorial:** A text input field that appears when the "Territorial" radio button is selected, where you can describe the cat's territorial behavior.
- **Owner's Name:** A text input field where you can enter the name of the cat's owner.
- **Daytime Phone:** A telephone number input field where you can enter the cat owner's daytime phone number.
- **Cell Phone:** A telephone number input field where you can enter the cat owner's cell phone number.
- **E-mail:** An email address input field where you can enter the cat owner's email address.
- **Emergency Contact Name:** A text input field where you can enter the name of an emergency contact.
- **Emergency Contact Phone:** A telephone number input field where you can enter the phone number of the emergency contact.

## Styling

The form is styled using the `style.css` file, which is linked in the head section of the `index.html` file.

## JavaScript

The `app.js` file contains the code for validating the form's fields when the user submits the form. It uses JavaScript to check that all required fields are filled in and that the values entered in the fields are valid.

For example, the code checks that the Name of Cat field is not empty and that the Age of Cat field contains a number between 0 and 30. It also checks that the email address entered in the E-mail field is in a valid format.

If any of the fields fail validation, the code displays an error message to the user explaining what needs to be corrected. Otherwise, the form data is submitted to the server for further processing.

Overall, the app.js file is a crucial part of the form's functionality, ensuring that users provide accurate and complete information and helping to prevent errors and data loss.


## Author

This form was created by Deepak.
