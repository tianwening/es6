// decorator修饰器 1、函数 2、修改行为 3、修改类的行为，扩展类的功能
{
	let readyonly = function(target,name,descriptor){
		descriptor.writable  = false;
		return descriptor;
	}

	class Test{
		@readyonly
		time(){
			return '2018-05-28'
		}
	}

	let test = new Test();

	// test.time = function(){
	// 	console.log('reset time');
	// }
	console.log(test.time());
}

{
	let typename = function(target,name,descriptor){
		target.myName = '小明';
	}

	@typename
	class Test{

	}

	console.log('类修饰器',Test.myName);

	// 第三方库修饰器的js库：core-decorators: npm install core-decorators
}

//简单案例
//日志
{
	let log = (type)=>{
		return function(target,name,descriptor){
			let src_method = descriptor.value;
			descriptor.value = (...arg)=>{
				src_method.apply(target,arg);
				console.info(`log ${type}`);
			}
		}
	}

	class AD {
		@log('show')
		show(){
			console.log('ad is show');
		}
		@log('click')
		click(){
			console.log('ad is clcik');
		}
	}

	let ad = new AD();
	ad.show();
	ad.click();
}

{
	let log = (type)=>{
		return function(target,name,descriptor){
			let src_method = descriptor.value;
			descriptor.value = (...arg)=>{
				src_method.apply(target,arg);
				console.info(`log ${type}`);
			}
		}
	}

	class AD {
		@log('show')
		show(){
			console.log('ad is show');
		}
		@log('click')
		click(){
			console.log('ad is clcik');
		}
	}

	let ad = new AD();
	ad.show();
	ad.click();
}