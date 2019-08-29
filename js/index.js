axios
	.get('https://www.easy-mock.com/mock/5d39b2757e156329c205db2d/')
	.then(function (res) {
		resArr = res.data.data;
		resArr.forEach(function(item,index){
			$('tbody').append(`<tr><td>${index+1<10?"0"+(index+1):index+1}</td><td>${item[0]}</td><td>${item[1]}</td><td>${item[2]}</td></tr>`);
		});
	})
	.catch(function (err) {
		alert('取得資料失敗');
	})