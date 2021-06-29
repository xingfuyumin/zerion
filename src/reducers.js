const reducers = (oldState = {}, action) => {
  const { type, meta } = action;
  switch (type) {
    case 'UPDATE_STATE':
      return {
        ...oldState,
        ...meta,
      }
    default:
      return oldState;
  }
}

export default reducers;