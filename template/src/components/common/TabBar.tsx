/*
 * @Author: Seveinn
 * @Date: 2025-04-08 01:34:37
 * @LastEditors: Seveinn
 * @LastEditTime: 2025-04-08 01:43:43
 * @FilePath: \CursorAIProjects\Bloom\src\components\common\TabBar.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../types/navigation';

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const icons: Record<keyof RootTabParamList, string> = {
    Home: 'format-list-bulleted',
    Profile: 'plus-circle',
    Settings: 'gift',
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = typeof options.tabBarLabel === 'string' 
          ? options.tabBarLabel 
          : typeof options.title === 'string'
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name as keyof RootTabParamList);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
          >
            <Icon
              name={icons[route.name as keyof RootTabParamList]}
              size={24}
              color={isFocused ? '#007AFF' : '#8E8E93'}
            />
            <Text
              style={[
                styles.label,
                { color: isFocused ? '#007AFF' : '#8E8E93' },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 49 : 56,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E5E5EA',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default TabBar; 