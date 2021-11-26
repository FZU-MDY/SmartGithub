// pages/firstpage/firstpage.js
Page({

  data: {
    tisshow:true,
  tshow:false,//控制下拉列表的显示隐藏，false隐藏、true显示
  tselectData:['daily','weekly','monthly'],//下拉列表的数据
  tindex:0,//选择的下拉列表下标
  lisshow:true,
  lshow:false,//控制下拉列表的显示隐藏，false隐藏、true显示
  lselectData:['Java','JavaScript','HTML','CSS','Shell','Python','Kotlin','TypeScript','C++','C'],//下拉列表的数据
  lindex:0,//选择的下拉列表下标
    list:'',
    lang:'',
    since:'',
    toastText:'',
    flag:'1'
  },

  houduan: function () {
    var that = this;
    that.setData({
      flag:null
    })
    wx.request({
    url: "https://trendings.herokuapp.com/repo?lang=java&since=weekly",
    method: 'get',
    header: {
    'content-type': 'application/json' // 默认值
    },
    success: function (res) {
    console.log(res.data)//打印到控制台
    
    if (res.data == null) {
    var toastText = '数据获取失败';
    wx.showToast({
    title: toastText,
    icon: '',
    duration: 2000
    });
    } else {
    that.setData({
      list:res.data.items
    })
    }
    }
    })
  },
  onShareAppMessage: function () {

  },
  go2teach: function(){
    wx.navigateTo({
 
      url: '/pages/teachpage/teachpage',
 
      })
  },

  go2favor: function(){
    wx.navigateTo({
 
      url: '/pages/favorpage/favorpage',
 
      })
  },
  go2search1: function(){
    wx.navigateTo({
 
      url: '/pages/search1/search1',
 
      })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'Smart GitHub',
    })
  },
  go2repo1: function(){
    wx.navigateTo({
 
      url: '/pages/i1/i1',
 
      })
  },
  tselectTap(){
    this.setData({
     tshow: !this.data.tshow
    });
    },
    // 点击下拉列表
    toptionTap(e){
    let Index=e.currentTarget.dataset.tindex;//获取点击的下拉列表的下标
    this.setData({
     tindex:Index,
     tshow:!this.data.tshow,
     tisshow:false
    });
    },

  lselectTap(){
  this.setData({
   lshow: !this.data.lshow
  });
  },
  // 点击下拉列表
  loptionTap(e){
  let Index=e.currentTarget.dataset.lindex;//获取点击的下拉列表的下标
  this.setData({
   lindex:Index,
   lshow:!this.data.lshow,
   lisshow:false
  });
  },


})