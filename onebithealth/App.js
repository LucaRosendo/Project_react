import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/index';
import Main from './src/components/Main/main'//Foi preciso colocar a rota final "/main" porque não está com um nome de "index"


export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
    </View>
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
