
let app = getApp();

Component({

/**
 * 关联向下箭头组件
*/
  relations:{
  '../arrow-button-down/arrow-button-down':{
    type:'child',
    linked: function (target){
    },
    linkChanged: function (target){
    },
    unlinked: function (target){
    }
  }
},

  /**
   * 组件的属性列表
   */
  properties: {
    titleName:{
      type:String,
      value:'',
      observer:null
    },
    leftItemHidden:{
      type:Boolean,
      value:false,
      obersver:"_leftItemHiddenChanged"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIpx: app.globalData.isIpx, //适配iPhonex
    leftItemHidden:false,
    customItem:null  //自定义控件
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //显示或隐藏左边导航栏返回按钮（默认显示）
    _leftItemHiddenChanged:function(newValue,oldValue){
      this.setData({
        leftItemHidden: newValue
      })
    },
    leftBack:function(){
      wx.showToast({
        title: '返回',
      })
    }
  },

  /**
   * 生命周期函数
   */
  //不能使用setData
  created: function(){

  }

})
