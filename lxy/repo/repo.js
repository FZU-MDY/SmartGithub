// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal:true,
  },
  no: function(){
    wx.navigateTo({
      url: '/pages/aaaa/aaaa',
    })
  },
  again: function(){
    wx.navigateTo({
      url: '/pages/create_repo/create_repo',
    })
  },
  confirm: function(){
    wx.navigateTo({
      url: '/pages/intro_code/intro_code',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '创建仓库及页面介绍',
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

  }
})