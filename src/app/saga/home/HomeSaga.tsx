import {PayloadAction} from '@reduxjs/toolkit';
import {call, ForkEffect, takeLatest} from 'redux-saga/effects';
import {HomeService} from '@services';

const api = HomeService.getInstance();

function* HomeSaga(): Generator<ForkEffect<never>, void> {
  
}

export default HomeSaga;
