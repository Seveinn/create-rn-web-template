/*
 * @Author: Seveinn
 * @Date: 2025-04-08 01:42:52
 * @LastEditors: Seveinn
 * @LastEditTime: 2025-04-08 01:47:38
 * @FilePath: \CursorAIProjects\Bloom\src\config\env.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import Config from 'react-native-config';

// 环境变量配置
interface EnvConfig {
  // 敏感信息（从环境变量获取）
  API_BASE_URL: string;
  API_KEY: string;
  
  // 非敏感配置（直接定义）
  API_TIMEOUT: number;
  CACHE_DURATION: number;
  DEFAULT_LANGUAGE: string;
}

// 环境变量配置
const ENV: EnvConfig = {
  // 敏感信息
  API_BASE_URL: Config.API_BASE_URL || 'http://localhost:3000',
  API_KEY: Config.API_KEY || '',
  
  // 非敏感配置
  API_TIMEOUT: 10000,
  CACHE_DURATION: 3600,
  DEFAULT_LANGUAGE: 'zh-CN'
};

export default ENV; 