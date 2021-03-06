// public/component/arrow-button-down/arrow-button-down.js
Component({

  /*
  组件嵌套（组件间关系）
  */
  relations:{
    "../navigation-bar/navigation-bar":{
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
      value:'green'
    },
    fontSize:{
      type:Number,
      value:100,
    },
    titleContent:{
      type:String,
      value:'',
    },
    bindCustomTap:{
      type:Function,
      value:function(){}
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
    btnTap:function(){
      this.triggerEvent("myEvent",{})
    }
  }
})
