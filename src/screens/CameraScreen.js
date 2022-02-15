import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Platform,
  Button,
  Image,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import * as Permissions from "expo-permissions";

function CameraScreen({ visible, navigation, addNote, onClose }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  // console.log("1111", noteTitle);
  // console.log("desc", noteDescription);

  function onSaveNote() {
    // console.log(navigation);
    // navigation?.state?.params?.addNote({noteTitle});
    console.log("123");
    addNote(noteTitle, noteDescription);
    onClose();
  }

  //     onBack = () => {
  //         return this.props.onBack();
  //     }
  // class HandleBack extends Component {
  //     constructor(props) {
  //         super(props);
  //     }
  // }
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImagebyCamera = async () => {
    let res = await Permissions.askAsync(Permissions.CAMERA);
    const resu = await ImagePicker.launchCameraAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(resu);

    if (!resu.cancelled) {
      setImage(resu.uri);
    }
  };

  return (
    <>
      <Modal visible={visible}>
        <View style={styles.container}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {/*<Button*/}
            {/*  title="Pick an image from camera roll"*/}
            {/*  onPress={pickImage}*/}
            {/*/>*/}

            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, borderWidth: 1 }}
            />
            <Button
              title="take an image by camera "
              onPress={pickImagebyCamera}
            />

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginTop: 49 }}
            >
              <Text> Back </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: "#219653",
    position: "absolute",
    right: 0,
    top: 40,
    margin: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    height: 100,
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: "#219653",
  },
});

export default CameraScreen;
