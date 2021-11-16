// pages/test/test.js
Page({
  data: {
    Name: '',
    Email:"",
    ok1:true,
    ok2:false,
    top: "294rpx",
    left: "699rpx",  
  },
  // onLoad: function () {
  //   wx.setNavigationBarTitle({
  //     title: 'git-设置用户名、邮箱',
  //   })
  // },
  go_ok2: function(){
    this.setData({
      ok1:false,
      ok2:true,
      top: "472px",
      left: "185px",
    })
  },
  go_ok3: function(){
    this.setData({
      ok2:false,
      ok3:true,
      top: "472px",
      left: "185px",
    })
  },
  go_elsepage: function(){
    wx.setNavigationBarTitle({
      title: '创建 GitHub 团队',
    })
    this.setData({
      ok3:false,
      elsepage:true,
      top: "472px",
      left: "185px",
    })
  },
  go_SSHkey: function(){
    this.setData({
      elsepage:false,
      SSHkey:true,
      top: "472px",
      left: "185px",
    })
  },
  go_newSSHkey: function(){
    this.setData({
      SSHkey:false,
      newSSHkey:true,
      top: "472px",
      left: "185px",
    })
  },
  UsernameInput:function(e)
  {
    this.setData({
      Username: e.detail.value
    })
  },
  UseremailInput:function(e)
  {
    this.setData({
      Useremail: e.detail.value
    })
  },
  UserkeyInput:function(e)
  {
    this.setData({
      Userekey: e.detail.value
    })
  },
  UsertitleInput:function(e)
  {
    this.setData({
      Usertitle: e.detail.value
    })
  },
  UsernewkeyInput:function(e)
  {
    this.setData({
      Usernewkey: e.detail.value
    })
  },
  // go_addnweSSHkey: function(){
  //   this.setData({
  //     newSSHkey:false,
  //     addnewSSHkey:true,
  //     top: "472px",
  //     left: "185px",
  //   })
  // }
  }
)