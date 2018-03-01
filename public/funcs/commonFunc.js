function sayGood(){
  wx.showToast({
    title: 'function:sayGood',
  })
}

function sayHello(){
  wx.showToast({
    title: 'function:sayHello',
  })
}
//使用暴露公共API
module.exports.sayHello = sayHello; 
module.exports.sayGood = sayGood
