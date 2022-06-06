import "core-js";
import { TTLOGIN, TTLOGIN_OPTIONS } from "../types/tianti-login";
import { BASE_CONFIG } from "./config";
import {
  _Utils,
  _Ajax,
  _Toast,
  _Cookie,
  _CountDown,
  _BindEvents,
  isMobile
} from "./util";
import { renderStyle } from "./style";
// import bgpng from "./assets/m/img/bg.png";
// console.log(bgpng);
// import { test } from "@shared/pkg";
// console.log(test);

const $ = window.$;
// jquery未引入抛异常
if (!$ || ($ && $().jquery !== "1.8.3")) {
  throw new Error("依赖库jquery1.8.3缺失");
}

let _events = null; //公共对象实例
class TTLogin implements TTLOGIN {
  constructor(options: TTLOGIN_OPTIONS) {
    if (this.newed) {
      throw new Error("登录插件只能实列化一次");
    }
    this.newed = true;
    const config: TTLOGIN_OPTIONS = Object.assign(BASE_CONFIG, options);
    this._config = config;
    _createLoginDom(config);
    _events = new _BindEvents(config); //new一个事件中心对象
  }
  private newed: boolean;
  _config: TTLOGIN_OPTIONS;
  show() {
    _events.showDialog();
  }
  close() {
    _events.closeDialog();
  }
  on(name, fn) {
    _events.subscribe[name] && _events.add(name, fn);
  }
  toast(name) {
    _events._toast.show(name);
  }
  setCookie(name, value) {
    _events._cookie.setCookie(name, value);
  }
  getCookie(name) {
    return _events._cookie.getCookie(name);
  }
  delCookie(name) {
    _events._cookie.delCookie(name);
  }
}

function _createLoginDom(config: TTLOGIN_OPTIONS) {
  const styles = renderStyle(config.useStyle);

  const htmls = `
  <div id="_TTLogin" class=${styles._TTLogin} style="display: none;">
    <div class="${styles._TTLogin_mask}"></div>
    <div class="${styles._TTLogin_dialog}">
      <div class="_TTLogin_content">
        <div class="${styles._TTLogin_form_item}">
          <i class="${styles._TTLogin_icon} ${styles._TTLogin_i_phone}"></i>
          <input type="text" class="${styles._TTLogin_phone_input}" maxlength="11" placeholder="${config.phonePlaceholder}"
           oninput="value=value.replace(/[^\\d]/g,'')">
        </div>
        <div class="${styles._TTLogin_form_item}">
          <i class="${styles._TTLogin_icon} ${styles._TTLogin_i_captcha}"></i>
          <input type="text" class="${styles._TTLogin_captcha_input}" maxlength="6" placeholder="${config.captchaPlaceholder}"
          oninput="value=value.replace(/[^\\d]/g,'')">
          <button class="${styles._TTLogin_btn_getCaptcha}">发送验证码</button>
        </div>
        <div class="${styles._TTLogin_rule}">
          <input type="checkbox" checked="" id="TTLoginCheckBox">
          <label for="TTLoginCheckBox"></label>
          <span>
            已阅读并同意 <a href="https://static.100bt.com/yducaccount/wap/html/protocol_game.html" 
            target="_blank">
            用户协议</a> 和 <a href="https://static.100bt.com/yducaccount/wap/html/privacy_game.html" target="_blank">隐私协议</a>
          </span>
          <span class="${styles.tips}" data-title="未注册的手机号码，通过短信验证后将自动注册天梯账号，视为您同意并遵守用户协议和隐私协议。" data-dir="top">
          </span>
        </div>
        <button class="${styles._TTLogin_btn_login}"></button>
      </div>
      <button class="${styles._TTLogin_close}"></button>
    </div>
  </div>`;
  const toast = `<div class="${styles._TTLogin_toast}"></div>`;
  $("body").append(htmls);
  $("body").append(toast);

  new Promise(resolve => resolve(1)).then(res => console.log(res));
}

export default TTLogin;
