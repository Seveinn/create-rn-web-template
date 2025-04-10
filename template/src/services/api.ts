/*
 * @Author: Seveinn
 * @Date: 2025-04-08 01:46:57
 * @LastEditors: Seveinn
 * @LastEditTime: 2025-04-08 01:57:54
 * @FilePath: \CursorAIProjects\Bloom\src\services\api.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ENV from '../config/env';

// 定义 API 响应类型
interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

// 创建 axios 实例
const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: ENV.API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': ENV.API_KEY,
  },
});

// 请求拦截器
api.interceptors.request.use(
  async (config) => {
    try {
      // 使用 AsyncStorage 获取 token
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error('Error getting token:', error);
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 统一错误处理
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api; 