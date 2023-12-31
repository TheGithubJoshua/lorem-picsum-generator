import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card, Button } from 'react-native-paper';

import * as Updates from 'expo-updates';

function reload() {
    Updates.reloadAsync()
    }

export default function App() {
  return (
    <View style={styles.container}>
      <img src="https://picsum.photos/300"></img>
      <Card>
        <Text>A Random Image :D</Text>
        <Button onPress={() => {reload()}} >Generate Another</Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
