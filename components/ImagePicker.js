import React from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ImagePicker, Permissions, Camera } from 'expo';

export class ImagePickerExample extends React.Component {
  state = {
    image: null,
    hasCameraPermission: null
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

  async componentDidMount() {
    const { status } = await Permissions.askAsync([Permissions.CAMERA, Permissions.CAMERA_ROLL]);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _pickPhoto = async () => {
    if (!this.state.hasCameraPermission) {
      alert('Hey! You might want to enable the camera for my app, it is very good.');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 5],
    });
    console.log(result);
    if (!result.cancelled) {
        this.setState({ image: result.uri });
    }
  };
  _takePhoto = async () => {
    if (!this.state.hasCameraPermission) {
      alert('Hey! You might want to enable the camera for my app, it is very good.');
      return;
    }
    
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 5],
    });
    if (!result.cancelled) {
      // this.props.navigation.navigate('NewPost', { image: result.uri });
      this.setState({ image: result.uri });
    }
  }
}