import React from 'react';
import { Image, View, CameraRoll, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { ImagePicker, Permissions } from 'expo';

const styles = StyleSheet.create({
  viewContainer: { 
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  button: {
    margin:10,
    width: 140
  },
  image: {

  }
})
export class ImagePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      hasCameraPermission: null
    };
  }
  
  render() {
    let { image } = this.state;
    
    return (
      <View>
        <View style={styles.viewContainer}>
          <Button style={styles.button}
            icon={
              <Icon name="camera-roll" size={20} color="white" type="material-icons"/>
            }
            title=" Add Photo"
            onPress={this._pickPhoto}
          />
          <Button style={styles.button}
            icon={
              <Icon name="camera-alt" size={20} color="white" type="material-icons"/>
            }
            title=" Take Photo"
            onPress={this._takePhoto}
          />
        </View>
        <View style={styles.viewContainer}>
          <TouchableOpacity onPress={this._handleImagePress}>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  _handleImagePress = () => {
    this.setState({ image: null });
    alert("Image removed!");
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
      let saveResult = await CameraRoll.saveToCameraRoll(result.uri, 'photo'); // save taken photo to camera roll
      this.setState({ image: saveResult });
    }
  }
}