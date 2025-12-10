import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, useAuth } from './state/AuthContext';
import { MoneyProvider } from './state/MoneyContext';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import AddMoney from './screens/AddMoney';
import Goals from './screens/Goals';
import Coach from './screens/Coach';
import ParentDashboard from './screens/ParentDashboard';
import Kids from './screens/Kids';
import { KidProvider } from './state/KidContext';
import HeaderNav from './components/HeaderNav';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Kids: undefined;
  Home: undefined;
  KidHome: { kidId: string } | undefined;
  AddMoney: { kidId?: string } | undefined;
  Goals: undefined;
  Coach: undefined;
  ParentDashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { token } = useAuth();
  const screenOptions: any = token
    ? { headerShown: true, headerRight: () => <HeaderNav /> }
    : { headerShown: true };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {!token ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <>
            <Stack.Screen name="Kids" component={Kids} options={{ title: 'Kids' }} />
            <Stack.Screen name="KidHome" component={require('./screens/KidHome').default} options={{ title: 'Kid' }} />
            <Stack.Screen name="Home" component={Home} options={{ title: 'BrightBanker' }} />
            <Stack.Screen name="AddMoney" component={AddMoney} options={{ title: 'Add Money' }} />
            <Stack.Screen name="Goals" component={Goals} options={{ title: 'Goals' }} />
            <Stack.Screen name="Coach" component={Coach} options={{ title: 'AI Coach' }} />
            <Stack.Screen name="ParentDashboard" component={ParentDashboard} options={{ title: 'Parent Dashboard' }} />
          </>
        )}
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <KidProvider>
        <MoneyProvider>
          <RootNavigator />
        </MoneyProvider>
      </KidProvider>
    </AuthProvider>
  );
}
