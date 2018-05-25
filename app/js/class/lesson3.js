//以前es5的正则创建方式
{
	let regex = new RegExp('xyz','i');
	let regex2 = new RegExp(/xyz/i);

	console.log(regex.test('xyz123'),regex2.test('xyz123'));
}
//es6新增的正则创建方式
{
	let regex = new RegExp(/xyz/ig,'i');
	console.log(regex.flags);
}
//es6新增修饰符
//g和y都是全局修饰符
{
	let s = 'bbb_bb_b';
	let a1 = /b+/g;
	let a2 = /b+/y;

	console.log('one',a1.exec(s),a2.exec(s));
	console.log('one',a1.exec(s),a2.exec(s));
	//判断正则对象是否开启y修饰符
	console.log(a1.sticky,a2.sticky);
}
//u修饰符
{
	console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
	console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));

	console.log('未加u修饰符进行匹配',/\u{61}/.test('a'));
	console.log('添加u修饰符进行匹配',/\u{61}/u.test('a'));

	console.log(`\u{20BB7}`);

	let s = '𠮷';

	console.log('u',/^.$/.test(s));
	console.log('u',/^.$/u.test(s));

	console.log('test',/𠮷{2}/.test('𠮷𠮷'));
	console.log('test2',/𠮷{2}/u.test('𠮷𠮷'));
}