//获取应用实例
const app = getApp()
var WXBizDataCrypt = require('../../utils/cryptojs/RdWXBizDataCrypt.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
   // var appId = "wx4f4bc4dec97d474b";
    var sessionKey = "tiihtNczf5v6AKRyjwEUhQ==";
    var encryptedData = "CiyLU1Aw2KjvrjMdj8YKliAjtP4gsMZM"
      + "QmRzooG2xrDcvSnxIMXFufNstNGTyaGS"
      + "9uT5geRa0W4oTOb1WT7fJlAC+oNPdbB+"
      + "3hVbJSRgv+4lGOETKUQz6OYStslQ142d"
      + "NCuabNPGBzlooOmB231qMM85d2/fV6Ch"
      + "evvXvQP8Hkue1poOFtnEtpyxVLW1zAo6"
      + "/1Xx1COxFvrc2d7UL/lmHInNlxuacJXw"
      + "u0fjpXfz/YqYzBIBzD6WUfTIF9GRHpOn"
      + "/Hz7saL8xz+W//FRAUid1OksQaQx4CMs"
      + "8LOddcQhULW4ucetDf96JcR3g0gfRK4P"
      + "C7E/r7Z6xNrXd2UIeorGj5Ef7b1pJAYB"
      + "6Y5anaHqZ9J6nKEBvB4DnNLIVWSgARns"
      + "/8wR2SiRS7MNACwTyrGvt9ts8p12PKFd"
      + "lqYTopNHR1Vf7XjfhQlVsAJdNiKdYmYV"
      + "oKlaRv85IfVunYzO0IKXsyl7JCUjCpoG"
      + "20f0a04COwfneQAGGwd5oa+T8yO5hzuy"
      + "Db/XcxxmK01EpqOyuxINew=="
    var iv = "r7BXXKkLb8qrSNn05n0qiA=="

    var pc = new WXBizDataCrypt(sessionKey)
    var data = pc.decryptData(encryptedData, iv)
    console.log('解密后 data: ', data)
    console.log('JSON.parse(data).openId: ', JSON.parse(data).openId)
    encryptedData = pc.encryptData(JSON.stringify(data), iv)
    console.log('加密后 data: ', encryptedData)
    data = pc.decryptData(encryptedData, iv)
    console.log('解密后 data: ', data)
    console.log('---------------------------------------')
    encryptedData=pc.encryptData("我爱你！！！", iv)
    console.log('加密后 data: ', encryptedData)
    data = pc.decryptData(encryptedData, iv)
    console.log('解密后 data: ', data)

  },


})
