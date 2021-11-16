// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Name: '',
    Email:"",
    Pw:"",
    Need:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'GitHub登录与注册',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
 
  EmailInput:function(e)
  {
    this.setData({
      Email: e.detail.value
    })
  },
  PwInput:function(e)
  {
    this.setData({
      Pw: e.detail.value
    })
  },
  NameInput:function(e)
  {
    this.setData({
      Name: e.detail.value
    })
  },
  NeedInput:function(e)
  {
    this.setData({
      Need: e.detail.value
    })
  },

  goverify:function (e) {
    if(this.data.Email != "cj2480928352@163.com"){
      wx.showToast({  
      title: '邮箱错误',  
      icon: 'none',  
      duration: 2000  
      }) 
    }
    else if(this.data.Pw != "user123."){
      wx.showToast({  
        title: '密码错误',  
        icon: 'none',  
        duration: 2000  
        }) 
    }
    else if(this.data.Name != "MDY-TEAM"){
      wx.showToast({  
        title: '用户名错误',  
        icon: 'none',  
        duration: 2000  
        }) 
    }
    else if(this.data.Need != 'y' && this.data.Need != 'n'){
      wx.showToast({  
        title: '请确认需求',  
        icon: 'none',  
        duration: 2000  
        }) 
    }
    else{
      wx.navigateTo({
        url: '/pages/verify/verify',
        })
    }
  }
})