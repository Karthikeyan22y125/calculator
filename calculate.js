function generateTextBoxes() {
    const numBoxes = parseInt(document.getElementById('numBoxes').value);
    const container = document.getElementById('generatedInputs');
    container.innerHTML = ''; // Clear any existing text boxes

    if (isNaN(numBoxes) || numBoxes < 1) {
        alert('Please enter a valid number greater than 0.');
        return;
    }

    for (let i = 1; i <= numBoxes; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Enter number ${i}`;
        container.appendChild(input);
    }
}

function calculateSum() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const sum = num1 + num2;
            document.getElementById('output').innerText = `Sum: ${sum}`;
        }

function calculateSum() {
	const num1 = parseFloat(document.getElementById('num1').value);
	const num2 = parseFloat(document.getElementById('num2').value);
	const sum = num1 + num2;
	document.getElementById('output').innerText = `Sum: ${sum}`;
	}