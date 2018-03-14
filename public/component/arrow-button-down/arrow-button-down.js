// public/component/arrow-button-down/arrow-button-down.js
Component({

  /*
  组件嵌套（组件间关系）
  */
  relations:{
    '../navigation-bar/navigation-bar':{
      type:'parent',
      linked: function (target) { //插入到/navigation-bar中时被执行
        console.log(target)
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
      value:'green'
    },
    fontSize:{
      type:Number,
      value:100
    },
    titleContent:{
      type:String,
      value:'下拉选择按钮',
      observer:'_changeTitleContent'
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
    // _changeTitleContent:function(newValue,oldValue){
    //   debugger
    //   this.setData({
    //     titleContent:newValue
    //   })
    // },
    buttonTap:function(){
      wx.showToast({
        title: '点击按钮，按钮内部触发',
      })
    }
  }
})
