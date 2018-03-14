//index.js
//获取应用实例

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    id:"1",
    hasCurrentLocation:false,        //是否获取当前定位
    currentCityName:""
  },

  onTap : function(e){
    wx.showToast({
      title: '132',
    })
  },

  titleClick: function () {
    wx.showToast({
      title: '导航栏',
    })
  },

  onLoad: function () {
    //获取当前定位信息(回调)
    if (app.globalData.defaultLocationInfo){
      console.log(app.globalData.defaultLocationInfo)
      this.setData({
        currentLocationInfo: app.globalData.defaultLocationInfo,
        hasCurrentLocation: true,
        currentCityName: app.globalData.defaultLocationInfo.result.address_component.city
      })

    }else{
      app.currentLocationCallBack = res => {
        console.log(res);
        
        this.setData({
          currentLocationInfo: res,
          hasCurrentLocation: true,
          currentCityName: res.result.address_component
.city
        })
      }
    }

    //获取用户信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
