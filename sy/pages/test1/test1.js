// pages/test1/test1.js
Page({
  data: {
    Instruction1: '',
    Instruction2:'',
    Instruction3:'',
    Instruction4:'',
    ok1:true,
    ok2:false,
    ok3:false,
    ok4:false,
    ok5:false,
    ok6:false,
    ok7:false,
    top: "9.3%",
    left: "49%" 
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '创建版本库',
   })
  },
  Instruction1Input:function(e)
  {
    this.setData({
      Instruction1: e.detail.value
    })
  },
  go_ok2: function(){
    wx.setNavigationBarTitle({
      title: '创建版本库',
   })
  if(this.data.Instruction1 != 'mkdir learngit'){
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
  Instruction2Input:function(e)
  {
    this.setData({
      Instruction2: e.detail.value
    })
  },
  go_ok3: function(){
    wx.setNavigationBarTitle({
      title: '创建版本库',
   })
   if(this.data.Instruction2 != 'cd learngit'){
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
  Instruction3Input:function(e)
  {
    this.setData({
      Instruction3: e.detail.value
    })
  },
  go_ok4: function(){
    wx.setNavigationBarTitle({
      title: '创建版本库',
   })
   if(this.data.Instruction3 != 'pwd'){
    wx.showToast({  
    title: '命令错误',  
    icon: 'error',  
    duration: 2000 ,
    }) 
  }
  else{
    this.setData({
      ok3:false,
      ok4:true,
      top: "36%",
      left: "49%",
    })
  }
  },
  Instruction4Input:function(e)
  {
    this.setData({
      Instruction4: e.detail.value
    })
  },
  go_ok5: function(){
    wx.setNavigationBarTitle({
      title: '创建版本库',
   })
   if(this.data.Instruction4 != 'git init'){
    wx.showToast({  
    title: '命令错误',  
    icon: 'error',  
    duration: 2000 ,
    }) 
  }
  else{
    this.setData({
      ok4:false,
      ok5:true,
      top: "42%",
      left: "48%",
    })
  }
  },
  Instruction6Input:function(e)
  {
    this.setData({
      Instruction6: e.detail.value
    })
  },
  go_ok6: function(){
    wx.setNavigationBarTitle({
      title: '添加文件到版本库',
   })
   this.setData({
    ok5:false,
    ok6:true,
    top: "26%",
    left: "48.5%",
  })
  },
  go_ok7: function(){
    wx.setNavigationBarTitle({
      title: '添加文件到版本库',
   })
   if(this.data.Instruction6 != 'vi readme.txt'){
    wx.showToast({  
    title: '命令错误',  
    icon: 'error',  
    duration: 2000 ,
    }) 
  }
  else{
    this.setData({
      ok6:false,
      ok7:true,
      top: "24%",
      left: "21.5%",
    })
  }
  },
  go_ok8: function(){
    wx.setNavigationBarTitle({
      title: '添加文件到版本库',
   })
   this.setData({
    ok7:false,
    ok8:true,
    top: "8%",
    left: "26%",
  })
  },
  Instruction9Input:function(e)
  {
    this.setData({
      Instruction9: e.detail.value
    })
  },
  go_ok9: function(){
    wx.setNavigationBarTitle({
      title: '添加文件到版本库',
   })
   if(this.data.Instruction6 != 'vi readme.txt'){
    wx.showToast({  
    title: '命令错误',  
    icon: 'error',  
    duration: 2000 ,
    }) 
  }
  else{
    this.setData({
      ok8:false,
      ok9:true,
      top: "34%",
      left: "48.5%",
    })
  }
  },
  Instruction10Input:function(e)
  {
    this.setData({
      Instruction10: e.detail.value
    })
  },
  go_ok10: function(){
    wx.setNavigationBarTitle({
      title: '添加文件到版本库',
   })
   if(this.data.Instruction9 != 'git add readme.txt'){
    wx.showToast({  
    title: '命令错误',  
    icon: 'error',  
    duration: 2000 ,
    }) 
  }
  else{
    this.setData({
      ok9:false,
      ok10:true,
      top: "40%",
      left: "48.5%",
    })
  }
  },
  
})
