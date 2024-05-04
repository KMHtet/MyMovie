import { ImagesAsset } from '@assets';
import { BaseScreen, Button } from '@components';
import { useRoute } from '@react-navigation/native';
import { DeviceUtils, goBack } from '@utils';
import { fs, ms, vs } from '@utils/ScaleUtils';
import React, { useRef } from 'react';
import { Alert, FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ColorType, LightColor } from 'src/app/commons';
import { TMovie } from './Type';

const MovieDetailScreen = () => {

    const data = useRoute()?.params as TMovie;

    const actionData = [
        {
            icon: ImagesAsset.home,
            label: 'Add',
            code: 'ADD'
        },
        {
            icon: ImagesAsset.star,
            label: 'Rate',
            code: 'ADD'
        },
        {
            icon: ImagesAsset.download,
            label: 'Download',
            code: 'ADD'
        },
        {
            icon: ImagesAsset.share,
            label: 'Share',
            code: 'ADD'
        }
    ]

    const onClickItem = (item: any) => {

    }

    const renderItem: ListRenderItem<any> = ({ item }) => (
        <TouchableOpacity onPress={() => onClickItem(item)} style={styles.actionItem}>
            <Image
                source={item.icon}
                style={styles.icon}
                resizeMode='contain'
            />
            <View>
                <Text style={styles.actionTxt}>{item.label}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <BaseScreen
            bodyStyle={styles.container}
            backgroundColor={'white'}
            paddingBottom={0}
            useView
            containerStyle={{ height: DeviceUtils.getDeviceHeight() / 8, backgroundColor: 'white', justifyContent: 'center' }}
            customHeader={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={goBack}
                        style={{ paddingLeft: vs(10), paddingVertical: vs(10) }}>
                        <Image
                            source={ImagesAsset.left_arrow}
                            style={{
                                width: vs(25),
                                height: vs(25),
                                marginRight: vs(10),
                                resizeMode: 'contain',
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.txtTitle}>Details</Text>
                </View>
            }
        >
            <View style={{ paddingHorizontal: vs(15) }}>
                <View style={styles.item}>
                    <Image
                        source={{ uri: data["#IMG_POSTER"] }}
                        style={styles.poster}
                        resizeMode='contain'
                    />
                    <View style={{ paddingLeft: vs(10), justifyContent: 'center' }}>
                        <Text style={[styles.title, {width: '90%'}]}>{data["#TITLE"]}</Text>
                        <View style={{ flexDirection: 'row', paddingVertical: vs(5) }}>
                            <Image source={ImagesAsset.date} style={[styles.icon, { marginRight: vs(5) }]} />
                            <Text style={styles.txt}>{data["#YEAR"]}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: vs(5) }}>
                            <Image source={ImagesAsset.quality} style={[styles.icon, { marginRight: vs(5) }]} />
                            <Text style={styles.txt}>{data["#RANK"]}</Text>
                        </View>
                    </View>
                </View>
                <Button
                    children={'Play'}
                    style={[
                        styles.button,
                        {
                            borderColor: colors.colorDBDBDB,
                        },
                    ]}
                    rightIcon={ImagesAsset.play}
                    titleColor={colors.colorPrimary}
                    titleStyle={styles.btnTxt}
                />
                <View style={styles.line} />
                <FlatList
                    data={actionData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.code}
                    horizontal={true}
                />
                <View style={styles.line} />
                <Text style={styles.txt1}>Summaries</Text>
                <Text style={styles.txt2}>Actors : {data["#ACTORS"]}</Text>
                <View style={styles.line} />
            </View>
        </BaseScreen>
    );
};

const colors = LightColor as ColorType;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    line: {
        width: '100%',
        height: vs(1),
        backgroundColor: colors.colorDBDBDB,
        marginVertical: vs(10)
    },
    txtTitle: {
        fontSize: fs(25),
        lineHeight: vs(34),
        fontWeight: '600',
        color: colors.color3A3A3C
    },
    actionItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: (DeviceUtils.getDeviceWidth() - vs(30)) / 4,
    },
    icon: {
        height: vs(20),
        width: vs(20)
    },
    item: {
        flexDirection: 'row',
    },
    button: {
        marginTop: vs(20),
        height: vs(48),
        borderRadius: vs(15),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
    },
    btnTxt: {
        fontSize: fs(15),
        color: colors.color3A3A3C
    },
    poster: {
        width: '40%',
        height: DeviceUtils.getDeviceHeight() / 3,
        borderRadius: vs(10),
        backgroundColor: colors.colorDBDBDB
    },
    title: {
        fontSize: fs(18),
        fontWeight: 'bold',
        color: colors.color3A3A3C
    },
    txt: {
        fontSize: fs(16),
        fontWeight: 'bold',
        color: colors.color9A9A9A
    },
    actionTxt: {

    },
    txt1: {
        fontSize: fs(16),
        color: colors.black,
        fontWeight: '500'
    },
    txt2: {
        fontSize: fs(14),
        color: colors.black,
        fontWeight: '400'
    }
});

export default MovieDetailScreen;

