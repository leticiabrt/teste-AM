import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/navigation/login';
import { AuthProvider } from './src/context/auth';

export default function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <StatusBar style="auto" />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
