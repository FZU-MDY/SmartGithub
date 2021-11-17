Page({
  data:{
      Pull_requests:true,
      Update:false,
      Files_changed:false,
      Conversation:false,
      Merge_pull_request:false,
      Confirm_merge:false,
      finish_merge:false,
      showModal:false,
      top: "20.2%",
      left: "26.4%", 
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '处理合并项目请求',
    })
  },
      
  go_update: function(){
    this.setData({
      Pull_requests:false,
      Update:true,
      top: "64.3%",
      left: "18.5%",
    })
  },
  go_files_changed: function(){
    this.setData({
      Update:false,
      Files_changed:true,
      top: "24.4%",
      left: "47.8%",
    })
  },
  go_conversation: function(){
    this.setData({
      Files_changed:false,
      Conversation:true,
      top: "46.8%",
      left: "11.5%",
    })
  },
  go_merge_pull_request: function(){
    this.setData({
      Conversation:false,
      Merge_pull_request:true,
      top: "56.8%",
      left: "21.5%",
    })
  },
  go_confirm_merge: function(){
    this.setData({
      Merge_pull_request:false,
      Confirm_merge:true,
      top: "54.8%",
      left: "18.5%",
    })
  },
  go_finish_merge: function(){
    this.setData({
      Confirm_merge:false,
      finish_merge:true,
      top: "30%",
      left: "50%",
    })
  },
  go_finish: function(){
    let that = this;
    wx.showModal({
      title: "温馨提示", // 提示的标题
      content: "恭喜你坚持到这里。你已经获得队长资格证，赶快去 GitHub 上创建你的团队吧!", // 提示的内容
      showCancel: false,
      confirmText: "确定", // 确认按钮的文字，最多4个字符
      confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
      success: function (res) {
        console.log("接口调用成功的回调函数");
        if (res.confirm) {
          that.setData({
            showModal:true,
          })
        } 
      },
      fail: function () {
          /*接口调用失败的回调函数*/
      },
      complete: function () {
          /*接口调用结束的回调函数（调用成功、失败都会执行）*/
      }
    })
  },
  cancel: function(){
    wx.navigateTo({
      url: '/pages/create_organization/create_organization',
    })
  },
  confirm: function(){
    wx.navigateTo({
      url: '/pages/invite_member/invite_member',
    })
  },
})