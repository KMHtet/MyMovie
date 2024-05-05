import { ImagesAsset } from '@assets';
import { BaseScreen } from '@components';
import { DeviceUtils } from '@utils';
import { fs, ms, vs } from '@utils/ScaleUtils';
import React, { useRef } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { ColorType, LightColor } from 'src/app/commons';

const DownloadScreen = () => {

    return (
        <BaseScreen
            bodyStyle={styles.container}
            backgroundColor={'white'}
            paddingBottom={0}
            useView
            containerStyle={{ height: DeviceUtils.getDeviceHeight() / 8, backgroundColor: 'white', justifyContent: 'center' }}
            customHeader={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* <Text style={styles.txtTitle}>More</Text> */}
                </View>
            }
        >
            <Image source={ImagesAsset.coming_soon} style={{width: '40%', height: '20%'}} resizeMode='contain' />
        </BaseScreen>
    );
};

const colors = LightColor as ColorType;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtTitle: {
        paddingLeft: vs(10),
        fontSize: fs(32), 
        lineHeight: vs(34),
        letterSpacing: -ms(0.28),
        fontWeight: '600',
        color: colors.colorPrimary
    },
});

export default DownloadScreen;

