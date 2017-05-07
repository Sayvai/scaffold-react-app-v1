const storeMock = state => (
  {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => (
      { ...state }
    ),
  }
);

export default storeMock;
