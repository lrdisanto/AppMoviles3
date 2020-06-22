import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Provider as ReduxProvider } from 'react-redux';
import store from './state/store';


import index from './page1.js';
import pagina2 from './page2.js'
import pagina3 from './page3.js'





const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Lista de eventos"
        component={index}
        options={{
          tabBarLabel: 'Crear evento',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Crear evento"
        component={pagina2}
        options={{
          tabBarLabel: 'Mis eventos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-week" color={color} size={size} />
         
          ),
        }}
      />
      <Tab.Screen
        name="Paginatercera"
        component={pagina3}
        options={{
          tabBarLabel: 'Participantes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (

    <ReduxProvider store={store}>
                
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
     </ReduxProvider>

    

   


  );
}
