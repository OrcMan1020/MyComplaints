/**
 * Created by saix on 2018/3/22.
 */

const TEST = "";
const API_CONFIG = `https://dev.taixintech${TEST}.com/wetousutest/api/`;
//"https://dev.taixintech.com/wetousutest/api/uploadFile"

const URL = (path) => {
    return `${API_CONFIG}${path}`;
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
        body: formData
    }), false);

};

const SubmitComplaint = complaint => {
    return fetchData(fetch(URL("comaplainItem") , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: complaint
    }));
};

const SubmitComplainFeedBack = feedback => {
    return fetchData(fetch(URL("comaplainFeedBack") , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: feedback
    }));
};

const GetComplainItems = (openId, keyword)=>{
    return fetchData(fetch(URL("getComplainItems?openId=" + openId) , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }));
};

const GetComplainItem = (complainNo)=>{
    return fetchData(fetch(URL("getComplainItem?complainNo=" + complainNo) , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }));
};

const GetComplainFeedBacks = complainNo => {
    return fetchData(fetch(URL("getComplainFeedBacks?complainNo=" + complainNo) , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }));
};

const GetUserInfo = openId => {
    return fetchData(fetch(URL("user?openId=" + openId) , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }));
};

const SetUserInfo = userInfo => {
    return fetchData(fetch(URL("user") , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body : userInfo
    }));
}

const GetJSSDKConfig = url => {
    return fetchData(fetch(URL("wechatParam?url=" + url) , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }));
};

export {
    UploadFile,
    SubmitComplaint,
    SubmitComplainFeedBack,
    GetJSSDKConfig,
}