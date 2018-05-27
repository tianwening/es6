//数组结构Set和Map
{
	let list = new Set();
	list.add(5);
	list.add(7);

	console.log('size',list.size);
}

{
	let arr = [1,2,3,4,5];
	let list = new Set(arr);

	console.log('size',list.size);
}
//Set里面不允许重复的元素，使用场景：去重
{
	let list = new Set();
	list.add(1);
	list.add(2);
	list.add(1);

	console.log('list',list);
}
//Set实例的相关方法
{
	let arr = ['add','delete','clear','has'];
	let list = new Set(arr);

	console.log('has',list.has('has'));
	console.log('delete',list.delete('has'),list);
	console.log('clear',list.clear(),list);
}

{
	let arr = ['add','delete','clear','has'];
	let list = new Set(arr);

	for(let key of list.keys()){
		console.log('keys',key);
	}

	for(let value of list.values()){
		console.log('values',value);
	}

	for(let [key,value] of list.entries()){
		console.log('values',key,value);
	}
}
//WeakSet只支持对象
{
	let weakList = new WeakSet();
	let arg = {a:'a'};
	weakList.add(arg);
	// weakList.add(2);

	console.log('weakList',weakList);
}

//Map
{
	let map = new Map();
	let arr = ['123'];

	map.set(arr,456);
	console.log('map',map,map.get(arr));
}

{
	let map = new Map([['a',123],['b',456]]);
	console.log('map args',map);
	console.log('size',map.size);
	console.log('delete',map.delete('a'),map);
	console.log('delete',map.clear(),map);
}

//WeakMap
//
{
	let weakmap = new WeakMap();

	let o = {};
	weakmap.set(o,123);

	console.log(weakmap.get(o));
}
// 四中数据结构的对比
// Map和Array的对比
{
	let map = new Map();
	let array = [];

	//增
	map.set('t',1);
	array.push({'t':1});

	console.info('map-array',map,array);

	//查
	let map_exist = map.has('t');
	let array_exist = array.find(item=>item.t);

	console.info('map-arrya-exist',map_exist,array_exist);

	//改
	map.set('t',2);
	array.forEach(item=>item.t?item.t=2:'');

	console.info('map-array-modify',map,array);

	//删
	map.delete('t');
	let index = array.findIndex(item=>item.t);
	array.splice(index,1);

	console.info('map-array-empty',map,array);
}
// Set和Array的对比
{
	let set = new Set();
	let array = [];

	//增
	set.add({t:1});
	array.push({t:1});

	console.info('set-array',set,array);

	//查
	let set_exist = set.has({t:1});
	let array_exist = array.find(item=>item.t);

	console.info('set-array-exist',set_exist,array_exist);

	//改
	set.forEach(item=>item.t?item.t=2:'');
	array.forEach(item=>item.t?item.t=2:'');

	console.info('set-array-modify',set,array);

	//删
	set.forEach(item=>item.t?set.delete(item):'');
	let index = array.findIndex(item=>item.t);
	array.splice(index,1);

	console.info('set-array-delete',set,array);
}
//Set、Map、Object对比
{
	let item = {t:1};
	let map = new Map();
	let set = new Set();
	let obj = {};

	//增
	map.set('t',1);
	set.add(item);
	obj['t'] = 1;

	console.info('map-set-obj',map,set,obj);

	//查
	console.info({
		map_exist: map.has('t'),
		set_exist: set.has(item),
		obj_exist: 't' in obj
	})

	// 改
	map.set('t',2);
	item.t = 2;
	obj['t'] = 2;

	console.info('map-set-obj-modify',map,set,obj);

	// 删除
	map.delete('t');
	set.delete(item);
	delete obj['t'];

	console.info('map-set-obj-empty',map,set,obj);
}

// 总结
// 优先使用map，对数据的唯一性有要求使用set，尽量放弃使用array和object