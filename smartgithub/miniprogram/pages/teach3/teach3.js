// pages/test/test.js
Page({
  data: {
    Username: '',
    Useremail:'',
    Userkey:'',
    ok1:true,
    ok2:false,
    ok3:false,
    elsepage:false,
    SSHkey:false,
    newSSHkey:false,
    addnewSSHkey:false,
    showModal:false,
    top: "9.3%",
    left: "49%",  
  },
   onLoad: function () {
     wx.setNavigationBarTitle({
       title: 'git-设置用户名',
    })
   },
  go_ok2: function(){
    wx.setNavigationBarTitle({
      title: 'git-设置邮箱',
   })
  if(this.data.Username != 'git config --global user.name "Your Name"'){
    wx.showToast({  
    title: '命令错误',  
    icon: 'error',  
    duration: 2000 ,
    }) 
  }
  else{
    this.setData({
      ok1:false,
      ok2:true,
      top: "16.7%",
      left: "49%",
    })
  }
  },
  go_ok3: function(){
    wx.setNavigationBarTitle({
      title: '创建SSH Key',
   })
   if(this.data.Useremail != 'git config --global user.email "email@example.com"'){
    wx.showToast({  
    title: '命令错误',  
    icon: 'error',  
    duration: 2000 ,
    }) 
  }
  else{
    this.setData({
      ok2:false,
      ok3:true,
      top: "23.5%",
      left: "49%",
    })
  }
  },
  go_elsepage: function(){
    wx.setNavigationBarTitle({
      title: 'Add SSH Key',
   })
   if(this.data.Userkey != 'ssh-keygen -t rsa -C "youremail@example.com"'){
    wx.showToast({  
    title: '命令错误',  
    icon: 'error',  
    duration: 2000 ,
    }) 
  }
  else{
    this.setData({
      ok3:false,
      elsepage:true,
      top: "38.2%",
      left: "16.5%",
    })
  }
  },
  go_SSHkey: function(){
    this.setData({
      elsepage:false,
      SSHkey:true,
      top: "15%",
      left: "82%",
    })
  },
  go_newSSHkey: function(){
    this.setData({
      SSHkey:false,
      newSSHkey:true,
      top: "45%",
      left: "33%",
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
      Userkey: e.detail.value
    })
  },
   go_addnewSSHkey: function(){
     this.setData({
       showModal:true,
      // top: "472px",
      // left: "185px",
     })
   },
  
  cancel: function(){
    this.setData({
    newSSHkey:false,
    showModal:false,
    ok1:true,
    top: "9.3%",
    left: "49%", 
   })
  },
  confirm: function(){
    wx.navigateTo({
    url: '/pages/teachpage/teachpage',
   })
  },
  }
)