import { BaseScreen } from '@components';
import { DeviceUtils } from '@utils';
import { fs, ms, vs } from '@utils/ScaleUtils';
import React, { useEffect, useRef } from 'react';
import { Alert, FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ColorType, LightColor } from 'src/app/commons';
import { TMovie } from './Type';
import { navigateToMovieDetailScreen, navigateToSearchMovieScreen } from '@navigations/ScreenNavigation';
import { ImagesAsset } from '@assets';
import HomeVM from './HomeVM';

const HomeScreen = () => {

    const homeVM = HomeVM();

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
          {
            "#TITLE": "Niram Maarum Kadhal",
            "#YEAR": 2023,
            "#IMDB_ID": "tt28184987",
            "#RANK": 335013,
            "#ACTORS": "Preetha, Aravind Seiju",
            "#AKA": "Niram Maarum Kadhal (2023) ",
            "#IMDB_URL": "https://imdb.com/title/tt28184987",
            "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt28184987&rhash=77ed0696a538f4",
            "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BNGQ0YjRkNmUtZGRjNS00ZjI3LTg5ZTMtYTQ0OGYxNzQ5NDQ5XkEyXkFqcGdeQXVyMTU3NDgzNzM4._V1_.jpg",
            "photo_width": 648,
            "photo_height": 867
          },
          {
            "#TITLE": "Akashathinte Niram",
            "#YEAR": 2012,
            "#IMDB_ID": "tt2186717",
            "#RANK": 417614,
            "#ACTORS": "Govardhan B.K, Master Govardhan",
            "#AKA": "Akashathinte Niram (2012) ",
            "#IMDB_URL": "https://imdb.com/title/tt2186717",
            "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt2186717&rhash=77ed0696a538f4",
            "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BMTZjMTRiYTYtNWYyMS00OTE1LTljNzEtMDBjZTIyNWZjYmIwXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
            "photo_width": 720,
            "photo_height": 961
          },
          {
            "#TITLE": "Oru Puthu Niram",
            "#YEAR": 2020,
            "#IMDB_ID": "tt13048024",
            "#RANK": 656397,
            "#ACTORS": "Santhy Das, Gibu George",
            "#AKA": "Oru Puthu Niram (2020) ",
            "#IMDB_URL": "https://imdb.com/title/tt13048024",
            "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt13048024&rhash=77ed0696a538f4",
            "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BMDQ1MDcxNzYtYjQ1My00NzZiLWJlMDEtMDBiNGE4MjY4Y2JmXkEyXkFqcGdeQXVyMTI0MDM2NjIw._V1_.jpg",
            "photo_width": 2641,
            "photo_height": 3962
          },
          {
            "#TITLE": "Niram",
            "#YEAR": 2006,
            "#IMDB_ID": "tt13667402",
            "#RANK": 1486081,
            "#ACTORS": "Mani, Sindhuri",
            "#AKA": "Niram (2006) ",
            "#IMDB_URL": "https://imdb.com/title/tt13667402",
            "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt13667402&rhash=77ed0696a538f4"
          },
          {
            "#TITLE": "Niram Maaratha Pookkal",
            "#YEAR": 1979,
            "#IMDB_ID": "tt0155917",
            "#RANK": 983491,
            "#ACTORS": "Rati Agnihotri, Radhika Sarathkumar",
            "#AKA": "Niram Maaratha Pookkal (1979) ",
            "#IMDB_URL": "https://imdb.com/title/tt0155917",
            "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0155917&rhash=77ed0696a538f4",
            "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BOTI3NzI3MjUtZGY4Yy00ODU0LTg3OTMtNWYyOWI5MWIzNjdiXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
            "photo_width": 491,
            "photo_height": 647
          }
    ]

    useEffect(() => {   
        const params = {
            input: 'b'
        }
        homeVM.getMovieList(params);
    }, []);

    const onClickItem = (item: TMovie) => {
        navigateToMovieDetailScreen(item);
    };

    const renderItem: ListRenderItem<TMovie> = ({ item }) => (
        <TouchableOpacity onPress={() => onClickItem(item)} style={styles.item}>
            <Image
                source={{ uri: item["#IMG_POSTER"] }}
                style={styles.poster}
                resizeMode='cover'
            />
            <View style={{paddingLeft: vs(15), justifyContent: 'center'}}>
                <Text style={styles.name}>{item["#TITLE"]}</Text>
                <View style={{flexDirection: 'row', paddingVertical: vs(5)}}>
                    <Image source={ImagesAsset.date} style={[styles.icon, {marginRight: vs(5)}]} />
                    <Text style={styles.txt}>{item["#YEAR"]}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={ImagesAsset.quality} style={[styles.icon, {marginRight: vs(5)}]} />
                    <Text style={styles.txt}>{item["#RANK"]}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderItemSeparator = ({ }) => (
        <View style={{ height: vs(15) }} />
    );

    const onSearch = () => {
        navigateToSearchMovieScreen();
    }

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
                    <TouchableOpacity onPress={onSearch} style={styles.searchView}>
                        <Image
                            source={ImagesAsset.search}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            }
        >
            <View style={{ paddingHorizontal: vs(15), paddingTop: vs(10), paddingBottom: vs(5) }}>
                <FlatList
                    data={homeVM.movieList}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={(item) => item["#IMDB_ID"]}
                    horizontal={false}
                    ItemSeparatorComponent={renderItemSeparator}
                />
            </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.colorDBDBDB
    },
    txtTitle: {
        fontSize: fs(25),
        lineHeight: vs(34),
        fontWeight: '600',
        color: colors.color3A3A3C
    },
    icon: {
        width: vs(23),
        height: vs(23),
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        flexDirection: 'row',
    },
    poster: {
        width: '29%',
        height: DeviceUtils.getDeviceHeight() / 6,
        borderRadius: vs(10),
        backgroundColor: colors.colorDBDBDB,
        borderWidth: vs(0.5),
        borderColor: colors.colorDBDBDB
    },
    title: {
        fontSize: fs(18),
        fontWeight: 'bold',
    },
    name: {
        fontSize: fs(18),
        fontWeight: 'bold',
        color: colors.color3A3A3C,
        width: DeviceUtils.getDeviceWidth() * 0.6
    },
    txt: {
        fontSize: fs(16),
        color: colors.color9A9A9A,
        fontWeight: 'bold'
    },
});

export default HomeScreen;

