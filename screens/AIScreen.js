import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AIList } from '../components/AIList';
import { Toxicity } from '../components/Toxicity';

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

export default class AIScreen extends React.Component {
  static navigationOptions = {
    title: 'AI',
  };
  constructor(props) {
    super(props);
    this.state = {
      scroll: null
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        innerRef={ref => {
          this.setState({
            scroll: ref
          })
        }}
      >
        {/* Go ahead and delete ExpoLinksView and replace it with your
          * content, we just wanted to provide you with some helpful links */}
          
        <Text style={styles.aiText}>This will contain AI experiments in the future</Text>
        <AIList></AIList>
        <Toxicity scrollRef={this.state.scroll}></Toxicity>
      </KeyboardAwareScrollView>
    );
  }
}

