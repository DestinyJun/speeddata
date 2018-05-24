// 中国微博点亮图
$(function () {
   /* var myChart = echarts.init(document.getElementById('myMap'));
    myChart.showLoading();
    $.getJSON('/data/data-1461574801505-SJtcnUog.json', function (weiboData) {
        myChart.hideLoading();

        weiboData = weiboData.map(function (serieData, idx) {
            var px = serieData[0] / 1000;
            var py = serieData[1] / 1000;
            var res = [[px, py]];

            for (var i = 2; i < serieData.length; i += 2) {
                var dx = serieData[i] / 1000;
                var dy = serieData[i + 1] / 1000;
                var x = px + dx;
                var y = py + dy;
                res.push([x, y, 1]);

                px = x;
                py = y;
            }
            return res;
        });
        myChart.setOption(option = {
            backgroundColor: '#404a59',
            title : {
                text: '微博签到数据点亮中国',
                subtext: 'From ThinkGIS',
                sublink: 'http://www.thinkgis.cn/public/sina',
                left: 'center',
                top: 'top',
                textStyle: {
                    color: '#fff'
                }
            },
            legend: {
                left: 'left',
                data: ['强', '中', '弱'],
                textStyle: {
                    color: '#ccc'
                }
            },
            geo: {
                name: '强',
                type: 'scatter',
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: [
                {
                name: '弱',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: 1,
                large: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 2,
                        shadowColor: 'rgba(37, 140, 249, 0.8)',
                        color: 'rgba(37, 140, 249, 0.8)'
                    }
                },
                data: weiboData[0]
            },
                {
                name: '中',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: 1,
                large: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 2,
                        shadowColor: 'rgba(14, 241, 242, 0.8)',
                        color: 'rgba(14, 241, 242, 0.8)'
                    }
                },
                data: weiboData[1]
            },
                {
                name: '强',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: 1,
                large: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 2,
                        shadowColor: 'rgba(255, 255, 255, 0.8)',
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                },
                data: weiboData[2]
            }]
        });
    });
    window.addEventListener('resize',function () {
        myChart.resize();
    })*/
});

// 世界飞机沪杭线图
$(function () {
   /* var myChart = echarts.init(document.getElementById('myMap'));
    myChart.showLoading();
    $.getJSON('/data/data-1469162638978-rJDcVXku.json', function(data) {

        myChart.hideLoading();

        function getAirportCoord(idx) {
            return [data.airports[idx][3], data.airports[idx][4]];
        }
        var routes = data.routes.map(function (airline) {
            return [
                getAirportCoord(airline[1]),
                getAirportCoord(airline[2])
            ];
        });

        myChart.setOption(option = {
            title: {
                text: 'World Flights',
                left: 'center',
                textStyle: {
                    color: '#eee'
                }
            },
            backgroundColor: '#003',
            tooltip: {
                formatter: function (param) {
                    var route = data.routes[param.dataIndex];
                    return data.airports[route[1]][1] + ' > ' + data.airports[route[2]][1];
                }
            },
            geo: {
                map: 'world',
                left: 0,
                right: 0,
                silent: true,
                itemStyle: {
                    normal: {
                        borderColor: '#003',
                        color: '#005'
                    }
                }
            },
            series: [{
                type: 'lines',
                coordinateSystem: 'geo',
                data: routes,
                large: true,
                largeThreshold: 100,
                lineStyle: {
                    normal: {
                        opacity: 0.05,
                        width: 0.5,
                        curveness: 0.3
                    }
                },
                // 设置混合模式为叠加
                blendMode: 'lighter'
            }]
        });
    });
    window.addEventListener('resize',function () {
        myChart.resize();
    })*/
});

// 又来一个炫酷的图
$(function () {
    /* var myChart = echarts.init(document.getElementById('myMap'));
     $.getJSON('../data/data-1524056463493-H1PcbpN2z.json', function(buildingsGeoJSON) {
         console.log(buildingsGeoJSON);
         var builds= buildingsGeoJSON.map(function(feature){
             return {"type":"Feature",
                 "properties":{"name":Math.random().toString(),"height":feature.height||100},
                 "geometry":{"type":"Polygon","coordinates":[feature.polygon]}

             }

         })

         echarts.registerMap('buildings', {
             "features":builds
         });

         var regionsData = builds.map(function(feature) {
             return {
                 name: feature.properties.name,
                 value: Math.random()*1,
                 height: feature.properties.height,
                 itemStyle:{
                     color:'red',
                     borderColor:'red'
                 }
             };
         });


         $.getJSON('../data/data-1524055280228-SkugT242f.json', function(linesData) {
             var data = linesData.features;

             var hStep = 300 / (data.length - 1);
             var taxiRoutes=[];
             var i = 0;
             for (var x in data) {
                 var lnglats = data[x].geometry.coordinates
                 taxiRoutes.push({
                     coords: lnglats,
                     lineStyle: {
                         color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * x))

                     },
                     value:Math.random()*200
                 })
             }

             myChart.setOption({
                 maptalks: {
                     center: [-74.01164278497646, 40.70769573605318],
                     zoom: 14,
                     pitch: 55,
                     baseLayer: {
                         'urlTemplate': 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                         'subdomains': ['a', 'b', 'c', 'd']
                     },
                     altitudeScale: 2,
                     postEffect: {
                         enable: true,
                         FXAA: {
                             enable: true
                         }
                     },
                     light: {
                         main: {
                             intensity: 1,
                             shadow: true,
                             shadowQuality: 'high'
                         },
                         ambient: {
                             intensity: 0.
                         },
                         ambientCubemap: {
                             texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
                             exposure: 1,
                             diffuseIntensity: 0.5,
                             specularIntensity: 2
                         }
                     }
                 },
                 series: [
                     {
                         type: 'map3D',
                         coordinateSystem: 'maptalks',
                         map: 'buildings',
                         data: regionsData,
                         shading: 'realistic',
                         silent: true,
                         instancing: true,
                         realisticMaterial: {
                             metalness: 1,
                             roughness: 0.2,
                         }
                     },
                     {
                         type: 'lines3D',
                         coordinateSystem: 'maptalks',
                         effect: {
                             show: true,
                             constantSpeed: 1,
                             trailWidth: 3,
                             trailLength: 1,
                             trailOpacity: 1,
                             spotIntensity: 10
                         },

                         blendMode: 'lighter',

                         polyline: true,

                         data: {
                             count: function() {
                                 return taxiRoutes.length;
                             },
                             getItem: function(idx) {
                                 return taxiRoutes[idx]
                             }
                         }
                     }
                 ]
             });

             var maptalksIns = myChart.getModel().getComponent('maptalks').getMaptalks();
             maptalksIns.on('click', function(e) {
                 console.log(e)
             })

         });



     });
     window.addEventListener('resize', function() {
         myChart.resize();
     });*/
});

// 北京公交线路
$(function () {
    var myChart = echarts.init(document.getElementById('center_map'));
    var uploadedDataURL = "/asset/get/s/data-1469626907389-rkXXqNUd.json";

    // app.title = '北京公交路线 - 线特效';

    $.getJSON("../data/data-1469626907389-rkXXqNUd.json", function(data) {
        console.log(data);
        var hStep = 300 / (data.length - 1);
        var busLines = [].concat.apply([], data.map(function (busLine, idx) {
            var prevPt;
            var points = [];
            for (var i = 0; i < busLine.length; i += 2) {
                var pt = [busLine[i], busLine[i + 1]];
                if (i > 0) {
                    pt = [
                        prevPt[0] + pt[0],
                        prevPt[1] + pt[1]
                    ];
                }
                prevPt = pt;

                points.push([pt[0] / 1e4, pt[1] / 1e4]);
            }
            return {
                coords: points,
                lineStyle: {
                    normal: {
                        color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
                    }
                }
            };
        }));
        myChart.setOption(
            {
            title:{
                text: '高速公路车辆流动线路图',
                textStyle: {
                    color: 'white',
                    fontSize:15
                }
            },
            bmap: {
                center: [116.40, 40.04],
                zoom: 10,
                roam: true,
                mapStyle: {
                    'styleJson': [
                        {
                            'featureType': 'water',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#031628'
                            }
                        },
                        {
                            'featureType': 'land',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#000102'
                            }
                        },
                        {
                            'featureType': 'highway',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        },
                        {
                            'featureType': 'arterial',
                            'elementType': 'geometry.fill',
                            'stylers': {
                                'color': '#000000'
                            }
                        },
                        {
                            'featureType': 'arterial',
                            'elementType': 'geometry.stroke',
                            'stylers': {
                                'color': '#0b3d51'
                            }
                        },
                        {
                            'featureType': 'local',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#000000'
                            }
                        },
                        {
                            'featureType': 'railway',
                            'elementType': 'geometry.fill',
                            'stylers': {
                                'color': '#000000'
                            }
                        },
                        {
                            'featureType': 'railway',
                            'elementType': 'geometry.stroke',
                            'stylers': {
                                'color': '#08304b'
                            }
                        },
                        {
                            'featureType': 'subway',
                            'elementType': 'geometry',
                            'stylers': {
                                'lightness': -70
                            }
                        },
                        {
                            'featureType': 'building',
                            'elementType': 'geometry.fill',
                            'stylers': {
                                'color': '#000000'
                            }
                        },
                        {
                            'featureType': 'all',
                            'elementType': 'labels.text.fill',
                            'stylers': {
                                'color': '#857f7f'
                            }
                        },
                        {
                            'featureType': 'all',
                            'elementType': 'labels.text.stroke',
                            'stylers': {
                                'color': '#000000'
                            }
                        },
                        {
                            'featureType': 'building',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#022338'
                            }
                        },
                        {
                            'featureType': 'green',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#062032'
                            }
                        },
                        {
                            'featureType': 'boundary',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#465b6c'
                            }
                        },
                        {
                            'featureType': 'manmade',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#022338'
                            }
                        },
                        {
                            'featureType': 'label',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }
                    ]
                }
            },
            series: [
                {
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: busLines,
                silent: true,
                lineStyle: {
                    normal: {
                        // color: '#c23531',
                        // color: 'rgb(200, 35, 45)',
                        opacity: 0.2,
                        width: 1
                    }
                },
                progressiveThreshold: 500,
                progressive: 200
            }, {
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                data: busLines,
                lineStyle: {
                    normal: {
                        width: 0
                    }
                },
                effect: {
                    constantSpeed: 20,
                    show: true,
                    trailLength: 0.1,
                    symbolSize: 1.5
                },
                zlevel: 1
            }]
        }
        );
        window.addEventListener('resize', function() {
            myChart.resize();
        });
    });
});