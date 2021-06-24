import { State as EducationState } from './education';
import { State as TickersState } from './tickers';
export interface RootState {
  education: EducationState;
  tickers: TickersState;
}
