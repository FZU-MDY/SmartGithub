Page({
  data:{
    Name: '',
    Email:"",
    settings:true,
    organization:false,
    new_organization:false,
    create_organization:false,
    finish_organization:false,
    top: "41.6%",
    left: "93%", 
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '创建 GitHub 团队',
    })
  },
  
  go_organization: function(){
    this.setData({
      settings:false,
      organization:true,
      top: "39.5%",
      left: "24%",
    })
  },
  go_new_organization: function(){
    this.setData({
      organization:false,
      new_organization:true,
      top: "14.1%",
      left: "89%",
    })
  },
  go_create_organization: function(){
    this.setData({
      new_organization:false,
      create_organization:true,
      top: "18.9%",
      left: "23.9%",
    })
  },
  go_set_organization: function(){
    this.setData({
      create_organization:false,
      set_organization:true,
      top: "80%",
      left: "69%",
    })
  },
  NameInput:function(e)
  {
    this.setData({
      Name: e.detail.value
    })
  },
  EmailInput:function(e)
  {
    this.setData({
      Email: e.detail.value
    })
  },
  go_finish_organization: function(){
    if(this.data.Name != "MDY-TEAM"){
      wx.showToast({  
      title: '组织名称错误',  
      icon: 'error',  
      duration: 2000  
      }) 
    }
    else if(this.data.Email != "cj2480928352@163.com"){
      wx.showToast({  
        title: '邮箱错误',  
        icon: 'error',  
        duration: 2000  
        }) 
    }
    else{
      this.setData({
        set_organization:false,
        finish_organization:true,
        top: "66%",
        left: "80%",
      })
    }
  },
  go_invite: function(){
    wx.showModal({
        title: "温馨提示", // 提示的标题
        content: "创建 GitHub 组织成功！\n接下来，赶紧邀请团队成员加入吧", // 提示的内容
        showCancel: false,
        confirmText: "确定", // 确认按钮的文字，最多4个字符
        confirmColor: "#576B95", // 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
        success: function (res) {
            console.log("接口调用成功的回调函数");
            if (res.confirm) {
                wx.navigateTo({
                    url: '/pages/invite_member/invite_member',
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