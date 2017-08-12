export type CurrentPathAction = {
  type: 'SET_CURRENT_PATH',
  payload: string
};


export type TempTestSomeValueAction = {
  type: 'SET_TEMP_TEST_SOME_VALUE',
  payload: number;
}


export type Action
  = CurrentPathAction
  | TempTestSomeValueAction;
