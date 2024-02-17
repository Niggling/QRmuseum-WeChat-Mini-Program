// pages/home/show/show.js

Page({
  data: {
    id: '',
    showUploadTip: false,
    haveGetCodeSrc: false,
    envId: '',
    codeSrc: '',
    currentTab: 'introduction',
    artworkInfo: {
      name: '唐卡示例',
      createTime: '2023-09-03',
      type: '藏画',
      size: '100cm×70cm',
      information: '服务器请求失败，请联系管理员。',
      picturePath:'',
    },
    authorInfo: {
      name: '启加',
      information: '启加大师（1939年10月20日—2007年12月13日），中国青海省黄南州热贡人，中国工艺美术大师，国家级非物质文化遗产项目热贡艺术代表性传承人。',
      picturePath:'',
    },
    scale: 1,
    showPopup: false, // 控制图片浮动层的显示与隐藏
  },
  
  showImagePopup() {
    this.setData({
      showPopup: true,
    });
  },

  hideImagePopup() {
    this.setData({
      showPopup: false,
    });
  },


  onLoad: function (options) {
    this.setData({
      id: options.id // 将传递的参数设置到数据中
    });
    // 在这里可以根据 type 向后端请求数据并进行相应的处理
    this.getExById(this.data.id);
  },

  navigateBack() {
    wx.navigateBack({
      delta: 1, // 返回的页面数
    });
  },

  getExById: function (id) {
    // 构建请求的URL，将参数type动态添加到URL中
    const url = 'http://localhost:8080/exInformation/selectExInformationAndAuthor?id=' + id;
  
    // 发送 HTTP 请求到后端
    wx.request({
      url: url,
      method: 'GET',
      success: (res) => {
        console.log('后端响应：', res.data);
        // 在这里更新页面的数据
        const { data } = res.data;
        this.setData({
          'artworkInfo.name': data.name,
          'artworkInfo.createTime': data.createTime,
          'artworkInfo.type': data.type,
          'artworkInfo.size': data.size,
          'artworkInfo.information': data.information,
          'artworkInfo.picturePath': data.picturePath,
          'authorInfo.name': data.authorName,
          'authorInfo.information': data.authorIntroduction,
          'authorInfo.picturePath': data.authorPicturePath,
        });
      },
      fail: (error) => {
        console.error('请求失败：', error);
        // 在这里处理请求失败的情况
      }
    });
  },
  

  switchTab(event) {
    const tab = event.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab,
    });
  },

  // showQrCode() {
  //   // 生成二维码
  //   // this.generateQRCode(id);
  // },

  // generateQRCode(id) {
  //   const qrCodeCanvasId = 'qrCodeCanvas'; // canvas组件的ID
  //   const qrCodeText = 'https://your-miniapp-url.com/product?id=' + id; // 小程序页面的URL，携带产品ID参数

  //   // 调用qrcode.js库的API生成二维码
  //   QRCode.api.draw(qrCodeText, {
  //     ctx: wx.createCanvasContext(qrCodeCanvasId),
  //     width: 200, // 二维码宽度
  //     height: 200, // 二维码高度
  //   });
  // },


  playVoiceIntroduction() {
    // 处理语音介绍的逻辑...
  },

  onScroll(e) {
    const { scrollTop } = e.detail;
    const scale = 1 - 0.005 * scrollTop;
    this.setData({
      scale: scale < 0.7 ? 0.7 : scale,
    });
  },

  getCodeSrc() {
    wx.showLoading({
      title: '',
    });
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getMiniProgramCode',
        id: this.data.id // 使用 this.data.id 获取参数
      }
    }).then((resp) => {
      console.log('传参成功，resp为',resp.result)
      this.setData({
        haveGetCodeSrc: true,
        codeSrc: resp.result
      });
      wx.hideLoading();
    }).catch((e) => {
      console.log('传参成功',this.data.id)
      console.log(e);
      this.setData({
        showUploadTip: true
      });
      wx.hideLoading();
    });
  },

  // onGetQrcode: function() {
  //   wx.showLoading({
  //     title: '生成中...',
  //   });
    
    // onGetQrcode: function() {
    //   wx.showLoading({
    //     title: '生成中...',
    //   });
  
    //   // 调用 getCodeSrc 方法
    //   this.getCodeSrc();
    // },
  
    // // 调用云函数生成小程序码的逻辑
    // getCodeSrc() {
    //   wx.cloud.callFunction({
    //     name: 'getMiniProgramCode',
    //     data: {},
    //     success: res => {
    //       console.log('[云函数] [qrcode]: ', res.result);
  
    //       const fileId = res.result;
    //       // TODO: 处理 fileId，例如显示小程序码等操作
  
    //       wx.hideLoading();
    //     },
    //     fail: err => {
    //       console.error('[云函数] [qrcode] 调用失败', err);
    //       wx.showToast({
    //         icon: 'none',
    //         title: '生成失败，请重试',
    //       });
    //       wx.hideLoading();
    //     }
    //   });
    // },
  
  clearCodeSrc() {
    this.setData({
      haveGetCodeSrc: false,
      codeSrc: ''
    });
  }




});
