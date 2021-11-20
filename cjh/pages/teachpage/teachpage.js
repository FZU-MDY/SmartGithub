// pages/teachpage/teachpage.js
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
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '用户教程',
    })
  },
  go2teach1: function(){
    wx.navigateTo({
 
      url: '/pages/teach1/teach1',
 
      })
  },
  go2teach2: function(){
    wx.navigateTo({
 
      url: '/pages/teach2/teach2',
 
      })
  },
  go2teach3: function(){
    wx.navigateTo({
 
      url: '/pages/teach3/teach3',
 
      })
  },
  go2teach4: function(){
    wx.navigateTo({
 
      url: '/pages/teach4/teach4',
 
      })
  },
  go2teach5: function(){
    wx.navigateTo({
 
      url: '/pages/teach5/teach5',
 
      })
  },
  go2teach6: function(){
    wx.navigateTo({
 
      url: '/pages/teach6/teach6',
 
      })
  },
  go2teach7: function(){
    wx.navigateTo({
 
      url: '/pages/teach7/teach7',
 
      })
  },
  go2teach8: function(){
    wx.navigateTo({
 
      url: '/pages/teach8/teach8',
 
      })
  }
})