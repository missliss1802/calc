
window.onload = () => {
	let result = document.getElementsByClassName('text');
	let result1 = document.getElementsByClassName('text1');
	let number = document.getElementsByClassName('number');
	let reset = document.getElementsByClassName('reset');
	// let action = document.getElementsByClassName('action');
	let res = document.getElementsByClassName('result');
	let num1 = 0;
	let num2 = 0;
	let mem = 0;
	let act = '';
	for (let elem of number) {
		elem.addEventListener('click', (e) => {
			if (result[0].value == 0 || result[0].value == '+' || result[0].value == "-" || result[0].value == "*" || result[0].value == "/") {
				result[0].value = '';
				result[0].value += e.target.value;
			} else {
				result[0].value += e.target.value;
			}
			if (result[0].value.length > 13) {
				result[0].value.length = 13;
			}
		})
	}
	reset[0].addEventListener('click', () => {
		result[0].value = 0;
		result1[0].value = '';
		num2 = 0;
		num1 = 0;
		mem = 0;
		count = 0;
		act = '';
	})
	let count = 0;
	let index = 0;
	let action = () => {
		mem = result[0].value;
		if (count > 0) {
			result1[0].value = eval(result1[0].value + mem[index] + num2);
		} else if (count == 0) {
			if (mem.indexOf('*') > -1) {
				index = mem.split('').findIndex((i) => {return i == '*'})
				num2 = mem.slice(index+1)
				num1 = mem.slice(0, index);
				result1[0].value = eval(num1 * num2);
				count++;
			} else if (mem.indexOf('+') > -1) {
				index = mem.split('').findIndex((i) => {return i == '+'})
				num2 = mem.slice(index+1)
				num1 = mem.slice(0, index);
				result1[0].value = eval(parseInt(num1) + parseInt(num2));
				count++;
			} else if (mem.indexOf('-') > -1) {
				index = mem.split('').findIndex((i) => {return i == '-'})
				num2 = mem.slice(index+1)
				num1 = mem.slice(0, index);
				result1[0].value = eval(num1 - num2);
				count++;
			} else if (mem.indexOf('/') > -1) {
				index = mem.split('').findIndex((i) => {return i == '/'})
				num2 = mem.slice(index+1)
				num1 = mem.slice(0, index);
				result1[0].value = eval(num1 / num2);
				count++;
			}

		}
		console.log(count);
	}
	res[0].addEventListener('click', (e) => {
		action();
	})
}