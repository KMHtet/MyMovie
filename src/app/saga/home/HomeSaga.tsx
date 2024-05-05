import { PayloadAction } from '@reduxjs/toolkit';
import { call, ForkEffect, takeLatest } from 'redux-saga/effects';
import { HomeService } from '@services';
import { getMovieDetailRequest, getMovieListRequest } from '@store/reducer/HomeReducer';
import { AxiosResponse } from 'axios';
import { isUndefined } from '@utils/Utils';
import { BasePopupModal, LoaddingModal } from '@components';
import { checkResponseStatus } from '@utils/ApiUtils';

const api = HomeService.getInstance();

export function* getMovieListSaga(action: PayloadAction<any>) {
    try {
        const { payload } = action;
        LoaddingModal.show();
        let response: AxiosResponse = yield call(api.movieList, payload);
        LoaddingModal.close();
        console.warn("response", response.data);
        if (
            !isUndefined(response) &&
            !isUndefined(response?.data) &&
            !isUndefined(response?.data?.description) &&
            response?.status == 200) {
            if (!isUndefined(payload?.callBack)) {
                yield call(payload?.callBack, response?.data?.description);
            }
        } else if (
            !isUndefined(response) &&
            !isUndefined(response?.data) &&
            !isUndefined(response?.data?.description) &&
            response?.status == 200 &&
            response?.data?.description.length == 0
        ) {
            BasePopupModal.show({
                title: 'Information',
                children: 'No movie with this name',
                subButtonTitle: 'Ok'
            })
        } else checkResponseStatus(response);
    } catch (error) {
        
        console.warn('kmh', 'response error', error);
    }
}

export function* getMovieDetailSaga(action: PayloadAction<any>) {
    try {
        const { payload } = action;
        LoaddingModal.show();
        let response: AxiosResponse = yield call(api.movieDetail, payload);
        console.warn("kyaw movie detail saga", response?.data);
        console.warn("kyaw payload?.callBack", payload?.callBack);
        LoaddingModal.close();
        if (
            !isUndefined(response) &&
            !isUndefined(response?.data) &&
            response?.status == 200) {
            if (!isUndefined(payload?.callBack)) {
                yield call(payload?.callBack, response?.data);
            }
        } else checkResponseStatus(response);
    } catch (error) {
        console.warn('kmh', 'response error', error);
    }
}

function* HomeSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(getMovieListRequest.type, getMovieListSaga);
    yield takeLatest(getMovieDetailRequest.type, getMovieDetailSaga);
}

export default HomeSaga;
