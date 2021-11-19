var startPoint
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //按钮位置参数
      buttonTop: 0,
      buttonLeft: 0,
      windowHeight: '',
      windowWidth: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'Security页面介绍',
    }),
    this.setData({
      corner_data:3
    })
    // 获取购物车控件适配参数
    var that =this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 屏幕宽度、高度
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
        // 高度,宽度 单位为px
        that.setData({
          windowHeight:  res.windowHeight,
          windowWidth:  res.windowWidth,
          buttonTop:res.windowHeight*0.70,//这里定义按钮的初始位置
          buttonLeft:res.windowWidth*0.70,//这里定义按钮的初始位置
        })
      }
    })
  },
  //可拖动悬浮按钮点击事件
  btn_Suspension_click:function(){
    //这里是点击购物车之后将要执行的操作
    wx.navigateTo({
      url: '/pages/aaaa/aaaa',
      })
  },
  //以下是按钮拖动事件
  buttonStart: function (e) {
    startPoint = e.touches[0]//获取拖动开始点
  },
  buttonMove: function (e) {
    var endPoint = e.touches[e.touches.length - 1]//获取拖动结束点
    //计算在X轴上拖动的距离和在Y轴上拖动的距离
    var translateX = endPoint.clientX - startPoint.clientX
    var translateY = endPoint.clientY - startPoint.clientY
    startPoint = endPoint//重置开始位置
    var buttonTop = this.data.buttonTop + translateY
    var buttonLeft = this.data.buttonLeft + translateX
    //判断是移动否超出屏幕
    if (buttonLeft+50 >= this.data.windowWidth){
      buttonLeft = this.data.windowWidth-50;
    }
    if (buttonLeft<=0){
      buttonLeft=0;
    }
    if (buttonTop<=0){
      buttonTop=0
    }
    if (buttonTop + 50 >= this.data.windowHeight){
      buttonTop = this.data.windowHeight-50;
    }
    this.setData({
      buttonTop: buttonTop,
      buttonLeft: buttonLeft
    })
  },
  buttonEnd: function (e) {
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
  goissue:function (e) {
      wx.navigateTo({
        url: '/pages/intro_issue/intro_issue',
        })
  },
  gopr:function (e) {
    wx.navigateTo({
      url: '/pages/intro_pr/intro_pr',
      })
  },
  gopr:function (e) {
    wx.navigateTo({
      url: '/pages/intro_pr/intro_pr',
      })
  },
  goaction:function (e) {
    wx.navigateTo({
      url: '/pages/intro_action/intro_action',
      })
  },
  goproject:function (e) {
    wx.navigateTo({
      url: '/pages/intro_project/intro_project',
      })
  },
  gowiki:function (e) {
    wx.navigateTo({
      url: '/pages/intro_wiki/intro_wiki',
      })
  },
  gosecurity:function (e) {
    wx.navigateTo({
      url: '/pages/intro_security/intro_security',
      })
  },
  goinsight:function (e) {
    wx.navigateTo({
      url: '/pages/intro_insight/intro_insight',
      })
  },
  gosetting:function (e) {
    wx.navigateTo({
      url: '/pages/intro_setting/intro_setting',
      })
  },
  gocode:function (e) {
    wx.navigateTo({
      url: '/pages/intro_code/intro_code',
      })
  }
})