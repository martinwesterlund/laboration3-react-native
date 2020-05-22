import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photoUris, setPhotoUris] = useState([])

    useEffect(() => {

        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', padding: 50, backgroundColor: '#e1a400' }}>
            <Camera style={{ width: 300, height: 300 }} ratio='1:1' type={type} ref={ref => {
                setCameraRef(ref);
            }}>
            </Camera>
            <FlatList
                horizontal={true}
                data={photoUris}
                renderItem={({ item }) => <Image source={{ uri: item.photoUri }} style={{ width: 50, height: 50 }} />}
            />

            <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent'
                }}>
                <TouchableOpacity
                    style={{
                        marginBottom: 1
                    }}
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}>
                    <Ionicons name='ios-repeat' size={50} color={'red'} />
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={async () => {
                    if (cameraRef) {
                        let photo = await cameraRef.takePictureAsync();
                        setPhotoUris(prevPhotos => {

                            return [{ id: photo.uri, photoUri: photo.uri }, ...prevPhotos]
                        })
                    }
                }}>
                    <View style={{
                        borderWidth: 2,
                        borderRadius: 25,
                        borderColor: '#390087',
                        height: 50,
                        width: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                        <View style={{
                            borderWidth: 2,
                            borderRadius: 20,
                            borderColor: '#390087',
                            height: 40,
                            width: 40,
                            backgroundColor: '#390087'
                        }} >
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}