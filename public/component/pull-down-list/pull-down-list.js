
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listArr:{//列表数组
      type:Object,
      value:null,
      obesver:"_listArrChanged"
    },
    isShow:{
      type:Boolean,
      value:false,
      observer:"_showList"
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
    _showList:function(newValue,oldValue){
      console.log("======"+newValue)
      this.setData({
        show: newValue
      })
    }
  },

  ready:function(){
    
  },

  moved:function(){
  },
  
  detached:function(){
  }

})
