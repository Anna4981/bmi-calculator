BMI Calculator

A simple BMI (Body Mass Index) calculator built with HTML5, CSS3 and JavaScript. The user enters their height and weight and receives their BMI and weight category.

Veda Technology Web Development Internship, Level 1, Day 6 (Task 6)

Features
Height (cm) and weight (kg) input fields
BMI calculation, rounded to one decimal place
BMI category display (Underweight, Normal weight, Overweight, Obese) with a colour for each result
Validation for empty, non-numeric, zero and negative values, with clear error messages
Reset button to clear the form and result
Responsive layout that works on desktop and mobile
Tools Used
HTML5
CSS3
JavaScript (vanilla)
Project Structure
bmi-calculator/
├── index.html   # Page structure and form
├── style.css    # Styling and responsive layout
├── script.js    # Validation, BMI calculation and category logic
└── README.md
How to Run
Download or clone the project.
Make sure index.html, style.css and script.js are in the same folder.
Open index.html in any web browser (or use the Live Server extension in VS Code).
How It Works

BMI is calculated with this formula:

BMI = weight (kg) / height (m)²

Height is entered in centimetres and converted to metres (divided by 100) before the calculation.

BMI Categories (WHO)
BMI	Category
Below 18.5	Underweight
18.5 – 24.9	Normal weight
25 – 29.9	Overweight
30 and above	Obese
Validation Rules
Fields cannot be empty
Values must be valid numbers
Values must be greater than zero (zero and negative numbers are rejected)
Sample Test Cases
Height	Weight	Expected Result
170 cm	65 kg	22.5, Normal weight
175 cm	50 kg	16.3, Underweight
165 cm	75 kg	27.5, Overweight
160 cm	90 kg	35.2, Obese
empty	empty	Error messages shown
0 / -5	any	"Must be greater than zero"
What I Practised
Handling form submission with JavaScript (preventDefault)
Validating user input
Doing calculations and rounding with toFixed()
Showing different output using if / else conditions
Updating the page with DOM manipulation
Resources
MDN Form Validation
WHO BMI Classification
Author

Anna Makgabo Thantsha# bmi-calculator
