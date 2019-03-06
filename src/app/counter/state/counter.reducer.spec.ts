import { counterReducer, initialState } from './counter.reducer';

describe('Counter Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = counterReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
