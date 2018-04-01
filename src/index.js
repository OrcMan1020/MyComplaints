import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {GetJSSDKConfig, GetUserInfoById}  from './utils/APIs';
import {Toast} from "antd-mobile";

import qs from 'query-string';
import cookie from 'react-cookies'


let url = window.location.href.split('#')[0];
let search = qs.parse(window.location.search);
let openId = search["openId"] || "123456";
let unionId = cookie.load("unionId") || "oqzX704sS2T9xSNF54SsI_NErdlo";
// using 123456 as open id for testing
window.localStorage.setItem("openId", openId||"123456");
window.localStorage.setItem("unionId", unionId);

GetJSSDKConfig(url) //TODO
    .then(data => {
        window.wx.config({
            debug: false,
            appId: data.appid,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
                'checkJsApi',//判断当前客户端版本是否支持指定JS接口
                'onMenuShareTimeline',//分享给好友
                'onMenuShareAppMessage',//分享到朋友圈
                'onMenuShareQQ', // QQ
                'onMenuShareWeibo', //
                'onMenuShareQZone', //
                'openLocation',
                'chooseImage',
                "showMenuItems"
            ]
        });
        window.wx.error(function(res){

            console.log(res)

        });

        window.wx.ready(function(){

            console.log("ready")

            window.wx.checkJsApi({
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'chooseImage'
                ],
                success: function (res) {
                    // alert(JSON.stringify(res));
                    window.wx.readyState = true;
                }
            });

        });
    })


Toast.loading("正在登录, 请稍等", 60);
GetUserInfoById(1).then(userInfo=>{
    Toast.hide();
    window.localStorage.setItem("unionId", userInfo.unionId || "oqzX704sS2T9xSNF54SsI_NErdlo");
    ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));

}).catch(e =>{
    Toast.hide();
    Toast.fail("登录失败!!")
})


registerServiceWorker();



