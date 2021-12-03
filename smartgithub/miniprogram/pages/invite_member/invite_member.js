Page({
  data:{
    Member:'',
    your_organizations:true,
    MDY_TEAM:false,
    Invite_someone:false,
    Invite:false,
    Send_invitation:false,
    Settings:false,
    Member_privileges:false,
    Sure_read:false,
    top: "22.2%",
    left: "92.5%", 
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '邀请成员加入',
    })
  },
  
  go_MDY_TEAM: function(){
    this.setData({
      your_organizations:false,
      MDY_TEAM:true,
      top: "18.3%",
      left: "37.5%",
    })
  },
  go_invite_someone: function(){
    this.setData({
      MDY_TEAM:false,
      Invite_someone:true,
      top: "43.5%",
      left: "82%",
    })
  },
  go_invite: function(){
    this.setData({
      Invite_someone:false,
      Invite:true,
      top: "34.9%",
      left: "69.8%",
    })
  },
  MemberInput:function(e)
  {
    this.setData({
      Member: e.detail.value
    })
  },
  go_send_invitation: function(){
    if(this.data.Member != "maple-leaf10"){
      wx.showToast({  
      title: '成员名称错误',  
      icon: 'error',  
      duration: 2000  
      }) 
    }
    else{
      this.setData({
        Invite:false,
        Send_invitation:true,
        top: "76.2%",
        left: "54%",
      })
    }
  },
  go_read: function(){
    let that = this;
    wx.showModal({
        title: "温馨提示", // 提示的标题
        content: "邀请函已发送！请静待队友的回复吧", // 提示的内容
        showCancel: false,
        confirmText: "确定", // 确认按钮的文字，最多4个字符
        confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
        success: function (res) {
            console.log("接口调用成功的回调函数");
            if (res.confirm) {
              that.setData({
                Send_invitation: false,
                Settings: true,
                top: "25.3%",
                left: "57.6%",
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
  go_member_privileges: function(){
    this.setData({
      Settings: false,
      Member_privileges:true,
      top: "16.7%",
      left: "25%",
    })
  },
  go_sure_read: function(){
    this.setData({
      Member_privileges:false,
      Sure_read:true,
      top: "17%",
      left: "35%",
    })
  },
  go_dev: function(){
    wx.showModal({
        title: "温馨提示", // 提示的标题
        content: "截至此，你已经学会了如何创建 GitHub 团队。记得为团体创建项目仓库并创建开发分支哦!", // 提示的内容
        showCancel: false,
        confirmText: "确定", // 确认按钮的文字，最多4个字符
        confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
        success: function (res) {
            console.log("接口调用成功的回调函数");
            if (res.confirm) {
              wx.showModal({
                title: "温馨提示", // 提示的标题
                content: "接下来，和你的团队一起开始项目开发吧！", // 提示的内容
                showCancel: false,
                confirmText: "确定", // 确认按钮的文字，最多4个字符
                confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
                success: function (res) {
                  console.log("接口调用成功的回调函数");
                  if (res.confirm) {
                    wx.showModal({
                      title: "温馨提示", // 提示的标题
                      content: "你的队友很积极。你收到了队友的合并团队项目请求，赶快去处理吧！", // 提示的内容
                      showCancel: false,
                      confirmText: "确定", // 确认按钮的文字，最多4个字符
                      confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
                      success: function (res) {
                        console.log("接口调用成功的回调函数");
                        if (res.confirm) {
                          wx.navigateTo({
                            url: '/pages/review_approve_request/review_approve_request',
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
})