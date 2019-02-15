import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { Card, Badge } from 'react-native-elements'

const apps = [
    {
        name: 'Toxicity analyser',
        avatar: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX34381966.jpg',
        status: 'error'
    },
    {
        name: 'Super resolution',
        avatar: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX34381966.jpg',
        status: 'error' // error: service not available | success: service available
    }
]
const styles = StyleSheet.create({
    apps: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        margin: 10
    },
    image: {
        display: 'flex',
        width: 40,
        height: 40,
        resizeMode: 'contain',
        alignItems: 'flex-start'
    },
    name: {
        display: 'flex',
        marginLeft: 5,
        marginTop: 10,
        alignItems: 'flex-end'
    },
    list: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    badge: {
        marginTop: 10
    }
});
export class AIList extends React.Component {
    render() {
        return (
            <View>
                <Card title="AI Applications">
                    {
                        apps.map((u, i) => {
                            return (
                                <View key={i} style={styles.apps}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: u.avatar }}
                                    />
                                    <Text style={styles.name}>{u.name}</Text>
                                    <Badge style={styles.badge} status={u.status}/>
                                </View>
                            );
                        })
                    }
                </Card>
            </View>
        )
    }
}