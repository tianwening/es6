//类
{
	// 基本定义和生成实例
	class Person {
		constructor(name="慕课网"){
			this.name = name;
		}
	}

	let person = new Person('v');
	console.log('构造函数和实例',person);
}

{
	//继承
	class Parent {
		constructor(name="慕课网"){
			this.name = name;
		}
	}

	class Child extends Parent {

	}

	console.log('继承',new Child());
}

{
	//继承传递参数
	class Parent {
		constructor(name="慕课网"){
			this.name = name;
		}
	}

	class Child extends Parent {
		constructor(name='child'){
			super(name);
			this.type = 'child';
		}
	}

	console.log('继承',new Child('hello'));
}
// 类里面的setter和getter
{
	class Parent {
		constructor(name="慕课网"){
			this.name = name;
		}

		get longName(){
			return 'mk'+this.name;
		}

		set longName(value){
			this.name = value;
		}
	}

	let v = new Parent();
	console.log('getter',v.longName);
	v.longName = 'hello';
	console.log('getter',v.longName);
}

{
	class Parent {
		constructor(name="慕课网"){
			this.name = name;
		}
		//静态方法
		static tell(){
			console.log('tell');
		}
	}

	Parent.tell();
}

{
	class Parent {
		constructor(name="慕课网"){
			this.name = name;
		}
		//静态方法
		static tell(){
			console.log('tell');
		}

	}
	// 静态属性
	Parent.type = 'hello';
	console.log('类的静态属性',Parent.type);
}