// 数值扩展
{
	// 二进制
	console.log(0b0101);
	// 八进制
	console.log(0o17);
	// 十六进制
	console.log(0xfff);
}
//isFinite判断是否是有限的
{
	console.log('15',Number.isFinite(15));
	console.log('NaN',Number.isFinite(NaN));
	console.log('15/0',Number.isFinite(15/0));
	console.log('NaN',Number.isNaN(NaN));
	console.log('0',Number.isNaN(0));
}
//isInteger判断是否是整数
{
	console.log('25',Number.isInteger(25));
	console.log('25.0',Number.isInteger(25.0));
	console.log('25.1',Number.isInteger(25.1));
	console.log('25.1',Number.isInteger('25'));
}

{
	//最大和最小的边界2^53和-2^53
	console.log(Number.MAX_SAFE_INTEGER);
	console.log(Number.MIN_SAFE_INTEGER);
	console.log('10',Number.isSafeInteger(10));
	console.log('a',Number.isSafeInteger('a'));
}

{
	//取数字的整数部分
	console.log('4.1',Math.trunc(4.1));
	console.log('4.9',Math.trunc(4.9));
}

{
	console.log('-5',Math.sign(-5));
	console.log('0',Math.sign(0));
	console.log('5',Math.sign(5));
}
//立方根
{
	console.log('-1',Math.cbrt(-1));
	console.log('-8',Math.cbrt(-8));
}