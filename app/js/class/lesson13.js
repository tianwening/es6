// Promise对象
{
	// 没有Promise对象之前的一些操作
	let ajax= function(callback){
		console.log('执行');
		setTimeout(function(){
			callback&&callback()
		},1000);
	}

	ajax(function(){
		console.log('timeout1');
	})
}

{
	let ajax = function(){
		console.log('执行2');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve();
			},1000)
		})
	}

	ajax().then(function(){
		console.log('promise','timeout2');
	})
}

{
	let ajax = function(){
		console.log('执行2');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve();
			},1000)
		})
	}

	ajax()
		.then(function(){
			return new Promise(function(resolve,reject){
				setTimeout(function(){
					resolve();
				},2000)
			})
		})
		.then(function(){
			console.log('timeout3');
		})
}

{
	let ajax = function(num){
		return new Promise(function(resolve,reject){
			if(num>5){
				resolve();
			}else{
				throw Error('出错了');
			}
		})
	}

	ajax(6).then(function(){
		console.log('log',6);
	}).catch(function(err){
		console.log('catch',err);
	})

	ajax(3).then(function(){
		console.log('log',3);
	}).catch(function(err){
		console.log('catch',err);
	})
}

// Promise对象的高级使用
// all使用
{
	// 所有图片加载完成再加载到页面
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img = document.createElement('img');
			img.src = src;
			img.onload = function(){
				resolve(img);
			}
			img.onerror = function(err){
				reject(err);
			}
		})
	}

	function showImgs(imgs){
		imgs.forEach(function(img){
			document.body.appendChild(img);
		})
	}

	Promise.all([
		loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527449236483&di=000e5a357739e588811184154e109d4f&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201603%2F21%2F20160321233248_wmHKU.thumb.700_0.jpeg'),
		loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527449298290&di=fb362f7b92ed1dd55c3e96edd9b1ed3a&imgtype=0&src=http%3A%2F%2Fimages.zb580.tv%2Fupload%2F201707%2F28%2F201707281413204427.jpg'),
		loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527449358489&di=1083cb0d4f00ee296403cee28aa37ce9&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20170105%2F4332921483585630.jpg')
	]).then(showImgs)
}

// race使用
{
	// 当有一个图片加载完成就加载到页面
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img = document.createElement('img');
			img.src = src;
			img.onload = function(){
				resolve(img);
			}
			img.onerror = function(err){
				reject(err);
			}
		})
	}

	function showImgs(img){
		let p = document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p);
	}

	Promise.race([
		loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527449236483&di=000e5a357739e588811184154e109d4f&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201603%2F21%2F20160321233248_wmHKU.thumb.700_0.jpeg'),
		loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527449298290&di=fb362f7b92ed1dd55c3e96edd9b1ed3a&imgtype=0&src=http%3A%2F%2Fimages.zb580.tv%2Fupload%2F201707%2F28%2F201707281413204427.jpg'),
		loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527449358489&di=1083cb0d4f00ee296403cee28aa37ce9&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20170105%2F4332921483585630.jpg')
	]).then(showImgs)
}