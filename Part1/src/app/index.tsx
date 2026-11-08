import { SafeAreaView } from 'react-native-safe-area-context';
import App from '../App';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <App />
    </SafeAreaView>
  );
}