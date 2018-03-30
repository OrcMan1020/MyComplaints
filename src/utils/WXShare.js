/**
 * Created by saix on 2018/3/30.
 */

const WX = () => {
    if(window.wx /*&& window.wx.readyState*/){
        return window.wx
    }

    return null;
}

const ShareUrl = (path)=>{
    return window.location.origin + window.location.pathname + path;
}

const ShareTimeline = (title, url, imgUrl) => {
    const wx = WX();
    // if(!wx) {
    //
    // }
    return new Promise((resolve, reject) => {
        if(wx == null) {
            reject("jssdk is not work!")
        }
        else {
            wx.onMenuShareTimeline({
                title: title,
                link: url,
                imgUrl: imgUrl,
                success: function (res) {
                    resolve("分享成功")
                },
                cancel: function (res) {
                    resolve('已取消');
                },
                fail: function (res) {
                    reject(JSON.stringify(res));
                }
            });
        }
    })
};

const ShareQQ = (title, desc, link, imgUrl) => {
    const wx = WX();
    return new Promise((resolve, reject) => {
        if (wx == null) {
            reject("jssdk is not work!")
        }
        else {
            wx.onMenuShareQQ({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,

                success: function (res) {
                    resolve("分享成功")
                },
                cancel: function (res) {
                    resolve('已取消');
                },
                fail: function (res) {
                    reject(JSON.stringify(res));
                }
            });
        }
    })
}


const ShareAppMessage = (title, desc, link, imgUrl) => {
    const wx = WX();
    return new Promise((resolve, reject) => {
        if (wx == null) {
            reject("jssdk is not work!")
        }
        else {
            wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    resolve("分享成功")
                },
                cancel: function () {
                    resolve('已取消');
                },
                fail: function (res) {
                    reject(JSON.stringify(res));
                }
            });
        }

    })


}

const ShareWeibo = (title, desc, link, imgUrl) => {
    const wx = WX();
    return new Promise((resolve, reject) => {
        if (wx == null) {
            reject("jssdk is not work!")
        }
        else {
            wx.onMenuShareWeibo({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    resolve("分享成功")
                },
                cancel: function () {
                    resolve('已取消');
                },
                fail: function (res) {
                    reject(JSON.stringify(res));
                }
            });
        }

    })


}

const ShareQZone = (title, desc, link, imgUrl) => {
    const wx = WX();
    return new Promise((resolve, reject) => {
        if (wx == null) {
            reject("jssdk is not work!")
        }
        else {
            wx.onMenuShareQZone({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    resolve("分享成功")
                },
                cancel: function () {
                    resolve('已取消');
                },
                fail: function (res) {
                    reject(JSON.stringify(res));
                }
            });
        }

    })


}

const RegisterShareData = (shareData) => {
    const wx = WX();
    //alert()
    if(wx === null) {
        return ;
    }
    wx.onMenuShareAppMessage(shareData);
    wx.onMenuShareTimeline(shareData);
    wx.onMenuShareQQ(shareData);
    wx.onMenuShareWeibo(shareData);
}

const UnregisterShareData = () => {
    return RegisterShareData(null)
}


export  {
    ShareTimeline,
    ShareAppMessage,
    ShareQQ,
    ShareQZone,
    ShareWeibo,
    ShareUrl,
    RegisterShareData,
    UnregisterShareData
}
