var anniu = document.getElementById("anniu");
var anniu2 = document.getElementById("anniu2");
var anniu3 = document.getElementById("anniu3");
var ybItem = document.getElementById("ybItem");
var moreItem = document.getElementById("moreItem");
var ybltem = document.getElementById("ybltem");
var moreltem =document.getElementById("moreltem");
var name5 =document.getElementById("name5");
var price5 =document.getElementById("price5");

let isInsideHead = false;
let isInsideMore = false;
var bool=false;
var bool2=false;
var bool3=false;

anniu.addEventListener(
    "click",
    function() {
        isInsideHead = false;
        isInsideMore = false;
        debugger
        if (bool){
            document.getElementById("yue2").style.color = "#666";
            document.getElementById("yue1").style.color = "#666";
            document.getElementById("name").style.color = "#666";
            document.getElementById("price").style.color = "#666";
            document.getElementById("yue2").style.color = "#E2231A";
            document.getElementById("yue1").style.color = "#E2231A";
            document.getElementById("moreItem").style.display="block";
            document.getElementById('ybItem').classList.remove('red-border');
            bool = false;
        }else {
            document.getElementById("yue2").style.color = "#E2231A";
            document.getElementById("yue1").style.color = "#E2231A";
            document.getElementById("moreItem").style.display = "none";
            document.getElementById('ybItem').classList.add('red-border');
            bool =true;
        }
        name5.innerHTML ="无忧洗3双"
        price5.innerHTML ="￥69";
    },
    false
);
anniu2.addEventListener(
    "click",
    function() {
        isInsideHead = false;
        isInsideMore = false;
        debugger
        if (bool3){
            document.getElementById("yue2").style.color = "#666";
            document.getElementById("yue1").style.color = "#666";
        document.getElementById("name").style.color = "#666";
        document.getElementById("price").style.color = "#666";
        document.getElementById("moreItem").style.display="block";
        document.getElementById('ybItem').classList.remove('red-border');
        bool3 = false;
        }else {
            document.getElementById("yue2").style.color = "#666";
            document.getElementById("yue1").style.color = "#666";
            document.getElementById("name").style.color = "#E2231A";
            document.getElementById("price").style.color = "#E2231A";
            document.getElementById("moreItem").style.display = "none";
            document.getElementById('ybItem').classList.add('red-border');
            bool3 =true;
        }
        name5.innerHTML ="无忧洗5双"
        price5.innerHTML ="￥109";
    },
    false
);

anniu3.addEventListener(
    "click",
    function() {
        isInsideHead = false;
        isInsideMore = false;
        if (bool2){
        document.getElementById("name2").style.color = "#666";
        document.getElementById("price2").style.color = "#666";
        document.getElementById("moreltem").style.display="block";
        document.getElementById('ybltem').classList.remove('red-border');
        bool2 = false;
        }else {
            document.getElementById("name2").style.color = "#E2231A";
            document.getElementById("price2").style.color = "#E2231A";
            document.getElementById("moreltem").style.display = "none";
            document.getElementById('ybltem').classList.add('red-border');
            bool2 =true;
        }
    },
    false
);
ybItem.addEventListener(
    "mouseenter",
    function() {
        isInsideHead = true;
        isInsideMore = false;
        document.getElementById("moreItem").style.display = "block";

    },
    false
);

ybItem.addEventListener(
    "mouseleave",
    function() {

        isInsideHead = false;
        setTimeout(function() {
            // 如果已经移到更多里面，则阻止它关闭
            if (!isInsideMore) {
                document.getElementById("moreItem").style.display = "none";
            }
        }, 500);
    },
    false
);

moreItem.addEventListener(
    "mouseenter",
    function() {
        isInsideHead = false;
        isInsideMore = true;
        document.getElementById("moreItem").style.display = "block";
    },
    false
);

moreItem.addEventListener(
    "mouseleave",
    function() {
        isInsideMore = false;

        setTimeout(function() {
            // 如果已经移到更多里面，则阻止它关闭
            if (!isInsideHead) {
                document.getElementById("moreItem").style.display = "none";
            }
        }, 500);
    },
    false
);

ybltem.addEventListener(
    "mouseenter",
    function() {
        isInsideHead = true;
        isInsideMore = false;
        document.getElementById("moreltem").style.display = "block";
    },
    false
);
ybltem.addEventListener(
    "mouseleave",
    function() {

        isInsideHead = false;

        setTimeout(function() {
            // 如果已经移到更多里面，则阻止它关闭
            if (!isInsideMore) {
                document.getElementById("moreltem").style.display = "none";
            }
        }, 500);
    },
    false
);

moreltem.addEventListener(
    "mouseenter",
    function() {
        isInsideHead = false;
        isInsideMore = true;
        document.getElementById("moreltem").style.display = "block";
    },
    false
);

moreltem.addEventListener(
    "mouseleave",
    function() {
        isInsideMore = false;

        setTimeout(function() {
            // 如果已经移到更多里面，则阻止它关闭
            if (!isInsideHead) {
                document.getElementById("moreltem").style.display = "none";
            }
        }, 500);
    },
    false
);

//通过JS将复选框变成单选框，选中可以取消
function checkedThis(obj){
    var boxArray = document.getElementsByName('test');
    for(var i=0;i<=boxArray.length-1;i++){
        if(boxArray[i]==obj && obj.checked){
            boxArray[i].checked = true;
        }else{
            boxArray[i].checked = false;
        }
    }
}