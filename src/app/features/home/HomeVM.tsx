import { useAppDispatch } from "@commons";
import { getMovieDetailRequest, getMovieListRequest } from "@store/reducer/HomeReducer";
import React, { useState } from "react";
import { TMovie } from "./Type";

const HomeVM = () => {

    const dispatch = useAppDispatch();

    const [movieList, setMovieList] = useState<TMovie[]>([]);

    const getMovieList = (params: any) => {
        dispatch(getMovieListRequest({
            params,
            callBack: getListMovieSuccess,
        }))
    }

    const getListMovieSuccess = (data: any) => {
        setMovieList(data);
    }

    const getMovieDetail = (
        Id?: string,
        callbackInfo?: (data: any) => void,
    ) => {
        const param = {
            Id
        };
        dispatch(getMovieDetailRequest({
            param,
            callBack: (data: any) => {
                callbackInfo && callbackInfo(data);
            },
        }))
    }

    return {
        getMovieList,
        movieList,
        getMovieDetail
    }
}

export default HomeVM;