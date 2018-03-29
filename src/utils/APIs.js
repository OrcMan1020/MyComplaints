/**
 * Created by saix on 2018/3/22.
 */
import ImageCompressor from 'image-compressor.js';

const TEST = "test";
const API_CONFIG = ` https://weitousuh5.taixintech.com/wetousubackendV1/api/`;
const API_CONFIG_OLD = `https://dev.taixintech${TEST}.com/wetousutest/api/`;
const IMAGE_URL = fileName => {
    fileName = fileName || "";
    if (fileName.length === 0) {
        return null;
    }
    if(fileName.indexOf('http') === 0 ){
        return fileName;
    }
    return `https://weitousuh5.taixintech.com/wetousuPhoto/${fileName}`;
}
const isTesting = false;

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

    return new Promise((resolve, reject)=>{
        new ImageCompressor(file, {
            quality: .6,
            success(result) {
                resolve(result);
            },
            error(e) {
                reject(e);
                console.log(e.message);
            },
        });
    }).then(result=>{
        const formData = new FormData();
        formData.append('file', result);
        return fetchData(fetch(URL("uploadFile?type="+(type && type.length>0?type : "")) , {
            method: 'POST',
            headers: {
            },
            credentials: isTesting?"":'include',
            body: formData
        }), false);
    });



};

const UploadFiles = (filesInfo) => {
    let promises = [];
    filesInfo.forEach(el=>{
        let file = el.file.file;
        let type = el.type;
        promises.push(
            UploadFile(file, type)
        );
    });
    return Promise.all(promises);
}


const SubmitComplaint = complaint => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    return fetchData(fetch(URL('comaplainItem') , {
        method: 'POST',
        headers: myHeaders,
        credentials: isTesting?"":'include',
        body: JSON.stringify(complaint)
    }));
};

const SubmitComplainFeedBack = feedback => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    return fetchData(fetch(URL("comaplainFeedBack") , {
        method: 'POST',
        headers:myHeaders,
        credentials: isTesting?"":'include',
        body: JSON.stringify(feedback)
    }));
};

const GetComplainItems = (unionId, keyword)=>{
    return fetchData(fetch(URL("getComplainItems?unionId=" + unionId) , {
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

const GetUserInfo = unionId => {
    return fetchData(fetch(URL("user?unionId=" + unionId) , {
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
        body : JSON.stringify(userInfo),
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

const GetHottestComplains = (page, size, searchKey) => {
    return fetchData(fetch(URL(`getHottestComplains?page=${page}&size=${size}&search=${searchKey}`) , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        credentials: isTesting?"":'include',

    }));
}

export {
    UploadFile,
    UploadFiles,
    SubmitComplaint,
    SubmitComplainFeedBack,
    GetJSSDKConfig,
    GetComplainItem,
    GetComplainFeedBacks,
    GetComplainItems,
    GetUserInfo,
    GetHottestComplains,
    IMAGE_URL,
}