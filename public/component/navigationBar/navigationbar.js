
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerText:{
      type:'String',
      value:'自定义导航栏',
      observer: '_propertyChanged',
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
    _propertyChanged:function(newValue,oldValue){

    }
  },

  /**
   * 生命周期函数
   */
  //
  created: function(){

  }



})
