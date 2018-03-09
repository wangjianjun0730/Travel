
Component({

/**
 * 关联向下箭头组件
*/
  relations:{
  '../arrow-button-down/arrow-button-down':{
    type:'child',
    linked: function (target){
      // wx.showToast({
      //   title: '插入了按钮子组件',
      // })
    },
    linkChanged: function (target){
      // wx.showToast({
      //   title: '按钮组件插入了',
      // })
    },
    unlinked: function (target){
      // wx.showToast({
      //   title: '按钮组件被移除',
      // })
    }
  }
},

  /**
   * 组件的属性列表
   */
  properties: {
   
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    
  },

  /**
   * 生命周期函数
   */
  //不能使用setData
  created: function(){

  }





})
