import { ImagesAsset } from '@assets';
import { BaseScreen, InputField } from '@components';
import { DeviceUtils, goBack } from '@utils';
import { fs, ms, vs } from '@utils/ScaleUtils';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, Image, Keyboard, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ColorType, LightColor } from 'src/app/commons';
import { TMovie } from './Type';
import { navigateToMovieDetailScreen } from '@navigations/ScreenNavigation';
import HomeVM from './HomeVM';

const SearchMovieScreen = () => {

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

    const [values, setValues] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [current, setCurrent] = useState<number>(0);

    const options = [
        {
            id: 1,
            item_desc: 'Anime'
        },
        {
            id: 2,
            item_desc: 'IT'
        },
        {
            id: 3,
            item_desc: 'Holloween'
        },
        {
            id: 4,
            item_desc: 'Comedy'
        },
        {
            id: 5,
            item_desc: 'Drama'
        },
        {
            id: 6,
            item_desc: 'TV Series'
        },
        {
            id: 7,
            item_desc: 'Romance'
        }
    ]

    const homeVM = HomeVM();

    const onChangeText = (values: any) => {
        setValues(values);
        // setCurrent(current + 1);
    };

    // useEffect(() => {
    //     if (current !== 0) {
    //         const delayDebounceFn = setTimeout(() => {
    //             onSearch && onSearch(values);
    //         }, 3000);
    //         return () => clearTimeout(delayDebounceFn);
    //     }
    // }, [values]);

    const onSearch = (value: any) => {
        Keyboard.dismiss();
        const params = {
            input: value
        }
        homeVM.getMovieList(params);
    }

    const pressEnter = () => {
        onSearch(values);
    };

    const handleOptionPress = (option: any) => {
        setSelectedOption(option);
    };

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
            <View>
                <Text style={styles.title}>{item["#TITLE"]}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderItemSeparator = ({ }) => (
        <View style={{ height: vs(15) }} />
    );

    return (
        <BaseScreen
            bodyStyle={styles.container}
            backgroundColor={'white'}
            paddingBottom={0}
            useView
            containerStyle={{ height: DeviceUtils.getDeviceHeight() / 8, backgroundColor: 'white', justifyContent: 'center' }}
            customHeader={
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={goBack}
                        style={{ paddingVertical: vs(10), width: '15%', alignItems: 'center' }}>
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
                    <InputField
                        id={"search"}
                        placeholder={'Search'}
                        maxLength={50}
                        keyboardType={'default'}
                        returnKeyType={'done'}
                        styleInput={[styles.input, { paddingRight: vs(1) }]}
                        styleComponent={[styles.styleSearchComponent, { width: '80%' }]}
                        onChangeText={onChangeText}
                        iconLeft={ImagesAsset.search}
                        value={values}
                        onSubmitEditing={() => {
                            pressEnter();
                        }}
                    />
                </View>
            }
        >
            <View style={{ paddingHorizontal: vs(15) }}>
                {homeVM.movieList.length === 0 ? (
                    <>
                        <Text style={{color: colors.color3A3A3C, fontWeight: 'bold', fontSize: fs(16)}}>Features</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {options.map((option) => (
                                <TouchableOpacity
                                    key={option?.id}
                                    onPress={() => handleOptionPress(option)}
                                    style={option?.id === selectedOption?.id ? styles.selectedButton : styles.buttonGroup}
                                >
                                    <Text style={{ color: option?.id === selectedOption?.id ? 'white' : 'black' }}>{option?.item_desc}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        {/* <View style={styles.line} />
                        <Text style={{color: colors.color3A3A3C, fontWeight: 'bold', fontSize: fs(16)}}>Searched</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {options.map((option) => (
                                <TouchableOpacity
                                    key={option?.id}
                                    onPress={() => handleOptionPress(option)}
                                    style={option?.id === selectedOption?.id ? styles.selectedButton : styles.buttonGroup}
                                >
                                    <Text style={{fontSize: fs(14), color: option?.id === selectedOption?.id ? colors.white : colors.black }}>{option?.item_desc}</Text>
                                </TouchableOpacity>
                            ))}
                        </View> */}
                    </>
                ) : (
                    <FlatList
                        data={homeVM.movieList}
                        style={{paddingTop: vs(15)}}
                        renderItem={renderItem}
                        keyExtractor={(item) => item["#IMDB_ID"]}
                        horizontal={false}
                        ItemSeparatorComponent={renderItemSeparator}
                    />
                )}
            </View>
        </BaseScreen>
    );
};

const colors = LightColor as ColorType;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    styleSearchComponent: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        height: vs(45),
        borderRadius: vs(22),
        marginVertical: vs(8),
        alignItems: 'center',
        borderColor: colors.grey,
        borderWidth: ms(0.5),
    },
    txtTitle: {
        paddingLeft: vs(10),
        fontSize: fs(32),
        lineHeight: vs(34),
        letterSpacing: -ms(0.28),
        fontWeight: '600',
        color: colors.colorPrimary
    },
    input: {
        color: colors.black,
        padding: vs(0),
        height: vs(30),
        flex: 1,
        fontSize: fs(16)
        // borderColor: colors.colorCBCBCB,
        // borderWidth: ms(1)
    },
    styleComponent: {
        // width: DeviceUtils.getDeviceWidth() * 0.7,
        backgroundColor: colors.colorSearchBarBg,
        flexDirection: 'row',
        height: vs(40),
        borderRadius: vs(20),
        marginVertical: vs(8),
        alignItems: 'center',
        borderColor: colors.colorCBCBCB,
        borderWidth: ms(1),
    },
    buttonGroup: {
        backgroundColor: 'white',
        paddingVertical: vs(10),
        paddingHorizontal: vs(15),
        marginTop: vs(8),
        marginRight: vs(10),
        borderRadius: vs(10),
        borderColor: colors.grey,
        borderWidth: ms(0.5)
    },
    selectedButton: {
        backgroundColor: colors.colorPrimary,
        paddingVertical: vs(10),
        paddingHorizontal: vs(15),
        marginTop: vs(8),
        marginRight: vs(10),
        borderRadius: vs(10),
        borderColor: colors.colorPrimary,
        borderWidth: ms(1)
    },
    line: {
        width: '100%',
        height: vs(0.5),
        backgroundColor: colors.grey,
        marginVertical: vs(30)
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    poster: {
        width: DeviceUtils.getDeviceWidth() / 7,
        height: DeviceUtils.getDeviceWidth() / 7,
        borderRadius: vs(10),
        backgroundColor: colors.colorDBDBDB,
        marginRight: vs(15)
    },
    title: {
        fontSize: fs(14),
        fontWeight: 'bold',
        color: colors.color3A3A3C
    },
});

export default SearchMovieScreen;

