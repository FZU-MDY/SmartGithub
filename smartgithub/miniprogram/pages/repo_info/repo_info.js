// pages/repo_info/repo_info.js
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

  },
  NameInput:function(e)
  {
    this.setData({
      Name: e.detail.value
    })
  },
  gorepo:function (e) {
    if(this.data.Name != "MDY-TEAM"){
      wx.showToast({  
        title: '仓库名错误',  
        icon: 'none',  
        duration: 2000  
        }) 
    }
    else{
      wx.navigateTo({
        url: '/pages/repo/repo',
        })
    }
  }
})