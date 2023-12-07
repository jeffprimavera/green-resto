export enum DeviceType {
    PHONE = 'phone',
    TABLET = 'tablet',
    DESKTOP = 'desktop'
  }
  
  export function canUseDOM(): boolean {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  
  export const isBrowser = canUseDOM();
  
  function getUserAgentBrowser(navigator: Navigator) {
    const {userAgent: ua, vendor} = navigator;
    const android = /(android)/i.test(ua);
  
    switch (true) {
      case /CriOS/.test(ua):
        return "Chrome for iOS";
      case /Edg\//.test(ua):
        return "Edge";
      case android && /Silk\//.test(ua):
        return "Silk";
      case /Chrome/.test(ua) && /Google Inc/.test(vendor):
        return "Chrome";
      case /Firefox\/\d+\.\d+$/.test(ua):
        return "Firefox";
      case android:
        return "AOSP";
      case /MSIE|Trident/.test(ua):
        return "IE";
      case /Safari/.test(navigator.userAgent) && /Apple Computer/.test(ua):
        return "Safari";
      case /AppleWebKit/.test(ua):
        return "WebKit";
      default:
        return null;
    }
  }
  
  export type UserAgentBrowser = NonNullable<ReturnType<typeof getUserAgentBrowser>>;
  
  function getUserAgentOS(navigator: Navigator) {
    const { userAgent: ua } = navigator;
  
    switch (true) {
      case /Android/.test(ua):
        return "Android";
      case /iPhone|iPad|iPod/.test(ua):
        return "iOS";
      case /Win/.test(ua):
        return "Windows";
      case /Mac/.test(ua):
        return "Mac";
      case /CrOS/.test(ua):
        return "Chrome OS";
      case /Firefox/.test(ua):
        return "Firefox OS";
      default:
        return null;
    }
  }
  
  export type UserAgentOS = NonNullable<ReturnType<typeof getUserAgentOS>>;
  
  export function detectDeviceType(navigator = window.navigator) {
    const {userAgent: ua} = navigator;
  
    if (/(tablet)|(iPad)|(Nexus 9)/i.test(ua)) return DeviceType.TABLET;
    if (/(mobi)/i.test(ua)) return DeviceType.PHONE;
  
    const isIpad = /Macintosh/i.test(ua) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
  
    return isIpad ? DeviceType.TABLET : DeviceType.DESKTOP;
  }
  
  export const deviceType = isBrowser && detectDeviceType()
  
  export const isPhone = deviceType === DeviceType.PHONE
  export const isTablet = deviceType === DeviceType.TABLET
  export const isDesktop = deviceType === DeviceType.DESKTOP
  
  export type UserAgentDeviceType = NonNullable<ReturnType<typeof detectDeviceType>>;
  
  export function detectOS(os: UserAgentOS) {
    if (!isBrowser) return false;
  
    return getUserAgentOS(window.navigator) === os;
  }
  
  export function detectBrowser(browser: UserAgentBrowser) {
    if (!isBrowser) return false;
  
    return getUserAgentBrowser(window.navigator) === browser;
  }
  
  export function detectTouch() {
    if (!isBrowser) return false;
  
    return window.ontouchstart === null && window.ontouchmove === null && window.ontouchend === null;
  }
  
  export const isTouchable = isBrowser && detectTouch()