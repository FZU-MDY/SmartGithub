Page({
  data:{
    contentInput : '',
    Name: '',
    Email:"",
    settings:true,
    top: "294rpx",
    left: "85%", 
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'GitHub登录与注册',
    })
  },
  EmailInput:function(e)
  {
    this.setData({
      Email: e.detail.value
    })
  },
  goinfo:function (e) {
    if(this.data.Email != "cj2480928352@163.com"){
      wx.showToast({  
      title: '邮箱错误',  
      icon: 'none',  
      duration: 2000  
      }) 
    }
    else{
      wx.navigateTo({
        url: '/pages/info/info',
        })
    }
  }
})