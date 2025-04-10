/*
 * @Author: Seveinn
 * @Date: 2025-04-08 01:34:08
 * @LastEditors: Seveinn
 * @LastEditTime: 2025-04-08 21:16:35
 * @FilePath: \CursorAIProjects\Bloom\src\screens\HomeScreen.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../types/navigation';
import Loading from '../components/common/Loading';
import { useI18n } from '../i18n';

type Props = BottomTabScreenProps<RootTabParamList, 'Home'>;

// 模拟任务数据
const mockTasks = [
  { id: '1', title: '完成项目文档', status: '进行中' },
  { id: '2', title: '代码审查', status: '待处理' },
  { id: '3', title: '团队会议', status: '已完成' },
];

const ListScreen: React.FC<Props> = () => {
  const { t } = useI18n();
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState(mockTasks);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        // 模拟 API 调用
        await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
        setTasks(mockTasks);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const renderItem = ({ item }: { item: typeof mockTasks[0] }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskStatus}>{item.status}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('tabs.home')}</Text>
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 16,
  },
  taskItem: {
    padding: 16,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  taskStatus: {
    fontSize: 14,
    color: '#666',
  },
});

export default ListScreen; 