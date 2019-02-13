import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';

export class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickPhoto}
        />
        <Button
          title="Take a photo"
          onPress={this._takePhoto}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

  _pickPhoto = async () => {
    const status = await this.getCameraRollPermission();
    if (status) {

        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
        console.log(result);
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
    } else {
        alert('Hey! You might want to enable the camera for my app, it is very good.');
    }
  };
  _takePhoto = async () => {
    const status = await this.getCameraPermission();
    if (status) {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        // this.props.navigation.navigate('NewPost', { image: result.uri });
        this.setState({ image: result.uri });
      }
    } else {
        alert('Hey! You might want to enable the camera for my app, it is very good.');
    }
  }
  getCameraRollPermission = () => {
    const { Permissions } = Expo;
    return Permissions.getAsync(Permissions.CAMERAL_ROLL);
  }
  getCameraPermission = () => {
    const { Permissions } = Expo;
    return Permissions.getAsync(Permissions.CAMERAL);
  }
}