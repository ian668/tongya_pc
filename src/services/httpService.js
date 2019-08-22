import Axios from  'axios-observable';
const baseURL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')?'http://localhost:3000':window.location.protocol+'//'+window.location.host;
export function fetchData(url){
    var header = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    };
    return Axios.request({
        method:'get',
        baseURL:baseURL,
        withCredentials:true,
        url:url,
        timeout: 30000,
        headers: header,
        responseType:'json'
    });
    
}

export function submitData(url,data){
    var header = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    };
    return Axios.request({
        method:'post',
        baseURL:baseURL,
        withCredentials:true,
        url:url,
        data: data,
        timeout: 30000,
        headers: header,
        responseType:'json'
    });
}