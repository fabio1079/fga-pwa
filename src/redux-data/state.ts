export type CurrentPathState = string;

export type TemporaryTestState = {
  someTestValue: number
};

export type State = {
  currentPath: CurrentPathState,
  temporaryTestState: TemporaryTestState
};

const initialState: State = {
  currentPath: '/',

  temporaryTestState: {
    someTestValue: 123
  }
};

export default initialState;