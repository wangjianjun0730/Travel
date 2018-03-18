//index.js

//获取本地城市列表
var cityList = require('../../utils/cityListMock/cityListMock.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    id:"1",
    currentSelectedCityInfo:null,
    showMap:true,
    showCityList:false,
    controls:[
      { 
        id: 1,
        position:{
          left:20,
          top: app.globalData.windowHeight -64,
          height:30,
          width:30
        },
        clickable:true,
        iconPath:"./img/move-to-location.png"
      }



    ]
  },

  onLoad: function () {
    //****** 获取当前定位信息(回调) ******//
    if (app.globalData.defaultLocationInfo){
      this.setData({
        currentLocationInfo: app.globalData.defaultLocationInfo,
        hasCurrentLocation: true,
        currentCityName: app.globalData.defaultLocationInfo.result.address_component.city,
        currentSelectedCityInfo: app.globalData.defaultLocationInfo.result.location
      })
      this._moveToCurrentLoacation();
    }else{
      app.currentLocationCallBack = res => {  
        this.setData({
          currentLocationInfo: res,
          hasCurrentLocation: true,
          currentCityName: res.result.address_component.city,
          currentSelectedCityInfo: res.result.location
        })
        this._moveToCurrentLoacation();
      }
    }

    //****** 获取用户信息 ****** //
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
  },

  onReady(){
    //获取地图上下文并将地图显示到当前定位位置
    this.ctMap = wx.createMapContext("main-map");
    this.ctMap.moveToLocation();
    
  },

  _changeCity(){
    this.setData({
      showMap: !this.data.showMap,
      showCityList: !this.data.showCityList
    })




    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success: function (res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail: function (res) {
    //     console.log(res.errMsg)
    //   }
    // })


  },

  //地图controls事件点击
  _controlTaps(res){
    switch(res.controlId){
      case 1:
        //
        this.ctMap.moveToLocation();
      break;
      case 2:

      break;
      default:
      break;

    }
  },

  //移动至当前定位点
  _moveToCurrentLoacation: function (locationInfo) {
    if (this.ctMap){
      this.ctMap.moveToLocation();
    }
  }
})
