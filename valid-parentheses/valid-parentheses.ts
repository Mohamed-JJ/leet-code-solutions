function isValid(s: string): boolean {
	const stack: string[] = []
	const stack2: string[] = []
	for (let i = 0; i < s.length; i++) {
		if ('([{'.includes(s[i])) {
			stack.push(s[i])
		} else
			stack2.push(s[i])
		switch (stack[stack.length - 1]) {
			case '{':
				if (s[i] === '}') {
					stack.pop()
					stack2.pop()
				}
				break;
			case '[':
				if (s[i] === ']') {
					stack.pop()
					stack2.pop()
				}
				break;
			case '(':

				if (s[i] === ')') {
					stack.pop()
					stack2.pop()
				}
				break;
		}
	}
	return stack.length === 0 && stack2.length === 0
};