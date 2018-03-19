
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listArr:{//列表数组
      type:Object,
      value:null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showAniamtion:{},
    hideAnimation:{},
    listAnimation:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {

    _showList:function(){
      //遮罩显示动画
      var animation_show = wx.createAnimation({
        duration: 300
      })
      animation_show.opacity(1).step();
      this.setData({
        showAnimation: animation_show.export()
      })

      var animation_down = wx.createAnimation({
        duration:300,
        timingFunction:"ease",
        transformOrigin:"-100 100%"
      })

      animation_down.translateY(3*60).step();
      this.setData({
        listAnimation: animation_down.export()
      })

    },

    _hideList : function(){

    }
  },

  //
  ready:function(){
    this._showList();
  },

  //组件实例被从页面节点树移除时执行
  detached:function(){
    //收起城市列表
    



    //隐藏遮罩（然后被移除）
    var animation = wx.createAnimation({
      
    })
  }

})
