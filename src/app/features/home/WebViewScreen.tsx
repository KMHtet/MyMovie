import React, { useRef } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import { ColorType, LightColor } from 'src/app/commons';

const WebViewScreen = () => {

    return (
        <View style={styles.container}>
            <WebView
                style={styles.webview}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://www.imdb.com/video/vi2745026073/' }}
            />
        </View>
    );
};

const colors = LightColor as ColorType;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      webview: {
        flex: 1,
      },
});

export default WebViewScreen;

