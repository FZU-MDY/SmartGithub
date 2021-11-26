Page({

  data: {
  tisshow:true,
  tshow:false,//控制下拉列表的显示隐藏，false隐藏、true显示
  tselectData:['daily','weekly','monthly'],//下拉列表的数据
  tindex:0,//选择的下拉列表下标
  lisshow:true,
  lshow:false,//控制下拉列表的显示隐藏，false隐藏、true显示
  lselectData:['Java','JavaScript','HTML','CSS','Shell','Python','Kotlin','TypeScript','C++','C'],//下拉列表的数据
  lindex:0,//选择的下拉列表下标
  },
  // 点击下拉显示框
  tselectTap(){
    this.setData({
     tshow: !this.data.tshow
    });
    },
    // 点击下拉列表
    toptionTap(e){
    let Index=e.currentTarget.dataset.tindex;//获取点击的下拉列表的下标
    this.setData({
     tindex:Index,
     tshow:!this.data.tshow,
     tisshow:false
    });
    },

  lselectTap(){
  this.setData({
   lshow: !this.data.lshow
  });
  },
  // 点击下拉列表
  loptionTap(e){
  let Index=e.currentTarget.dataset.lindex;//获取点击的下拉列表的下标
  this.setData({
   lindex:Index,
   lshow:!this.data.lshow,
   lisshow:false
  });
  },
  onLoad: function (options) {
  
  }
 
 })