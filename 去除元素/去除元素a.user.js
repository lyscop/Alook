// ==UserScript==
// @name         去除元素
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  去除元素
// @author       lyscop
// @match        *://music.163.com/*
// @match        *://note.youdao.com/*

// @match        *://www.google.co.jp/*
// @match        *://www.baidu.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

var hos = window.location.hostname;

//去除Google搜索结果广告
            if(hos === 'google.co.jp') { 
document.querySelectorAll("span").forEach(function (value) {
        if (value.innerHTML.substring(0,2) === '广告') {
            var lab10 = value.parentNode.parentNode.parentNode.parentNode.parentNode
            if(lab10 != null) lab10.remove();
        }

    })
}

//还原百度首页logo
    var lab14 = document.getElementsByClassName('s_lg_img_gold_showre')[0]
    if(lab14 != null) lab14.src = 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1-66368c33f8.png'

//去除Google搜索结果People also search for
            if(hos === 'google.co.jp') { 
document.querySelectorAll('.g').forEach(function (value) {
        let searchBar = document.querySelector("div[jscontroller=m6a0l]")
        //console.log(searchBar) //不显示结果
        //searchBar.style.display="none";
        if(searchBar != null) searchBar.remove();
    });
}

//去除Google搜索结果关键词
    var spamWORDs = ['腾讯云','新浪','搜狐','网易','每日頭條'];
    setInterval(function () {
        if(hos === 'google.co.jp') {
        for (let u of spamWORDs) {
            document.querySelectorAll("h3").forEach(function (value) {
                //console.log(value.innerHTML.split('<')[0])
                if (value.innerHTML.indexOf(u) != -1) {
                    var laba1 = value.parentNode.parentNode.parentNode
                    if(laba1 != null) laba1.remove();
                        console.log(value.innerHTML)
                }

            })
        }
}
    }, 1000);

    //去除Google搜索结果域名
    var spamURLs = ['https://euro2020.sohu.com','https://euro.sina.com.cn','https://eurocup.cctv.com'];
    setInterval(function () {//自动翻页
        if(hos === 'google.co.jp') {
        for (let v of spamURLs) {
            document.querySelectorAll("cite").forEach(function (value) {
                //console.log(value.innerHTML.split('<')[0])
                if (value.innerHTML.split('<')[0] === v) {
                    var laba2 = value.parentNode.parentNode.parentNode.parentNode.parentNode

                    if(laba2 != null) laba2.remove();
                    if (value.parentNode.parentNode.tagName == 'A') {
                        var val1 = value.parentNode.parentNode.children[1].innerHTML;
                        console.log(val1+" "+v)
                    }
                }

            })
        }
}
    }, 1000);

   //去除Greasyfork搜索结果关键词 没效果要分开
    var spamWORDsGF = ['智慧','超星','VIP','🔥','网课','联盟','慕课','购物','HTML5','无损','1秒','比特','聚合','强国','解析','SSR','答案','党旗',
                       'v2ray','刷课','秒杀','云班','天津','党课','答题','PMP','优课','房企','高校','成都','Top81','优惠券','重庆','题目','升学',
                       '石家庄','新乡','vip','入校','刷脸','杭电SZU','课堂','柠檬','辽大','科大','师范','湖南','大学','宿舍','雪阅','优书网','工大','爱奇艺',
                       '其乐','唯品会','嘉然','苏州','教师','在右键菜单中添加','本地宝','安徽','湖北','浙江','南阳','拉勾','宁波','郑州','广东','凉山','医学',
                       'U校园','基金','学堂','中移','绍兴','陕西','山西','ZFDev-','净网卫士','Greener','AC-baidu','AC-CSDN','评教'];
   
setInterval(function () {//自动翻页
     if(hos === 'greasyfork.org') {
            for (let w of spamWORDsGF) {
                document.querySelectorAll("h2").forEach(function (value) {
if(value.children[0].innerHTML.indexOf(w) != -1) {
                        var laba3 = value.parentNode.parentNode;
                        if(laba3 != null) laba3.remove();
                        console.log(value.children[0].innerHTML)
                    }
                });
            }
        }
    }, 1000);


    setInterval(function () {//自动翻页
      if(hos === 'greasyfork.org') {
            for (let x of spamWORDsGF) {
                document.querySelectorAll("span").forEach(function (value) {
                    if(value.innerHTML.indexOf(x) != -1) {
                        var laba4 = value.parentNode.parentNode.parentNode;
                        if(laba4 != null) laba4.remove();
                        console.log(value.parentNode.children[0].innerHTML)
                    }
                });
            }
        }
    }, 1000);

    

    //去除百度搜索结果标题关键词
    var spamWORDsBD = ['腾讯云计算','百度游戏','最新相关信息','专家回答','ZAKER资讯',
                        '百度图片','搜狐网','新浪网','网易体育','新华网','腾讯视频','网易新闻','央视网','网易订阅','腾讯网',
                        '网易体育','新浪体育','百度视频',];
    setInterval(function () {//自动翻页
        if(hos === 'www.baidu.com') {
            for (let y of spamWORDsBD) {
                document.querySelectorAll('#content_left a').forEach(function (value) {
                    if(value.innerHTML.indexOf(y) != -1) {
                        if(value.className === 'c-showurl c-color-gray') {
                            var laba5 = value.parentNode.parentNode.parentNode.parentNode;
                        } else {
                            laba5 = value.parentNode.parentNode;
                        }
                        if(laba5 != null) laba5.remove();
                    }
                });
            }
        }
    }, 1000);

//去除百度搜索结果内容关键词
    setInterval(function () {//自动翻页
        if(hos === 'www.baidu.com') {
            for (let z of spamWORDsBD) {
                document.querySelectorAll('.c-abstract').forEach(function (value) {
                    if(value.innerHTML.indexOf(z) != -1) {
                        if(value.parentNode.className === 'c-span9 c-span-last') {
                            var laba6 = value.parentNode.parentNode.parentNode;
                        } else {
                            laba6 = value.parentNode;
                        }
                        if(laba6 != null) laba6.remove();
                    }
                });
            }
        }
    }, 1000);

    //屏蔽百度搜索结果广告
    var lab12 = document.getElementsByClassName('t ec_title _3qzdx3r')[0]
    if(lab12 != null) lab12.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();


//去除百度搜索结果热关键词
    var spamWORDsBDh = ['男','女','恋','美国','特朗','神舟','长征','航天员','电子烟','中国','高考',
'北京',];
    setInterval(function () {//自动翻页
        if(hos === 'www.baidu.com') {
            for (let xa of spamWORDsBDh) {
                document.querySelectorAll('.toplist1-tr').forEach(function (value) {
                    if(value.children[0].children[1].innerHTML.indexOf(xa) != -1) {
                        if(value != null) value.remove();
                    }
                });
            }
        }
    }, 1000);



    var spamWORDsWB = ['百度游戏'];
    setInterval(function () {//自动翻页
        if(hos === 'm.weibo.cn') {
            for (let xb of spamWORDsWB) {
                document.querySelectorAll('.weibo-text').forEach(function (value) {
                    if(value.innerHTML.indexOf(xb) != -1) {
                        var laba7 = value.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                        if(laba7 != null) laba7.remove();
                    }
                });
            }
        }
    }, 1000);

    var spamWORDsWBid = ['特朗普'];
    setInterval(function () {//自动翻页
        if(hos === 'm.weibo.cn') {
            for (let xc of spamWORDsWBid) {
                document.querySelectorAll('.m-text-cut').forEach(function (value) {
                    if(value.innerHTML.indexOf(xc) != -1) {
                        var laba8 = value.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                        if(laba8 != null) laba8.remove();
                    }
                });
            }
        }
    }, 1000);

//去除百度搜索结果贴吧
    setInterval(function () {//自动翻页
        if(hos === 'www.baidu.com') {
            document.querySelectorAll('.c-showurl').forEach(function (value) {
                //console.log(value.href)
                if(value.innerHTML.indexOf('tieba.baidu.com/') != -1) {
                    var laba10 = value.parentNode.parentNode;
                    if(laba10 != null) laba10.remove();
                }

            });
        }
    });

//去除百度搜索结果百度网址安全中心提醒您
    setInterval(function () {
        if(hos === 'www.baidu.com') {
            document.querySelectorAll("a").forEach(function (value) {
                if (value.innerHTML.indexOf('百度网址安全中心提醒您') != -1) {
                    var laba04 = value.parentNode.parentNode;
                    if(laba04 != null) laba04.remove();
                    //console.log(value.innerHTML)
                }
            })
        }

    }, 1000);

})();
