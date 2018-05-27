{
	console.log('a',`\u0061`);
	console.log('s',`\u20bb7`);

	console.log('s',`\u{20bb7}`);
}

{
	let s = '𠮷';
	console.log('length',s.length);
	console.log('0',s.charAt(0));
	console.log('1',s.charAt(1));
	console.log('0',s.charCodeAt(0));
	console.log('1',s.charCodeAt(1));

	 let s1 = '𠮷a';
	 console.log('length',s1.length);
	 console.log('0',s1.codePointAt(0).toString(16));
	 console.log('1',s1.codePointAt(1));
	 console.log('2',s1.codePointAt(2).toString(16));
}

{
	console.log(String.fromCharCode('0x20bb7'));
	console.log(String.fromCodePoint('0x20bb7'));
}

{
	let s = '\u{20bb7}abc';
	for(let i=0;i<s.length;i++){
		console.log(s[i]);
	}
	for(let code of s){
		console.log(code);
	}
}

{
	let str = 'string';

	console.log('includes',str.includes('s'));
	console.log('start',str.startsWith('str'));
	console.log('end',str.endsWith('ing'));
}

{
	var str = 'abc';
	console.log(str.repeat(2));
}
//字符串模板
{
	let name = 'List';
	let info = "hello world";
	let m = `i am ${name}.${info}`;
	console.log(m);
}

//es7新增的
{
	//补白
	console.log('1'.padStart(2,'0'));
	console.log('1'.padEnd(2,'0'));
}

//标签模板
{
	let user = {
		name: "List",
		info: "hello world"
	}
	console.log(abc`i am ${user.name},${user.info}`);
	function abc(s,v1,v2){
		console.log(s,v1,v2);
		return s+v1+v2;
	}

}

{
	console.log(String.raw`Hi\n${1+2}`);
	console.log((`Hi\n${1+2}`));
}
