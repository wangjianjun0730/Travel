// public/component/arrow-button-down/arrow-button-down.js
Component({
  /**
   * 关联组件
  */
  relations:{
    '../navigation-bar/navigation-bar':{
      type:'parent',
      linked: function (target) {
        wx.showToast({
          title: '插入子组件',
        })
      },
      linkChanged: function (target) {
        wx.showToast({
          title: '按钮组件变化',
        })
      },
      unlinked: function (target) {
        wx.showToast({
          title: '按钮组件被移除',
        })
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
    buttonTap:function(){
      wx.showToast({
        title: '点击按钮，按钮内部触发',
      })
    }
  }
})
