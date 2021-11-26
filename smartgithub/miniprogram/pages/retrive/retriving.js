// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    showModal:false,
    isNext3:false,
    isNext33:false,
    isNext2:false,
    isNext22:false,
    isNext1:false,
    isNext11:false,
    control_remote:false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getName:function(e){
    this.setData({
      value_remote:e.detail.value
    })
    if(this.data.value_remote=="cat coding.txt")
    {
      this.setData({
        control_remote:true,
        isNext1:true
      })
    }
    else{
      this.setData({
        control_remote:false
      })
    }
  },
  getName1:function(e){
    this.setData({
      value_remote:e.detail.value
    })
    if(this.data.value_remote=="git reflog")
    {
      this.setData({
        isNext11:true,
        isNext2:true
      })
    }
    else{
      this.setData({
        isNext11:false
      })
    }
  },
  getName2:function(e){
    this.setData({
      value_remote:e.detail.value
    })
    if(this.data.value_remote=="git reset --hard 229384a")
    {
      this.setData({
        isNext22:true,
        isNext3:true,
      })
    }
    else{
      this.setData({
        isNext22:false
      })
    }
  },
  getName3:function(e){
    this.setData({
      value_remote:e.detail.value
    })
    if(this.data.value_remote=="cat coding.txt")
    {
      this.setData({
        isNext33:true
      })
    }
    else{
      this.setData({
        isNext33:false
      })
    }
  },
  jmp:function(){
    this.setData()
    {
      this.showModal=true;
    }
  },
  fin:function(){
    this.setData({
      showModal:true
    })
  },
  cancel: function(){
   wx.navigateTo({
     url: '/pages/command/index',
   })
  },
  confirm: function(){
    wx.navigateTo({
      url: '/pages/teachpage/teachpage',
    })
  }

})
 