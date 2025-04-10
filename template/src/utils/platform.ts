import { Platform, Dimensions } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isWeb = Platform.OS === 'web';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

// 平台特定功能封装
export const platformSpecific = {
  // 存储方案
  storage: Platform.select({
    web: () => localStorage,
    native: () => require('@react-native-async-storage/async-storage').default,
  })(),
  
  // 导航配置
  navigation: Platform.select({
    web: () => require('@react-navigation/web').createBrowserHistory,
    native: () => require('@react-navigation/native').createNavigationContainerRef,
  })(),
};

// 平台特定样式
export const getPlatformSpecificStyle = (style: any) => {
  return Platform.select({
    ios: style.ios,
    android: style.android,
    web: style.web,
    default: style.default,
  });
}; 