
let app = getApp();

Component({

/**
 * 关联向下箭头组件
*/
  relations:{
  '../arrow-button-down/arrow-button-down':{
    type:'child',
    linked: function (target){
     debugger
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
    leftItemHidden:{
      type:Boolean,
      value:false,
    },
    titleColor:{
      type:String,
      value:'black'
    },
    titleText:{
      type:String,
      value:'',
      observer:'_titleTextChanged'
    },
    /*导航栏样式:default(默认标题样式),arrow-button-down:下拉框样式),tink*/
    barStyle: {
      type: String,
      value: 'default'
    },
    titleFont:{
      type:Number,
      value:30,
      observer: '_titleFontChanged'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIpx: app.globalData.isIpx, //适配iPhonex
    leftItemHidden:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    leftBack:function(){
      wx.showToast({
        title: '返回',
      })
    },
  },

  /**
   * 生命周期函数
   */
  //不能使用setData
  created: function(){

  },

  ready:function(){
    //获取定位坐标
    wx.getLocation({
      type:"wgs84",
      success: function(res) {
        

      },
      fail:function(error){

      }
    })    

    this.setData({

    })
  }



})
