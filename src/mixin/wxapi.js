import wx from 'weixin-js-sdk'
import { http } from '../api/config'

// TODO impl all
export default {
    isWeixin() {
        const ua = window.navigator.userAgent.toLowerCase()
        if (ua.indexOf('micromessenger') != -1) {
            return true
        } else {
            // TODO while not weixin
            return false
        }
    },
    wxAuth() {
        let localToken = localStorage.getItem('wx.token')
        if (!localToken) {
            let token = this.$route.query.token
            if(token) {
                localStorage.setItem('wx.token', token)
            } else {
                window.location.href = "/wx/oauth" + window.location.href
            }
        }
    },
    wxInit(callback) {
        let data = {
            params: {
                reqUrl: window.location.href
            }
        }
        http.post("/wx/info", data).then(resp => {
            wx.config({
                debug: true,
                appId: resp.data.appId,
                timestamp: resp.data.timestamp,
                nonceStr: resp.noncestr,
                signature: resp.data.signature,
                jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeLine']
            })
            wx.ready(res => {
                // TODO callback
                if (callback) callback()
            })
        })
    },
    shareTimeline(option) {
        wx.onMenuShareTimeline({
            title: option.title,
            link: option.link,
            imgUrl: option.imgUrl,
            success() {
                option.success()
            },
            cancel() {
                option.error()
            }
        })
    }
}