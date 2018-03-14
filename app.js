//app.js
App({
  onLaunch: function () {
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

        if (res.authSetting['scope.userLocation']){
          /**
           * 获取当前定位信息
           */
          wx.getLocation({
            type: 'gcj02',
            success: function (res) {
              console.log(res)
              debugger
              if (!this.data.currentLocation) {
                this.setData({
                  currentLocation: {
                    log: res.longitude,
                    lat: res.latitude
                  }
                })
              }
            }
          })
        }else{
          //用户没有授权，必须让其授权才能使用（再次调起定位授权）

        }
      }
    })
  },
  /**
   * userInfo:用户缓存信息
   * isIpx:是否为iPhoneX（导航栏适配）
   * currentLocation:当前定位经纬度坐标
   * currentSelectedCity:当前选择的城市（首次为定位城市,手动选择后为手动选择的城市
  */
  globalData: {
    userInfo: null,
    isIpx: false,           
    currentLocation:null,
    currentSelectedCityName:null
  }
})