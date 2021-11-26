Page({
  data:{
      fork:true,
      name:false,
      finish_fork:false,
      Fetch_upstream:false,
      Fetch_merge:false,
      finish_fetch:false,
      Pull_request:false,
      New_pull_request:false,
      Create_pull_request:false,
      Create_pull_request1:false,
      Finish_pull_request:false,
      showModal:false,
      top: "12.1%",
      left: "93%", 
  },
  onLoad: function () {
      wx.setNavigationBarTitle({
        title: 'Fork 项目到个人仓库',
      })
  },
    
  go_name: function(){
    this.setData({
      fork:false,
      name:true,
      top: "29%",
      left: "45.2%",
    })
  },
  go_finish_fork: function(){
    this.setData({
      name:false,
      finish_fork:true,
      top: "50%",
      left: "50%",
    })
  },
  go_upstream: function(){
    let that = this;
    wx.showModal({
      title: "温馨提示", // 提示的标题
      content: "恭喜，你已成功将团队项目 fork 到个人仓库。接下来，赶紧开始你的项目编码之旅吧！", // 提示的内容
      showCancel: false,
      confirmText: "确定", // 确认按钮的文字，最多4个字符
      confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
      success: function (res) {
          console.log("接口调用成功的回调函数");
          if (res.confirm) {
            wx.showModal({
              title: "温馨提示", // 提示的标题
              content: "记得要随时和团队项目保持一致（特别是在请求合并到团队项目之前）", // 提示的内容
              showCancel: false,
              confirmText: "确定", // 确认按钮的文字，最多4个字符
              confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
              success: function (res) {
                console.log("接口调用成功的回调函数");
                if (res.confirm) {
                  that.setData({
                    finish_fork:false,
                    Fetch_upstream:true,
                    top: "36%",
                    left: "68.7%",
                  })
                  wx.setNavigationBarTitle({
                    title: '保持与团队项目同步',
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
  go_fetch_merge: function(){
    this.setData({
      Fetch_upstream:false,
      Fetch_merge:true,
      top: "57.2%",
      left: "65.7%",
    })
  },
  go_finish_fetch: function(){
    this.setData({
      Fetch_merge:false,
      finish_fetch:true,
      top: "50%",
      left: "50%",
    })
  },
  go_pull_request: function(){
    let that = this;
    wx.showModal({
      title: "温馨提示", // 提示的标题
      content: "恭喜，你已经成功获取最新版团队项目。", // 提示的内容
      showCancel: false,
      confirmText: "确定", // 确认按钮的文字，最多4个字符
      confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
      success: function (res) {
          console.log("接口调用成功的回调函数");
          if (res.confirm) {
            wx.showModal({
              title: "温馨提示", // 提示的标题
              content: "当你完成对项目的修改，就可以请求合并到团队项目！", // 提示的内容
              showCancel: false,
              confirmText: "确定", // 确认按钮的文字，最多4个字符
              confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
              success: function (res) {
                console.log("接口调用成功的回调函数");
                if (res.confirm) {
                  that.setData({
                    finish_fetch:false,
                    Pull_request:true,
                    top: "17.6%",
                    left: "18.7%",
                  })
                  wx.setNavigationBarTitle({
                    title: '请求合并项目',
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
  go_new_pull_request: function(){
    this.setData({
      Pull_request:false,
      New_pull_request:true,
      top: "36.3%",
      left: "94.7%",
    })
  },
  go_create_pull_request: function(){
    this.setData({
      New_pull_request:false,
      Create_pull_request:true,
      top: "42.3%",
      left: "93.9%",
    })
  },
  go_create_pull_request1: function(){
    this.setData({
      Create_pull_request:false,
      Create_pull_request1:true,
      top: "55.5%",
      left: "67.9%",
    })
  },
  go_finish_pull_request: function(){
    this.setData({
      Create_pull_request1:false,
      Finish_pull_request:true,
      top: "30%",
      left: "50%",
    })
  },
  go_finish: function(){
    let that = this;
    wx.showModal({
      title: "温馨提示", // 提示的标题
      content: "恭喜，你已经成功发送合并团队项目请求。接下来，等待队长的审核就行啦！", // 提示的内容
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
    this.setData({
      Finish_pull_request:false,
      showModal:false,
      fork:true,
      top: "12.1%",
      left: "93%", 
    })
  },
  confirm: function(){
    wx.navigateTo({
      url: '/pages/teachpage/teachpage',
    })
  },
})