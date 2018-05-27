// 对象的扩展

{
	// 简洁表示法
	let a = 1;
	let b = 2;
	let es5 = {
		a: a,
		b: b
	}
	let es6 = {
		a,
		b
	}
	console.log(es5,es6);

	let es5_method = {
		hello: function(){
			console.log('hello');
		}
	}

	let es6_method = {
		hello(){
			console.log('hello');
		}
	}

	es5_method.hello();
	es6_method.hello();
}

{
	//属性表达式
	let a = 'b';
	let es5_obj = {
		a: 'c',
		b: 'c'
	}

	let es6_obj = {
		[a]: 'c',
	}

	console.log(es5_obj,es6_obj);
}

//新增API
//
{
	console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
	console.log('字符串',Object.is([],[]),[]===[]);

	console.log('拷贝',Object.assign({a:'a'},{b:'b'}));

	let test = {k:123,o:456};
	for(let [key,value] of Object.entries(test)){
		console.log(key,value);
	}
}

{
	//扩展运算符
	// let {a,b,...c} = {a:'a',b:'b',c:'c',d:'d'};
	// console.log(c);
	// let [a,b,...c] = [1,2,3,4,56,7];
	// console.log(c);
}