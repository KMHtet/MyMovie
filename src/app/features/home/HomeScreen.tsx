import { BaseScreen } from '@components';
import { DeviceUtils } from '@utils';
import { fs, ms, vs } from '@utils/ScaleUtils';
import React, { useRef } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ColorType, LightColor } from 'src/app/commons';

const HomeScreen = () => {

    const data = [
        {
            "#TITLE": "Niram",
            "#YEAR": 1999,
            "#IMDB_ID": "tt0255426",
            "#RANK": 144372,
            "#ACTORS": "Kunchacko Boban, Shalini",
            "#AKA": "Niram (1999) ",
            "#IMDB_URL": "https://imdb.com/title/tt0255426",
            "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0255426&rhash=77ed0696a538f4",
            "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BOTYwYTRiZTctZjU2NC00ZTRkLWExYTUtODU1NTBhMzU1MzM4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
            "photo_width": 600,
            "photo_height": 750
        },
        {
            "#TITLE": "Niram Marum Ulagil",
            "#IMDB_ID": "tt32189846",
            "#RANK": 160865,
            "#ACTORS": "Kaniha, Sandy Master",
            "#AKA": "Niram Marum Ulagil (undefined) ",
            "#IMDB_URL": "https://imdb.com/title/tt32189846",
            "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt32189846&rhash=77ed0696a538f4"
        },
        {
            "#TITLE": "Varumayin Niram Sigappu",
            "#YEAR": 1980,
            "#IMDB_ID": "tt0155329",
            "#RANK": 177801,
            "#ACTORS": "Kamal Haasan, Sridevi",
            "#AKA": "Varumayin Niram Sigappu (1980) ",
            "#IMDB_URL": "https://imdb.com/title/tt0155329",
            "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0155329&rhash=77ed0696a538f4",
            "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BOTRlYjJhMTItY2FlOC00ZDc3LWIwNTctMTI2YTFmODFkZWUzXkEyXkFqcGdeQXVyOTIzODUxMjk@._V1_.jpg",
            "photo_width": 703,
            "photo_height": 1100
        },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image
                source={{ uri: item['#IMG_POSTER'] }}
                style={styles.poster}
            />
            <View style={styles.details}>
                <Text style={styles.title}>{item['#TITLE']}</Text>
                <Text style={styles.actors}>Actors: {item['#ACTORS']}</Text>
                <Text style={styles.year}>Year: {item['#YEAR']}</Text>
            </View>
        </View>
    );

    return (
        <BaseScreen
            bodyStyle={styles.container}
            backgroundColor={'white'}
            paddingBottom={0}
            useView
            containerStyle={{ height: DeviceUtils.getDeviceHeight() / 8, backgroundColor: 'white', justifyContent: 'center' }}
            customHeader={
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: vs(15), alignItems: 'center' }}>
                    <Text style={styles.txtTitle}>Home</Text>
                    <View style={styles.searchView}>

                    </View>
                </View>
            }
        >
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item['#IMDB_ID']}
                numColumns={2}
            />
        </BaseScreen>
    );
};

const colors = LightColor as ColorType;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchView: {
        width: vs(40),
        height: vs(40),
        borderRadius: vs(20),
        backgroundColor: colors.colorPrimaryLight
    },
    txtTitle: {
        fontSize: fs(32),
        lineHeight: vs(34),
        letterSpacing: -ms(0.28),
        fontWeight: '600',
        color: colors.color3A3A3C
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#f9c2ff',
        borderRadius: 10,
    },
    poster: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    details: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    actors: {
        fontSize: 14,
    },
    year: {
        fontSize: 14,
    },
});

export default HomeScreen;

