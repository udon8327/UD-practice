var vm = new Vue({
  el: "#app",
  data: {
    company: "台灣鐵路局",
    ticket: {
      date: "2018.05.02-05.04",
      from: "台北",
      to: "高雄",
      direction: "south",
      other: "<b>限當日當次車有效</b>",
      price: 250,
      discount: 0.5,
      link: "http://komica.org"
    }
  }
})