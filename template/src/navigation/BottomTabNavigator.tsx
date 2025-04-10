import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../types/navigation';
import ListScreen from '../screens/ListScreen';
import CreateScreen from '../screens/CreateScreen';
import ExchangeScreen from '../screens/ExchangeScreen';
import { useI18n } from '../i18n';

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const { t } = useI18n();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={ListScreen}
        options={{
          title: t('tabs.home'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={CreateScreen}
        options={{
          title: t('tabs.profile'),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ExchangeScreen}
        options={{
          title: t('tabs.settings'),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator; 