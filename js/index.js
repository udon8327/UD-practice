// Mock响应模板
Mock.mock('http://test.com', {
  "user|3": [{   // 随机生成1到3个数组元素
    'name': '@cname',  // 中文名称
    'id|+1': 1,    // 属性值自动加 1，初始值为88
    'birthday': '@date',  // 日期
    'city': '@city(true)',   // 中国城市
  }]
}).setup({ timeout: '100-1000' });

var vm = new Vue({
  el: "#app",
  data: {
    title: Mock.mock('@date("yyyy/MM/dd hh:mm:ss")'),
    users: "",
    members: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ],
    peoples: {
      name: 'Aqours',
      url: 'http://www.runoob.com',
      slogan: '水水'
    },
    loading: false
  },
  mounted: function (){
    this.loading = true;
    axios
      .get("http://test.com")
      .then(function(res){
        console.log(res);
        vm.users = res.data.user;
        vm.loading = false;
        console.log(vm.users);
      })
      .catch(function(err){
        console.log(err);
      })
  }
})