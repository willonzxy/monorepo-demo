export interface TTLOGIN_OPTIONS {
  /** 用于区分用户当前参与的是哪个活动 */
  actType: string;
  /** 手机号校验规则 */
  phoneReg?: RegExp;
  /** 验证码校验规则 */
  captchaReg?: RegExp;
  /** 登录框placeholder */
  phonePlaceholder?: string;
  /** 验证码框placeholder */
  captchaPlaceholder?: string;
  /** 验证码发送成功提示语 */
  captchaSendSucc?: string;
  /** 手机号格式错误提示语 */
  phoneErrTip?: string;
  /** 验证码错误提示语 */
  captchaErrTip?: string;
  /** 未勾选同意协议提示语 */
  isNotCheckedTip?: string;
  /** 登录成功提示语 */
  loginSucc?: string;
  /** 网络问题导致接口失败提示语 */
  requestErrTips?: string;
  /** fadeInOut时长 */
  fadeTime?: number;
  /** 是否点击遮罩关闭弹窗 */
  clickMaskClose?: boolean;
  /** 是否开启input聚焦、输入错误时的颜色变化 */
  inputColorChange?: boolean;
  /** 是否可关闭弹窗 */
  clickclose?: boolean;
  /** 选用m|pc样式布局，默认程序自动断定 */
  useStyle?: "m" | "pc";
  /** 百田统计埋点相关 - category类别 */
  category?: string;
  /** 百田统计埋点相关 - pageType */
  pageType?: string | "PC" | "WAP";
}

export interface TTLOGIN {
  _config: TTLOGIN_OPTIONS;
  /** 渐出显示 */
  show(): void;
  /** 渐入隐藏 */
  close(): void;
  /** toast提示 */
  toast(tips: string): void;
  /** 设置cookie */
  setCookie(name: string, value: string): void;
  /** 获取某个cookie值 */
  getCookie(name: string): string;
  /** 删除某个cookie */
  delCookie(name: string): void;
  /** 注册监听事件 */
  on(topic: "succLogined" | "closeDialog", cb?: (...args: any[]) => void): void;
}
