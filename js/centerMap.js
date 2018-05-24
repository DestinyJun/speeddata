/**
 * Created by wangwenjun on 2018/2/23.
 */
'use strict';
var map = new BMap.Map("center_map");
// 创建地图实例
var point = new BMap.Point(106.717384,26.597928);
// 创建点坐标
map.centerAndZoom(point, 15);
map.enableScrollWheelZoom(true);
// 图添加6个标注
var myIcon=new BMap.Icon("./images/local.png",new BMap.Size(20,32));
var  points = [
    new BMap.Point(106.717384,26.597928),
    new BMap.Point(106.704619,26.589072),
    new BMap.Point(106.708715,26.591851),
    new BMap.Point(106.715722,26.593304),
    new BMap.Point(106.729987,26.596987),
    new BMap.Point(106.711913,26.596406),
    new BMap.Point(106.712812,26.588781),
    new BMap.Point(106.703541,26.5861)];
for (var i = 0; i < points.length; i ++) {
    var marker = new BMap.Marker(points[i]);
    map.addOverlay(marker);
}



// var marker = new BMap.Marker(point);        // 创建标注
// map.addOverlay(marker);                     // 将标注添加到地图中
/*function addMarker(point, index){  // 创建图标对象
    var myIcon = new BMap.Icon("markers.png", new BMap.Size(23, 25), {
        // 指定定位位置。
        // 当标注显示在地图上时，其所指向的地理位置距离图标左上
        // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
        // 图标中央下端的尖角位置。
        anchor: new BMap.Size(10, 25),
        // 设置图片偏移。
        // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
        // 需要指定大图的偏移位置，此做法与css sprites技术类似。
        imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移
    });
    // 创建标注对象并添加到地图
    var marker = new BMap.Marker(point, {icon: myIcon});
    map.addOverlay(marker);
}*/