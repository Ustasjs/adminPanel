import { call, takeLatest } from 'redux-saga/effects';

import { fetchStruct } from './struct';

export function* fetchSkills() {
  const { result, error } = yield call(fetchStruct, `skills`);
  console.log("ololo");
};

export function* fetchSkillsWatch() {
  yield takeLatest('FETCH_SKILLS', fetchSkills);
}