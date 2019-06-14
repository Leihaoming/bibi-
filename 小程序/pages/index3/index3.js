var app = getApp();
var order = ['green', 'red', 'blue', 'yellow', 'green'];
Page({
  data: {
    scrollTop: 0,
    toView: "green"
  },

  onLoad: function () {
  },

  lower: function (e) {
    console.log(e)
  },

  clickAdd: function () {
    this.setData({
      scrollTop: this.data.scrollTop + 20
    });
    console.log("this.data.scrollTop:" + this.data.scrollTop);
  },

  clickTo: function (e) {
    for (var i = 0; i < order.length; i++) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },

})
