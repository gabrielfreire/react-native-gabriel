import React from 'react';
import ReactNative from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';

const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'flex-start',
        margin: 10
    },  
    dataText: {
        fontSize: 17,
        color: '#222',
        textAlign: 'left',
        marginTop: 4
    },
    dataTextInfo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'left',
        marginTop: 4
    }
})

export class Toxicity extends React.Component {
    constructor(props) {
        super(props);
        this.input = '';
        this.state = {
            text: null
        }
    }
    render() {
        const { text } = this.state;
        this.scrollRef = this.props.scrollRef;
        // console.log(this.props);
        return (
            <View style={styles.textContainer}>
                <Text style={styles.dataTextInfo}>Evaluate toxicity of your text</Text>
                <Input ref='foo' style={{height: 80}} placeholder="Type the text here" onChangeText={(text) => this.input = text} onFocus={(event) => {
                    // `bind` the function if you're using ES6 classes
                    this._scrollToInput(ReactNative.findNodeHandle(event.target))
                }}/>
                <Button
                    icon={ <Icon name="play-arrow" size={20} color="white" type="material-icons"/> }
                    onPress={this._fetchPrediction}
                    title="Analyse"
                />
                {text && <Text style={styles.dataText}>{text}</Text>}
            </View>
        )
    }
    _scrollToInput (reactNode) {
        // Add a 'scroll' ref to your ScrollView
        this.scrollRef.props.scrollToFocusedInput(reactNode)
    }
    _fetchPrediction = async () => {
        if (!this.input) {
            alert("Please, add some text");
            return;
        }
        const res = await fetch(`http://www.gabrielfreire.com.br/api/toxicity/predict?text=${this.input}`);
        const res_json = await res.json();
        const label = res_json.data.label;
        this.setState({ text: label});
        alert(`This comment is ${label}`);
    }
}

