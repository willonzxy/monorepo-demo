import type { TTLOGIN_OPTIONS } from "../types/tianti-login";
import { renderStyle } from "./style";
const $ = window.$;

export const isMobile = function () {
  return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
    navigator.userAgent
  );
};

// export const loadStyle = (type?: "m" | "pc") => {
//   type = type || (isMobile() ? "m" : "pc");
//   const stylesheet = {
//     pc: "//resource.172tt.com/plugins/ttLogin_v2/ttLogin.css",
//     m: "//resource.172tt.com/plugins/ttLogin_v2/m/ttLogin.m.css"
//   };
//   $("head").append(
//     "<link rel='stylesheet' href='" +
//       stylesheet[type] +
//       "?__rev=" +
//       new Date().getTime() +
//       "'>"
//   );
// };

export const _Utils = {
  //防抖，给可能触发连续点击的操作加
  debounce: function (fn: Function, wait: number) {
    var timer = null;
    return function () {
      var context = this;
      var args = arguments;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, wait);
    };
  }
};

export const _Ajax = function (
  toastFn: (name: string) => void,
  errorTips: string
) {
  this.inBT = document.domain.indexOf("100bt") >= 0;

  this.server = this.inBT ? "//events.100bt.com" : "//events.172tt.com/tianti";
  // this.server = 'http://10.18.6.55:8099/tianti';
  this.api = {
    getCaptcha: "/login/captcha",
    login: "/login/phoneLogin"
  };
  this.BTapi = {
    getCaptcha: "/login/captcha.jsonp",
    login: "/login/phoneLogin.jsonp"
  };
  this._toastFn = toastFn;
  this._toast = this.errorTips = errorTips;
};
_Ajax.prototype = {
  fetch: function (
    api: "getCaptcha" | "login",
    params,
    success?: (res: any) => void,
    error?: (res: any) => void
  ) {
    var aipMap = this.inBT ? this.BTapi : this.api;
    const that = this;
    $.ajax({
      url: this.server + aipMap[api],
      data: params,
      type: "get",
      timeout: 5000,
      dataType: this.inBT ? "jsonp" : undefined,
      success: function (res) {
        if (!res.code) {
          success && success(res);
        } else {
          that._toastFn(res.message);
        }
      },
      error: function (res) {
        error && error(res);
        that._toastFn(that.errorTips);
      }
    });
  }
};

export const _Toast = function (
  $selector: JQuery<HTMLElement>,
  fadeTime: number
) {
  this.$toast = $selector;
  this.timeoutTime = 2000;
  this.timeout = null;
  this.fadeTime = fadeTime;
};
_Toast.prototype = {
  show: function (msg, time) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    if (msg) {
      const me = this;
      var t = time || this.timeoutTime;
      this.$toast.text(msg).fadeIn(me.fadeTime);
      this.timeout = setTimeout(function () {
        me.$toast.fadeOut(me.fadeTime);
      }, t);
    }
  }
};

/**
 * 内部类
 * 设置cookie
 */
export const _Cookie = function () {};
_Cookie.prototype = {
  // 存cookie
  setCookie: function (name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + escape(value) + ";expires=" + exp.toUTCString();
  },

  //读取cookies
  getCookie: function (name) {
    var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
    else return null;
  },

  //delCookie
  delCookie: function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = this.getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
  }
};

/**
 * 内部类
 * 验证码倒数类
 */
export const _CountDown = function ($selector: JQuery<HTMLElement>) {
  this.$btn = $selector;
  this.btnText = this.$btn.text();
  this.limit = 60;
  this.intervalTime = 1000;
  this.now = this.limit;
  this.interval = null;
};
_CountDown.prototype = {
  //倒计时
  run: function () {
    this.$btn.attr("disabled", true);
    this.interval = setInterval(
      this.intervalHandler.bind(this),
      this.intervalTime
    );
  },
  //条件判断
  intervalHandler: function () {
    if (this.now < 0) {
      this.renew();
      return;
    }
    this.$btn.text(this.now-- + "S");
  },
  //重置计时器
  renew: function () {
    clearInterval(this.interval);
    this.now = this.limit;
    this.$btn.text(this.btnText);
    this.$btn.attr("disabled", false);
  }
};

/**
 * 内部类
 * 事件中心类
 */
export const _BindEvents = function (config: TTLOGIN_OPTIONS) {
  const styles = renderStyle(config.useStyle);
  this.styles = styles;
  this.$el = $("#_TTLogin");
  this.$mask = this.$el.find("." + styles._TTLogin_mask);
  this.$phone = this.$el.find("." + styles._TTLogin_phone_input);
  this.$icon_phone = this.$el.find("." + styles._TTLogin_i_phone);
  this.$captcha = this.$el.find("." + styles._TTLogin_captcha_input);
  this.$icon_captcha = this.$el.find("." + styles._TTLogin_i_captcha);
  this.$btn_getCaptcha = this.$el.find("." + styles._TTLogin_btn_getCaptcha);
  this.$btn_checkBox = this.$el.find("#TTLoginCheckBox");
  this.$btn_login = this.$el.find("." + styles._TTLogin_btn_login);
  this.$btn_close = this.$el.find("." + styles._TTLogin_close);
  this.config = config;
  this._countDown = new _CountDown(this.$btn_getCaptcha);
  this._toast = new _Toast($("." + styles._TTLogin_toast), config.fadeTime);
  this._ajax = new _Ajax(this._toast.show, config.requestErrTips);
  this._cookie = new _Cookie();
  this.init();
  this.subscribe = {
    // 回调事件调度器
    succLogined: $.Callbacks(), //登录成功
    closeDialog: $.Callbacks() //关闭弹窗
  };
};
_BindEvents.prototype = {
  //事件绑定
  init: function () {
    const config = this.config;
    config.clickMaskClose &&
      this.$mask.on("click", this.closeDialog.bind(this));

    config.clickclose ? this.$btn_close.hide() : this.$btn_close.show();

    this.$btn_close.on("click", this.closeDialog.bind(this));

    // this.$phone.on("input", this.inputValidate.bind(this));
    // this.$captcha.on("input", this.inputValidate.bind(this));
    config.inputColorChange && this.bindInputCSS();

    this.$btn_getCaptcha.on("click", this.getCaptchaHandler.bind(this));
    this.$btn_login.on("click", this.loginHandler.bind(this));
  },
  //数字输入校验器
  inputValidate: function (e) {
    var me = this;
    var $target = $(e.target);
    var val = $target.val() as string;
    if (!/^\d*$/.test(val)) {
      val = me.backInput(val);
      $target.val(val);
    }
  },

  bindInputCSS: function () {
    this.$phone.on("focus", this.focusPhone.bind(this));
    this.$phone.on("blur", this.blurPhone.bind(this));
    this.$captcha.on("focus", this.focusCaptcha.bind(this));
    this.$captcha.on("blur", this.blurCaptcha.bind(this));
  },
  //改变样式 start
  focusPhone: function () {
    const styles = this.styles;
    this.$phone.removeClass(styles.err).addClass(styles.actived);
    this.$icon_phone.removeClass(styles.err).addClass(styles.actived);
  },
  blurPhone: function () {
    const styles = this.styles;
    this.$phone.removeClass(styles.actived);
    this.$icon_phone.removeClass(styles.actived);
  },
  focusCaptcha: function () {
    const styles = this.styles;
    this.$captcha.removeClass(styles.err).addClass(styles.actived);
    this.$icon_captcha.removeClass(styles.err).addClass(styles.actived);
    this.$captcha.attr("placeholder", "请输入验证码");
  },
  blurCaptcha: function () {
    const styles = this.styles;
    this.$captcha.removeClass(styles.actived);
    this.$icon_captcha.removeClass(styles.actived);
  },
  errPhone: function () {
    const styles = this.styles;
    const config = this.config;
    if (config.inputColorChange) {
      this.$phone.val("");
      this.$phone.addClass(styles.err);
      this.$icon_phone.addClass(styles.err);
    }
  },
  errCaptcha: function () {
    const styles = this.styles;
    const config = this.config;
    if (config.inputColorChange) {
      this.$captcha.val("");
      this.$captcha.addClass(styles.err);
      this.$icon_captcha.addClass(styles.err);
      this.$captcha.attr("placeholder", "请输入正确的验证码");
    }
  },
  //改变样式 end

  //退格
  backInput: function (str) {
    return str.substring(0, str.length - 1);
  },
  //获取验证码
  getCaptchaHandler: function () {
    const config = this.config;
    var phone = this.$phone.val();
    if (!phone || !config.phoneReg.test(phone)) {
      this.errPhone();
      // _events._toast.show(_obj._config.phoneErrTip);
      return false;
    }

    var that = this;
    this._ajax.fetch(
      "getCaptcha",
      {
        mobile: phone
      },
      function (res) {
        if (res.code == 0) {
          that._countDown.run();
          that._toast.show(config.captchaSendSucc);
        } else {
          that._toast.show(res.message);
        }
      }
    );

    const category = config.category;
    const pageType = config.pageType;
    const _hmt = window._hmt;
    typeof _hmt !== "undefined" &&
      _hmt.push([
        "sendsms1",
        category,
        category + pageType,
        category + pageType + "登录-发送验证码"
      ]);
  },

  //登录
  loginHandler: _Utils.debounce(function () {
    // 1s 内只能点击1次登陆按钮
    const config = this.config;
    if (!config.actType) {
      this._toast.show("Err：非法的actType");
      return false;
    }

    var me = this;
    var phone = this.$phone.val();
    var captcha = this.$captcha.val();
    var isChecked = this.$btn_checkBox.is(":checked");

    if (!phone || !config.phoneReg.test(phone)) {
      this.errPhone();
      // _events._toast.show(_obj._config.phoneErrTip);
      return false;
    }
    if (!captcha || !config.captchaReg.test(captcha)) {
      this.errCaptcha();
      // _events._toast.show(_obj._config.captchaErrTip);
      return false;
    }
    if (!isChecked) {
      this._toast.show(config.isNotCheckedTip);
      return false;
    }

    this._ajax.fetch(
      "login",
      {
        mobile: phone,
        captcha: captcha,
        actType: config.actType,
        token: true
      },
      function (res) {
        //me._cookie.setCookie('TT_LOGIN_COMMON',JSON.stringify(res.data))
        this._toast.show(config.loginSucc);
        me.fire("succLogined", res);
        me.closeDialog();
      }
    );

    const category = config.category;
    const pageType = config.pageType;
    const _hmt = window._hmt;
    typeof _hmt !== "undefined" &&
      _hmt.push([
        "login",
        category,
        category + pageType,
        category + pageType + "登录账号"
      ]);
  }, 100),

  //打开弹窗
  showDialog: function () {
    const config = this.config;
    this.$el.fadeIn(config.fadeTime);
  },
  //关闭弹窗
  closeDialog: function () {
    const config = this.config;
    this.$el.fadeOut(config.fadeTime);
    this._countDown.renew();
    this.$phone.val("");
    this.$captcha.val("");
    this._toast.$toast.hide();
    this.fire("closeDialog", "");
  },
  //订阅事件
  add: function (name, fn) {
    this.subscribe[name].add(fn);
  },
  //发布事件
  fire: function (name, data) {
    this.subscribe[name].fire(data);
  }
};
