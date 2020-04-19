/*
 * @name: 划词菜单(搜索+翻译+转到)
 * @Author: 酷安@达蒙山
 * @version: 200418.22
 * @description: 划词搜索、划词翻译、网址跳转
 * @include: *
 */

!function() {

  /*搜索引擎和翻译接口，请按相同格式修改*/
  var ssyq = [

  {
    name: "百度搜索",
    url: "https://www.baidu.com/s?wd="
  },
  {
    name: "夸克搜索",
    url: "https://quark.sm.cn/s?q="
  },
  {
    name: "百度翻译",
    url: "https://fanyi.baidu.com/?tpltype=sigma#zd/zd/"
  },
  {
    name: "夸克翻译",
    url: "https://quark.sm.cn/api/rest?method=quark_fanyi.dlpage&schema=v2&format=html&entry=fanyi_jinshan#zd/zd/"
  }

  ],
  hcTimer,
  ljurl,
  text;

  function hccdyc() {
    clearTimeout(hcTimer);
    hcTimer = setTimeout(hccd, 750);
    if (document.getElementById("zdan")) {
      document.getElementById("zdan").parentNode.removeChild(document.getElementById("zdan"));
    }
  }
  function hccd() {
    text = window.getSelection().toString().trim();

    text ? (document.getElementById("hckj").style.display = "block", zdcd()) : document.getElementById("hckj").style.display = "none";

  }

  function tzurl(a, b) {
    b = b || text;
    ljurl = a + b;
    window.open(ljurl);
  }

  function zdcd() {
    var zdurl = text.match(/(https?:\/\/(\w[\w-]*\.)+[A-Za-z]{2,4}(?!\w)(:\d+)?(\/([\x21-\x7e]*[\w\/=])?)?|(\w[\w-]*\.)+(com|cn|org|net|info|tv|cc|gov|edu)(?!\w)(:\d+)?(\/([\x21-\x7e]*[\w\/=])?)?)/i)[0];

    if (zdurl) {
      var tzlj = document.createElement("span");
      tzlj.id = "zdan";
      tzlj.innerHTML = "\u8f6c\u5230";
      tzlj.addEventListener("click",
      function() {

        zdurl.indexOf("http") < 0 ? tzurl("https://", zdurl) : tzurl("", zdurl);

      });
      document.getElementById("hckj").appendChild(tzlj);
    }
  }

  if (!document.getElementById("cdkj")) {
    var cddiv = document.createElement("div");
    cddiv.id = "cdkj";
    cddiv.style.cssText = "display:block!important;width:100%;position:fixed;bottom:0px;z-index:9999999999;text-align:center;margin:4px auto;padding:4px;-webkit-tap-highlight-color:rgba(0,0,0,0);";
    document.body.appendChild(cddiv);
    var cdstyle = document.createElement("style");
    cdstyle.type = "text/css";
    cdstyle.innerHTML = "#cdkj span{display:inline-block;background:#6a6a6a;color:#fff;font-size:20px;line-height:24px;margin:4px;padding:4px;border:1px solid #c5c5c5;border-radius:5px;}";
    document.body.appendChild(cdstyle);
  }
  var hcdiv = document.createElement("div");
  hcdiv.id = "hckj";
  hcdiv.style.cssText = "display:none";
  document.getElementById("cdkj").appendChild(hcdiv);

  for (var i = 0; i < ssyq.length; i++) {
    var jksp = document.createElement("span");
    jksp.innerHTML = ssyq[i].name;
    jksp.setAttribute("jkdz", ssyq[i].url);
    jksp.onclick = function() {
      tzurl(this.getAttribute("jkdz"));
    };
    document.getElementById("hckj").appendChild(jksp);
  }

  document.addEventListener("selectionchange", hccdyc);

} ();/*
 * @name: 划词菜单(搜索+翻译+转到)
 * @Author: 酷安@达蒙山
 * @version: 200418.22
 * @description: 划词搜索、划词翻译、网址跳转
 * @include: *
 */

!function() {

  /*搜索引擎和翻译接口，请按相同格式修改*/
  var ssyq = [

  {
    name: "百度搜索",
    url: "https://www.baidu.com/s?wd="
  },
  {
    name: "夸克搜索",
    url: "https://quark.sm.cn/s?q="
  },
  {
    name: "百度翻译",
    url: "https://fanyi.baidu.com/?tpltype=sigma#zd/zd/"
  },
  {
    name: "夸克翻译",
    url: "https://quark.sm.cn/api/rest?method=quark_fanyi.dlpage&schema=v2&format=html&entry=fanyi_jinshan#zd/zd/"
  }

  ],
  hcTimer,
  ljurl,
  text;

  function hccdyc() {
    clearTimeout(hcTimer);
    hcTimer = setTimeout(hccd, 750);
    if (document.getElementById("zdan")) {
      document.getElementById("zdan").parentNode.removeChild(document.getElementById("zdan"));
    }
  }
  function hccd() {
    text = window.getSelection().toString().trim();

    text ? (document.getElementById("hckj").style.display = "block", zdcd()) : document.getElementById("hckj").style.display = "none";

  }

  function tzurl(a, b) {
    b = b || text;
    ljurl = a + b;
    window.open(ljurl);
  }

  function zdcd() {
    var zdurl = text.match(/(https?:\/\/(\w[\w-]*\.)+[A-Za-z]{2,4}(?!\w)(:\d+)?(\/([\x21-\x7e]*[\w\/=])?)?|(\w[\w-]*\.)+(com|cn|org|net|info|tv|cc|gov|edu)(?!\w)(:\d+)?(\/([\x21-\x7e]*[\w\/=])?)?)/i)[0];

    if (zdurl) {
      var tzlj = document.createElement("span");
      tzlj.id = "zdan";
      tzlj.innerHTML = "\u8f6c\u5230";
      tzlj.addEventListener("click",
      function() {

        zdurl.indexOf("http") < 0 ? tzurl("https://", zdurl) : tzurl("", zdurl);

      });
      document.getElementById("hckj").appendChild(tzlj);
    }
  }

  if (!document.getElementById("cdkj")) {
    var cddiv = document.createElement("div");
    cddiv.id = "cdkj";
    cddiv.style.cssText = "display:block!important;width:100%;position:fixed;bottom:0px;z-index:9999999999;text-align:center;margin:4px auto;padding:4px;-webkit-tap-highlight-color:rgba(0,0,0,0);";
    document.body.appendChild(cddiv);
    var cdstyle = document.createElement("style");
    cdstyle.type = "text/css";
    cdstyle.innerHTML = "#cdkj span{display:inline-block;background:#6a6a6a;color:#fff;font-size:20px;line-height:24px;margin:4px;padding:4px;border:1px solid #c5c5c5;border-radius:5px;}";
    document.body.appendChild(cdstyle);
  }
  var hcdiv = document.createElement("div");
  hcdiv.id = "hckj";
  hcdiv.style.cssText = "display:none";
  document.getElementById("cdkj").appendChild(hcdiv);

  for (var i = 0; i < ssyq.length; i++) {
    var jksp = document.createElement("span");
    jksp.innerHTML = ssyq[i].name;
    jksp.setAttribute("jkdz", ssyq[i].url);
    jksp.onclick = function() {
      tzurl(this.getAttribute("jkdz"));
    };
    document.getElementById("hckj").appendChild(jksp);
  }

  document.addEventListener("selectionchange", hccdyc);

} ();
