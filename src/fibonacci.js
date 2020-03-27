const fibonacci = f => {
	if (f < 1) return 0
	else if (f === 1) return 1
	else return fibonacci(f - 2) + fibonacci(f - 1)
}

module.exports = {
	fibonacci,
}
