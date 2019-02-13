import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    dataText: {
        fontSize: 17,
        color: '#000',
        textAlign: 'center'
    }
})

export class FetchData extends React.Component {
    render() {
        return (
            <View>
                <Text>Example of Data being fetched on start</Text>
                <Text style={styles.dataText}>{"First name: " + (this.props.data ? this.props.data.firstName : "")}</Text>
                <Text style={styles.dataText}>{"Surname: " + (this.props.data ? this.props.data.surName : "")}</Text>
                <Text style={styles.dataText}>{"Occupation: " + (this.props.data ? this.props.data.occupation : "")}</Text>
            </View>
        )
    }
}

