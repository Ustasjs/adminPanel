import { fork } from 'redux-saga/effects';
import {fetchSkillsWatch} from './fetchSkills';

export default function*() {
  yield fork(fetchSkillsWatch);
}
