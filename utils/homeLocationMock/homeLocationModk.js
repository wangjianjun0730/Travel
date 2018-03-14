
module.export = {
  defaultLocation: defaultLocation()
}

function defaultLocation(){
  var data = {
    "status": 0,
    "message": "query ok",
    "request_id": "87469b98-2783-11e8-8a8f-246e965902d2",
    "result": {
      "location": {
        "lat": 31.23037,
        "lng": 121.4737
      },
      "address": "上海市黄浦区人民大道200号",
      "formatted_addresses": {
        "recommend": "黄浦区上海市委(人民大道北)",
        "rough": "黄浦区上海市委(人民大道北)"
      },
      "address_component": {
        "nation": "中国",
        "province": "上海市",
        "city": "上海市",
        "district": "黄浦区",
        "street": "人民大道",
        "street_number": "人民大道200号"
      },
      "ad_info": {
        "nation_code": "156",
        "adcode": "310101",
        "city_code": "156310000",
        "name": "中国,上海市,上海市,黄浦区",
        "location": {
          "lat": 31.23037,
          "lng": 121.473701
        },
        "nation": "中国",
        "province": "上海市",
        "city": "上海市",
        "district": "黄浦区"
      },
      "address_reference": {
        "business_area": {
          "title": "人民广场",
          "location": {
            "lat": 31.23035,
            "lng": 121.473717
          },
          "_distance": 0,
          "_dir_desc": "内"
        },
        "famous_area": {
          "title": "人民广场",
          "location": {
            "lat": 31.23035,
            "lng": 121.473717
          },
          "_distance": 0,
          "_dir_desc": "内"
        },
        "crossroad": {
          "title": "西藏中路/人民大道(路口)",
          "location": {
            "lat": 31.23139,
            "lng": 121.476448
          },
          "_distance": 279.6,
          "_dir_desc": "西南"
        },
        "town": {
          "title": "南京东路街道",
          "location": {
            "lat": 31.23037,
            "lng": 121.473701
          },
          "_distance": 0,
          "_dir_desc": "内"
        },
        "street_number": {
          "title": "人民大道200号",
          "location": {
            "lat": 31.23035,
            "lng": 121.473717
          },
          "_distance": 0,
          "_dir_desc": ""
        },
        "street": {
          "title": "人民大道",
          "location": {
            "lat": 31.229826,
            "lng": 121.474037
          },
          "_distance": 62.5,
          "_dir_desc": "北"
        },
        "landmark_l1": {
          "title": "人民公园",
          "location": {
            "lat": 31.23131,
            "lng": 121.471741
          },
          "_distance": 94.4,
          "_dir_desc": "东"
        },
        "landmark_l2": {
          "title": "上海市委",
          "location": {
            "lat": 31.23035,
            "lng": 121.473686
          },
          "_distance": 0,
          "_dir_desc": "内"
        }
      }
    }
  }
  return data;
}


