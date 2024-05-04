import { useAppDispatch } from "@commons";
import { getMovieListRequest } from "@store/reducer/HomeReducer";
import React from "react";

const HomeVM = () => {

    const dispatch = useAppDispatch();

    const getMovieList = (params: any) => {
        dispatch(getMovieListRequest({
            params,
            callBack: getListMovieSuccess,
        }))
    }

    const getListMovieSuccess = (data: any) => {
        
    }

    return {
        getMovieList
    }
}

export default HomeVM;