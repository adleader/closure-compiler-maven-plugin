function inline(x) {
	return x + 1;
}
function unused() {
	return helper(999999);
}	
function helper(x) {
	if (x < 1) return 1;
	return x * helper(x-1);
}
(function() {
	const me = {
		foo: 99,
		bar: helper(20),
		inline1: inline(1),
		inline2: inline(2)
	};
	console.log(me.foo);
	console.log(me.helper);
	console.log(me.inline1);
})();