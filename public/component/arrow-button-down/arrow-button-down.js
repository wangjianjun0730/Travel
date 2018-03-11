// public/component/arrow-button-down/arrow-button-down.js
Component({

  /*
  组件嵌套（组件间关系）
  */
  relations:{
    '../navigation-bar/navigation-bar':{
      type:'parent',
      linked: function (target) { //插入到/navigation-bar中时被执行
      },
      linkChanged:function(target){  
      },
      unlinked:function(target){
      }
    }
  },



  /**
   * 组件的属性列表
   */
  properties: {
    titleColor:{
      type:String,
      value:'white'
    },
    fontSize:{
      type:Number,
      value:15
    }
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

    buttonTap:function(){
      wx.showToast({
        title: '点击按钮，按钮内部触发',
      })
    }
  }
})
