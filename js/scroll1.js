/**
 * Created by wangwenjun on 2018/2/28.
 */
'use strict';
$(function () {
    const box=$('.center-bottom-left-table'); //大盒子
    const contentBox=$('.center-bottom-left-box');//内容盒子
    const scroll=$('.center-bottom-left-scroll');//滚动盒子
    const bar=$('.center-bottom-left-scroll-bar');//滚动条
    var barHeight=box.height()/contentBox.height()*box.height(); // 计算滚动条的高度：内容越多，越短，计算公式：容器的高/内容的高*容器的高
    var a=0;
    var timer='';
    timer=setInterval(function () {
        autosScroll();
    },200);
    bar.height(barHeight);
    console.log(contentBox.height());
    box.on("mousewheel DOMMouseScroll mouseenter", function (e) {
        clearInterval(timer);
        mouseScroll(e);
    });
    box.on('mouseleave',function () {
        timer=setInterval(function () {
            autosScroll();
        },200);
    });
    barScroll(bar,contentBox,box);
    function barScroll(bar,content,box){
        bar.on('mousedown',function (event) {
            // t是滑块距离其父亲div顶部的距离
            var t=event.clientY-$(this).offset().top;
            $(document).on('mousemove',function (event) {
                var barTop=event.clientY-t;
                // 滚动条滚动一次，内容一定的距离公式（内容高度-容器高度）/（容器的高度-滚动条的高度）*滚动条移动的距离
                var contentTop=(content.outerHeight()-box.outerHeight())/(box.outerHeight()-bar.outerHeight())*barTop;
                if(barTop < 0 ) {
                    barTop=0;
                }else if(barTop>box.outerHeight()-bar.outerHeight()){
                    barTop=box.outerHeight()-bar.outerHeight();
                }else{
                    content.css('top',-contentTop);
                }
                bar.css('top',barTop);
                window.getSelection()?window.getSelection().removeAllRanges():document.selection.empty();
            });
            $(document).on('mouseup',function () {
                $(this).unbind();
            });
        });
    } // 滚动条滚动
    function mouseScroll(e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
        var contentTop=(contentBox.outerHeight()-box.outerHeight())/(box.outerHeight()-bar.outerHeight())*a;
        if (delta > 0) {
            // 向上滚
            a-=10;

            if(a<0){
                a=0;
            }
            bar.css('top',a);
            contentBox.css('top',-contentTop);
            // console.log(a);
        } else if (delta < 0) {
            // 向下滚
            a+=10;
            if(a>box.outerHeight()-bar.outerHeight()){
                a=box.outerHeight()-bar.outerHeight();
            }
            bar.css('top',a);
            contentBox.css('top',-contentTop);
            // console.log("wheeldown");
        }
    } // 鼠标滚轮滚动
    function autosScroll() {
        var contentTop=(contentBox.outerHeight()-box.outerHeight())/(box.outerHeight()-bar.outerHeight())*a;
        a+=1;
        if(a>box.outerHeight()-bar.outerHeight()){
            a=0;
        }
        bar.css('top',a);
        contentBox.css('top',-contentTop);
    } //自动滚动
});
