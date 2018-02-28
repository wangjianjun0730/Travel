//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
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
      }
    })
  },
  //小程序从后台进入前台显示，会触发onshow
  onShow:function(){
    // wx.showToast({
    //   title: '进入前台',
    // })
  
    // wx.showActionSheet({
    //   itemList: [],
    // })
    var confirmfuc = function (){
        wx.showToast({
          title: '点击了好的后的回调',
        })
    }
  
    wx.showModal({
      title: '进入前台',
      content: '这是一个测试用的弹框',
      confirmColor:"#72C9E9",
      confirmText:'好的',
      complete: confirmfuc
    })
  },
  globalData: {
    userInfo: null
  }
})