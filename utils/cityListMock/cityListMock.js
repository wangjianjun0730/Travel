module.exports = {
  cityList:cityListArr()
}

function cityListArr(){
 var dataArr = [
    {
      "cityName":"上海市",
      "location":{
        "lat": 31.23,
        "lng": 121.47 
      }
    },
    {
      "cityName": "武汉市",
      "location": {
        "lat": 30.60,
        "lng": 114.30 
      }
    },
    {
      "cityName": "长沙市",
      "location": {
        "lat": 28.23,
        "lng": 112.93
      }
    },
    {
      "cityName": "郑州市",
      "location": {
        "lat": 34.75,
        "lng": 113.62
      }
    },
    {
      "cityName": "济南市",
      "location": {
        "lat": 36.67,
        "lng": 116.98
      }
    },
    {
      "cityName": "杭州市",
      "location": {
        "lat": 30.28,
        "lng": 120.15 
      }
    },
    {
      "cityName": "重庆市",
      "location": {
        "lat": 29.57,
        "lng": 106.55 
      }
    }
  ]
  return dataArr; 
}
