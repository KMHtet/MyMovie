import { PayloadAction } from '@reduxjs/toolkit';
import { call, ForkEffect, takeLatest } from 'redux-saga/effects';
import { HomeService } from '@services';
import { getMovieListRequest } from '@store/reducer/HomeReducer';
import { AxiosResponse } from 'axios';

const api = HomeService.getInstance();

export function* getMovieListSaga(action: PayloadAction<any>) {
    try {
        const { payload } = action;
        let response: AxiosResponse = yield call(api.movieList, payload);
        console.warn("response", response);
    } catch (error) {
        console.warn('kmh', 'response error', error);
    }
}

function* HomeSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(getMovieListRequest.type, getMovieListSaga);
}

export default HomeSaga;
