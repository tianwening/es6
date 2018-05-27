// 数组扩展
{
	let arr = Array.of(3,4,5,7,9);
	console.log('arr=',arr);

	let empty = Array.of();
	console.log(empty);
}
//Array.from将一些伪数组转换为真数组
{
	let p = document.querySelectorAll('p');
	let pArr = Array.from(p);
	pArr.forEach(function(item){
		console.log(item.textContent);
	})

	console.log(Array.from([1,3,5],function(item){
		return item*2;
	}))
}

//填充数组的功能
{
	console.log('fill',[1,'a',undefined].fill(7));
	console.log('fill-pos',['a','b','c','d','e'].fill(7,1,3));
}

{
	for(let index of ['1','c','ks'].keys()){
		console.log('keys',index);
	}

	for(let index of ['1','c','ks'].values()){
		console.log('values',index);
	}

	for(let [index,value] of ['1','c','ks'].entries()){
		console.log('values',index,value);
	}
}
//数组里面替换
{
	console.log([1,2,3,4,5].copyWithin(0,3,5));
}

{
	//find只找一个满足
	console.log([1,2,3,4,5,6].find(function(item){
		return item>3;
	}))
	console.log([1,2,3,4,5,6].findIndex(function(item){
		return item>3;
	}))
}

{
	console.log('number',[1,2,NaN].includes(1));
	console.log('number',[1,2,NaN].includes(NaN));
}