import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
const users = [
    {
       name: 'Gabriel Freire',
       avatar: 'https://media.licdn.com/dms/image/C4E03AQE-Y4zdMf_kTw/profile-displayphoto-shrink_200_200/0?e=1555545600&v=beta&t=Jl0dEKT-C4UUD6OPYxfxYqbOOvsqtsD8vkW14wcEJZo'
    }
];
const styles = StyleSheet.create({
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    }
})
export class WebsiteCard extends React.Component {
    render() {
        return (
            <View style={styles.helpContainer}>
                {/* // implemented without image with header */}
                <Card title="Gabriel Freire" image={{uri: 'https://media.licdn.com/dms/image/C4E03AQE-Y4zdMf_kTw/profile-displayphoto-shrink_200_200/0?e=1555545600&v=beta&t=Jl0dEKT-C4UUD6OPYxfxYqbOOvsqtsD8vkW14wcEJZo'}}>
                    {/* {
                        users.map((u, i) => {
                            return (
                                <View key={i} style={styles.user}>
                                <Image
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={{ uri: u.avatar }}
                                />
                                <Text style={styles.name}>{u.name}</Text>
                                </View>
                            );
                        })
                    } */}
                    <Text style={{marginBottom: 10}}>
                        Gabriel is a very nice guy, believe me.
                    </Text>
                    <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    onPress={this.props.onPress}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='GO TO WEBSITE' />
                </Card>
            </View>
        );
    }
}