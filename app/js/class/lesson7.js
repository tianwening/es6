// 函数扩展

{
	function test(x,y='world'){
		console.log('默认值',x,y);
	}

	test('hello');
}

{
	let x = 'test';
	function test(c,y=x){
		console.log('作用域',x,y);
	}
	test();
}

{
	function test3(...arg){
		console.log(arg);
		for(let v of arg){
			console.log('rest',v);
		}
	}
	test3(1,2,3,4,'a');
}

{
	console.log(...[1,2,4]);
	console.log('a',...[1,2,4]);
}

//箭头函数
{
	let arrow = v=> v*2;
	console.log(arrow(3));
}
//伪调用
{
	function tail(x){
		console.log('tail',x);
	}

	function fx(x){
		return tail(x);
	}

	fx(123);
}