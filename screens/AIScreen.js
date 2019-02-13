import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { AIList } from '../components/AIList';
export default class AIScreen extends React.Component {
  static navigationOptions = {
    title: 'AI',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        
        <Text style={styles.aiText}>This will contain AI experiments in the future</Text>
        <AIList></AIList>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  aiText: {
    textAlign: 'center'
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
