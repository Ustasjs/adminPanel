import { put, call } from 'redux-saga/effects';
import { startStructFetch, stopStructFetch } from 'redux-struct';

import {fetchSkills} from '../api';

export function* fetchStruct(structId) {
  try {
    yield put(startStructFetch(structId));
    const result = yield call(fetchSkills);
    yield put(stopStructFetch(structId, result));
    return { result };
  } catch (error) {
    yield put(stopStructFetch(structId, error));
    return { error };
  }
};