import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    locationBtn : {
        width: 200,
        margin: 10
    }
});

export class FetchLocation extends React.Component {
    render() {
        let location = <Text style={styles.getStartedText}></Text>;
        if (this.props.location) {
            location = <Text style={styles.getStartedText}>{this.props.location.value}</Text>;
        }
        return (
            <View style={styles.container}>
                <Button 
                icon={ <Icon name="add-location" size={20} color="white" type="material-icons"/> }
                style={styles.locationBtn} 
                title="Get My location" 
                onPress={this.props.onGetLocation}/>
                {location}
            </View>
        )
    }
}