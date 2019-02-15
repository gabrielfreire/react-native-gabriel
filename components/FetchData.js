import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'flex-start'
    },  
    dataText: {
        fontSize: 17,
        color: '#222',
        textAlign: 'left',
        marginTop: 4
    },
    dataTextInfo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'left',
        marginTop: 4
    }
})

export class FetchData extends React.Component {
    render() {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.dataTextInfo}>Example of Data being fetched on start</Text>
                <Text style={styles.dataText}>{"Name: " + (this.props.data ? `${this.props.data.firstName} ${this.props.data.surName}` : "")}</Text>
                <Text style={styles.dataText}>{"Occupation: " + (this.props.data ? this.props.data.occupation : "")}</Text>
            </View>
        )
    }
}

