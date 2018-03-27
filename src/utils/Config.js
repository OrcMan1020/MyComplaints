/**
 * Created by saix on 2018/3/20.
 */

const API_CONFIG = "https://dev.taixintech.com/wetousutest/api";

/*
 1.发起投诉，2审核通过，3商家处理中，4商家回复，5补充投诉，6,确认完成并评价
 */
const GetStatusIcon = status => {
    let s = parseInt(status);
    switch (s) {
        case 1:
            return null;
        case 2:
            return null;
        case 3:
            return null;
        case 4:
            return null;
        case 5:
            return null;
        case 6:
            return null;
        default:
            return null;


    }
}

const ShareIcons = [
    {icon : './img/icon/wechat.png'},
    {icon : './img/icon/weibo.png'},
    {icon : './img/icon/friend.png'},
    {icon : './img/icon/qq.png'},

];

export {
    API_CONFIG,
    GetStatusIcon,
    ShareIcons
};
