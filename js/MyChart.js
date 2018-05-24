$(function () {
    //  accumulation_echart 社保公积金折现图
    var accumulationEchart = echarts.init(document.getElementById('accumulation_echart'), 'light');
    // Generate data
    var category = [];
    var dottedBase = +new Date();
    var lineData = [];
    var barData = [];

    for (var i = 0; i < 20; i++) {
        var date = new Date(dottedBase += 1000 * 3600 * 24);
        category.push([
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        ].join('-'));
        var b = Math.random() * 200;
        var d = Math.random() * 200;
        barData.push(b)
        lineData.push(d + b);
    }
    var accumulationEchartOption = option = {
        title: {
            text: '流动车辆滞留时间分析',
            top:5,
            left: 5,
            textStyle: {
                color: 'white',
                fontSize: 12,
                fontWeight: 'normal',
                align: 'center'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true,
                    backgroundColor: '#333'
                }
            }
        },
        legend: {
            data: ['时长', '车辆'],
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        series: [{
            name: 'line',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data: lineData
        }, {
            name: 'bar',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#14c8d4'},
                            {offset: 1, color: '#43eec6'}
                        ]
                    )
                }
            },
            data: barData
        }, {
            name: 'line',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'rgba(20,200,212,0.5)'},
                            {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                            {offset: 1, color: 'rgba(20,200,212,0)'}
                        ]
                    )
                }
            },
            z: -12,
            data: lineData
        }, {
            name: 'dotted',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#0f375f'
                }
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData
        }]
    };
    accumulationEchart.setOption(accumulationEchartOption);
});

$(function () {
    //  income_echart 流动人口职业收入饼图
    var incomeEchart = echarts.init(document.getElementById('income_echart'), 'light');
    var incomeEchartOption = {
        // 图标的标题样式
        title: {
            text: '流动人口职业收入情况',
            textStyle: {
                color: 'white',
                fontSize: 12,
                fontWeight: 'normal'
            }
        },
        series: [
            {
                name:'人口分布',
                type:'pie',
                legendHoverLink:true,
                hoverAnimation:true,
                startAngle:60,
                hoverOffset:10,
                roseType:false,
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{b}: {d}%',
                    color: 'white',
                    align:'center',
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 12
                        }
                    }
                },
                labelLine: {
                    show: true

                },
                center:['45%','50%'],
                data:[
                    {
                        value:25,
                        name:'企事业单位',
                        labelLine:{
                            color:'white'
                        },
                        itemStyle:{
                            color:'#FADD27'
                        }

                    },
                    {
                        value:75,
                        name:'其他',
                        labelLine:{
                            color:'white'
                        },
                        itemStyle:{
                            color:'#4171BD'
                        }
                    }
                ]
            }
        ]
    };
    incomeEchart.setOption(incomeEchartOption);
});


$(function () {
    //  crime_echart 犯罪率及犯罪类型气泡图
    var crimeEchart = echarts.init(document.getElementById('crime_echart'), 'light');
    var crimeEchartOption = {
        title: {
            text: '流动人口犯罪率及犯罪类型',
            top:5,
            textStyle: {
                color: 'white',
                fontSize: 12,
                fontWeight: 'normal'
            }
        },
        // 图标的图列控制配置
        legend: {
            textStyle: {
                color: 'white',
                fontStyle: 12
            },
            data:['社保','公积金'],
            top:25,
            right:5,
            itemGap:20,
            itemHeight:0 //设置图列标记的高
        },
        // 控制坐标系内绘图区域的相关样式
        grid: {
            show: false,
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        // 控制x轴样式
        xAxis: {
            show:true,
            type: 'category',
            boundaryGap: false,
            // 坐标轴轴线相关设置
            axisLine:{
                lineStyle:{
                    color:'#2D3653'
                }
            },
            // 坐标轴刻度相关设置
            axisTick:{
                show: false
            },
            // 坐标轴刻度标签的相关设置
            axisLabel:{
                color:'white',
                interval:0
            },
            // 控制水平网格线是否显示
            splitLine: {
                show: false,
                interval: '0',
                lineStyle:{
                    opacity:'0.1'
                }
            }
        },
        // 控制y轴样式
        yAxis: {
            show:true,
            type: 'value',

            // 坐标轴轴线相关设置
            axisLine:{
                lineStyle:{
                    color:'#2D3653'
                }
            },
            // 坐标轴刻度相关设置
            axisTick:{
                show: false
            },
            // 坐标轴刻度标签的相关设置
            axisLabel:{
                color:'white'
            },
            // 控制水平网格线是否显示
            splitLine: {
                show: false,
                interval: '0',
                lineStyle:{
                    opacity:'0.1'
                }
            }
        },
        tooltip: {
            trigger: 'none'
        },
        series: [
            {
                symbolSize: 0,
                data: [['', 0]],
                type: 'scatter',
                itemStyle:{
                    color:'#FB5C35'
                }
            },
            {
                symbolSize: 30,
                data: [['放火罪', 20]],
                type: 'scatter',
                itemStyle:{
                    color:'#FB5C35'
                }
            },
            {
                symbolSize: 25,
                data: [['破坏交通', 15]],
                type: 'scatter',
                itemStyle:{
                    color:'#FB5C35'
                }
            },
            {
                symbolSize: 20,
                data: [['抢劫', 12]],
                type: 'scatter',
                itemStyle:{
                    color:'#FB5C35'
                }
            },
            {
                symbolSize: 15,
                data: [['强奸', 4]],
                type: 'scatter',
                itemStyle:{
                    color:'#FEBB4A'
                }
            },
            {
                symbolSize: 15,
                data: [['诈骗', 1]],
                type: 'scatter',
                itemStyle:{
                    color:'#FEBB4A'
                }
            },
            {
                symbolSize: 15,
                data: [['勒索', 3]],
                type: 'scatter',
                itemStyle:{
                    color:'#FEBB4A'
                }
            },
            {
                symbolSize: 15,
                data: [['伪造假币', 9]],
                type: 'scatter',
                itemStyle:{
                    color:'#FEBB4A'
                }
            },
            {
                symbolSize: 15,
                data: [['非法经营', 13]],
                type: 'scatter',
                itemStyle:{
                    color:'#FB5C35'
                }
            }
        ]
    };
    crimeEchart.setOption(crimeEchartOption);
});

$(function () {
    //  religion_echart 宗教扇形图
    var religionEchart = echarts.init(document.getElementById('religion_echart'), 'light');
    var religionEchartOption = {
        title: {
            text: '流动车辆车型分析',
            top:5,
            right: 'center',
            textStyle: {
                color: 'white',
                fontSize: 12,
                fontWeight: 'normal',
                align: 'center'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },

        series : [
            {
                type: 'pie',
                radius : '55%',
                center: ['50%', '50%'],
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{b}: {d}%',
                    color: 'white',
                    align:'center',
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 12
                        }
                    }
                },
                data:[
                    {
                        value:10,
                        name:'轿车',
                        itemStyle:{color:'#E64018'}
                    },
                    {
                        value:15,
                        name:'货车',
                        itemStyle:{color:'#FBB034'}
                    },
                    {
                        value:10,
                        name:'商务车',
                        itemStyle:{color:'#FEEB23'}
                    },
                    {
                        value:12,
                        name:'大客车',
                        itemStyle:{color:'#E30B40'}
                    },
                    {
                        value:6,
                        name:'小客车',
                        itemStyle:{color:'#3291DD'}
                    },
                    {
                        value:4,
                        name:'其他',
                        itemStyle:{color:'#8B489E'}
                    },
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    religionEchart.setOption(religionEchartOption);
})

$(function () {
    var myEchart = echarts.init(document.getElementById('eventDefault'));
    option = {
        title: {
            text: '事件监测预测',
            top: 10,
            left: 10,
            textStyle: {
                fontSize: 13,
                color: 'white'
            }

        },
        tooltip: {
            trigger: 'item',
            backgroundColor : 'rgba(0,0,250,0.2)'
        },

        radar: {
            indicator : [
                { text: '电力监测', max: 400},
                { text: '水池监测', max: 400},
                { text: '卫生', max: 400},
                { text: '设备', max: 400},
                { text: '', max: 400}
            ]
        },
        series : (function (){
            var series = [];
            for (var i = 1; i <= 28; i++) {
                series.push({
                    name:'浏览器（数据纯属虚构）',
                    type: 'radar',
                    symbol: 'none',
                    lineStyle: {
                        width: 1
                    },
                    emphasis: {
                        areaStyle: {
                            color: 'rgba(0,250,0,0.3)'
                        }
                    },
                    data:[
                        {
                            value:[
                                (40 - i) * 10,
                                (38 - i) * 4 + 60,
                                i * 5 + 10,
                                i * 9,
                                i * i /2
                            ],
                            name: i + 2000 + ''
                        }
                    ]
                });
            }
            return series;
        })()
    };
    myEchart.setOption(option)

});

//  histogram_echarts 流动人口数量性别变化直方体折线图
$(function () {
   /* var histogramEchart = echarts.init(document.getElementById('histogram_echarts'), 'light');
    var data = [];
    var labelData = [];
    for (var i = 0; i < 24; ++i) {
        data.push({
            value: Math.random() * 10 + 10 - Math.abs(i - 12),
            name: i + ':00'
        });
        labelData.push({
            value: 1,
            name: i + ':00'
        });
    }
    histogramEchartOption = {
        title: {
            text: '各时间车辆停留时间',
            left: '50%',
            textAlign: 'center',
            top: '20%'
        },
        color: ['#22C3AA'],
        series: [{
            type: 'pie',
            data: data,
            roseType: 'area',
            itemStyle: {
                normal: {
                    color: 'white',
                    borderColor: '#22C3AA'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                }
            }
        }, {
            type: 'pie',
            data: labelData,
            radius: ['75%', '100%'],
            zlevel: -2,
            itemStyle: {
                normal: {
                    color: '#22C3AA',
                    borderColor: 'white'
                }
            },
            label: {
                normal: {
                    position: 'inside'
                }
            }
        }]
    };
    histogramEchart.setOption(histogramEchartOption);*/
});


$(function () {
    //  education_echart 教育折线图
    var educationEchart = echarts.init(document.getElementById('education_echart'), 'light');
    var educationEchartOption = {
        // 图标的标题样式
        title: {
            text: '车辆峰值分析',
            top:5,
            textStyle: {
                color: 'white',
                fontSize: 12,
                fontWeight: 'normal'
            }
        },
        // 控制坐标系内绘图区域的相关样式
        grid: {
            show: false,
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        // 控制x轴样式
        xAxis: {
            show:true,
            type: 'category',
            boundaryGap: false,
            // data: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017'],
            data: ['00:00','03:00','06:00','09:00','12:00','15:00','18:00','21:00','24:00'],
            // 坐标轴轴线相关设置
            axisLine:{
                lineStyle:{
                    color:'#2D3653'
                }
            },
            // 坐标轴刻度相关设置
            axisTick:{
                show: false
            },
            // 坐标轴刻度标签的相关设置
            axisLabel:{
                color:'white',
                interval:1
            },
            // 控制水平网格线是否显示
            splitLine: {
                show: false,
                interval: '0',
                lineStyle:{
                    opacity:'0.1'
                }
            }
        },
        // 控制y轴样式
        yAxis: {
            show:true,
            type: 'value',

            // 坐标轴轴线相关设置
            axisLine:{
                lineStyle:{
                    color:'#2D3653'
                }
            },
            // 坐标轴刻度相关设置
            axisTick:{
                show: false
            },
            // 坐标轴刻度标签的相关设置
            axisLabel:{
                color:'white',
                length:6,
                // formatter: '{value} w'
                formatter: function (value) {
                    var texts = [value+'辆'];
                    if(value===0){
                        texts =[0]
                    }
                    return texts.join('/');
                }
            },
            // 控制水平网格线是否显示
            splitLine: {
                show: false,
                interval: '0',
                lineStyle:{
                    opacity:'0.1'
                }
            }
        },
        series: [
            {
                symbolSize: 24,
                data: [
                    ['00:00', 0]
                ],
                symbolOffset:['0%','0'],
                type: 'scatter',

                itemStyle:{
                    color:'#FDA201'
                }
            },
            {
                symbolSize: 24,
                data: [
                    ['24:00', 15]
                ],
                symbolOffset:['0','50%'],
                type: 'scatter',
                itemStyle:{
                    color:'#FDA201'
                }
            },
            {
                type:'line',
                stack: null,
                data:[0,15,5,23,10,30,12,30,13,5,12],
                color: ['#CBD29D']
            }
        ]
    };
    educationEchart.setOption(educationEchartOption);
});
