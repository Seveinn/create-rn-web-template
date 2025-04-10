/*
 * @Author: Seveinn
 * @Date: 2025-04-08 01:34:26
 * @LastEditors: Seveinn
 * @LastEditTime: 2025-04-08 21:44:26
 * @FilePath: \CursorAIProjects\Bloom\src\screens\SettingsScreen.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../types/navigation';
import { useI18n } from '../i18n';
import Loading from '../components/common/Loading';

type Props = BottomTabScreenProps<RootTabParamList, 'Settings'>;

// 模拟兑换商品数据
const mockRewards = [
  { id: '1', name: '咖啡券', points: 100, description: '可兑换一杯美式咖啡' },
  { id: '2', name: '电影票', points: 200, description: '可兑换一张电影票' },
  { id: '3', name: '购物券', points: 500, description: '可兑换50元购物券' },
];

const ExchangeScreen: React.FC<Props> = () => {
  const { t } = useI18n();
  const [isLoading, setIsLoading] = useState(true);
  const [rewards, setRewards] = useState(mockRewards);
  const [userPoints, setUserPoints] = useState(1000);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        setIsLoading(true);
        // 模拟 API 调用
        await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
        setRewards(mockRewards);
      } catch (error) {
        console.error('Failed to fetch rewards:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRewards();
  }, []);

  const handleExchange = (reward: typeof mockRewards[0]) => {
    if (userPoints >= reward.points) {
      // TODO: 实现兑换逻辑
      console.log('兑换商品:', reward);
      setUserPoints(userPoints - reward.points);
    } else {
      console.log('积分不足');
    }
  };

  const renderItem = ({ item }: { item: typeof mockRewards[0] }) => (
    <View style={styles.rewardItem}>
      <View style={styles.rewardInfo}>
        <Text style={styles.rewardName}>{item.name}</Text>
        <Text style={styles.rewardDescription}>{item.description}</Text>
      </View>
      <View style={styles.rewardAction}>
        <Text style={styles.pointsText}>{item.points} 积分</Text>
        <TouchableOpacity
          style={[
            styles.exchangeButton,
            userPoints < item.points && styles.exchangeButtonDisabled,
          ]}
          onPress={() => handleExchange(item)}
          disabled={userPoints < item.points}
        >
          <Text style={styles.exchangeButtonText}>兑换</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('tabs.settings')}</Text>
        <Text style={styles.points}>当前积分: {userPoints}</Text>
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={rewards}
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
    marginBottom: 8,
  },
  points: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  listContent: {
    padding: 16,
  },
  rewardItem: {
    padding: 16,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    marginBottom: 8,
  },
  rewardInfo: {
    marginBottom: 12,
  },
  rewardName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  rewardDescription: {
    fontSize: 14,
    color: '#666',
  },
  rewardAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  exchangeButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  exchangeButtonDisabled: {
    backgroundColor: '#ccc',
  },
  exchangeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ExchangeScreen; 