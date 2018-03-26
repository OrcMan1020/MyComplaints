/**
 * Created by saix on 2018/3/22.
 */

const TEST = "test";
const API_CONFIG = `https://weitousuh5.taixintech.com/wetousubackendV1/api/`;
const API_CONFIG_OLD = `https://dev.taixintech${TEST}.com/wetousutest/api/`;

const isTesting = true;

const URL = (path) => {
    return `${API_CONFIG}${path}`;
};

const OLDURL = (path) => {
    return `${API_CONFIG_OLD}${path}`;
};

const fetchData = (fetchPromise,  json=true)=> {
    return fetchPromise
        .then(res=>{
            if(!(res.status >= 200 && res.status < 300)){
                if(res.status>=500){
                    throw new Error('后台维护中');
                }else{
                    throw new Error('请稍后再试');
                }
            }

            return json?res.json():res.text();
        })
        .catch(e=>{
            throw e;
        })
}

const UploadFile = (file, type) => {
    let formData = new FormData();
    formData.append("file", file);
    return fetchData(fetch(URL("uploadFile?type="+(type && type.length>0?type : "")) , {
        method: 'POST',
        headers: {
        },
        credentials: isTesting?"":'include',
        body: formData
    }), false);

};

const SubmitComplaint = complaint => {
    return fetchData(fetch(URL("comaplainItem") , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        credentials: isTesting?"":'include',
        body: complaint
    }));
};

const SubmitComplainFeedBack = feedback => {
    return fetchData(fetch(URL("comaplainFeedBack") , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        credentials: isTesting?"":'include',
        body: feedback
    }));
};

const GetComplainItems = (openId, keyword)=>{
    return fetchData(fetch(URL("getComplainItems?openId=" + openId) , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        credentials: isTesting?"":'include',

    }));
};

const GetComplainItem = (complainNo)=>{
    return fetchData(fetch(URL("getComplainItem?complainNo=" + complainNo) , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        credentials: isTesting?"":'include',

    }));
};

const GetComplainFeedBacks = complainNo => {
    return fetchData(fetch(URL("getComplainFeedBacks?complainNo=" + complainNo) , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        credentials: isTesting?"":'include',

    }));
};

const GetUserInfo = openId => {
    return fetchData(fetch(URL("user?openId=" + openId) , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        credentials: isTesting?"":'include',

    }));
};

const SetUserInfo = userInfo => {
    return fetchData(fetch(URL("user") , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body : userInfo,
        credentials: isTesting?"":'include',

    }));
}

const GetJSSDKConfig = url => {
    return fetchData(fetch(URL("wechatParam?url=" + url) , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        credentials: isTesting?"":'include',

    }));
};

export {
    UploadFile,
    SubmitComplaint,
    SubmitComplainFeedBack,
    GetJSSDKConfig,
    GetComplainItem,
    GetComplainFeedBacks,
    GetComplainItems,
}