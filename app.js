//app.js
var defaultLocation = require('./utils/homeLocationMock/homeLocationModk.js')

App({
  onLaunch: function () {

    console.log(defaultLocation.defaultLocation)

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //获取机型（iPhone X）进行导航栏适配
    var self = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        if (res.model == 'iPhone X') {
          self.globalData.isIpx = true
        }
      },
    })
    // 登录
    wx.login({
      success: res => {
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({

      success: res => {

        // debugger
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
        // debugger
        //获取当前定位信息
        if (res.authSetting['scope.userLocation']){
          var self = this;
          wx.getLocation({
            type: 'gcj02',
            success: res => {
              console.log(res)
              //页面展示的时候调用
              wx.request({
                url: 'https://apis.map.qq.com/ws/geocoder/v1/',
                data: {
                  location: res.latitude + ',' + res.longitude,
                  key: 'PQ3BZ-BXNLV-BTPPB-U4BCS-GZM5E-PEBUT'
                },
                success: res => {//逆编码请求成功
                  if (res.data.status == 0){
                    self.globalData.defaultLocationInfo = res.data;
                    if (self.currentLocationCallBack){
                      self.currentLocationCallBack(res.data);
                    }
                    
                  }else{
                    wx.showshowToast({
                      title: res.data.message
                    })
                    self.globalData.defaultLocationInfo = defaultLocation.defaultLocation;
                    if (self.currentLocationCallBack) {
                      self.currentLocationCallBack(self.globalData.defaultLocationInfo);
                    }
                  } 
                },
                fail: error => {//逆编码请求失败
                  self.globalData.defaultLocationInfo = defaultLocation.defaultLocation;
                  wx.showToast({
                    title: error.errMsg,
                    icon: "none"
                  })
                  if (self.currentLocationCallBack) {
                    self.currentLocationCallBack(self.globalData.defaultLocationInfo);
                  }
                }
              })        
            },
            fail:error => {
              wx.showLoading({
                title: error.errMsg,
                icon: "none"
              })
              self.globalData.defaultLocationInfo = defaultLocation.defaultLocation;
              if (self.currentLocationCallBack) {
                self.currentLocationCallBack(self.globalData.defaultLocationInfo);
              }
            }
          })
        }
      }
    })
  },

  /**
   * userInfo:用户缓存信息
   * isIpx:是否为iPhoneX（导航栏适配）
   * defualtLocationInfo:默认定位经纬度坐标
  */
  globalData: {
    userInfo: null,
    isIpx: false,
    defaultLocationInfo: null
  }
})