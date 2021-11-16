// pages/verify/verify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  useremailInput:function(e){//获取input里的value值
    this.setData({
      contentInput: e.detail.value
    })
    console.log(this.data.contentInput)
  },
  gohomepage:function(){
    let content = this.data.contentInput
    console.log(content)
    
    if (content != '6666') {
      wx.showToast({
        title: '验证码错误错误',
        icon: 'none',
        duration: 1500
      })
      return false
    }
    else{
      wx.navigateTo({
      url: '/pages/homepage/homepage',
      })
    }
    
  }
})