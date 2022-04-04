  const initialState: State = {
    ids: [],
    loading: false,
    error: null,
  };
  
 export function reducer(
  state = initialState,
  action: TopStoriesActions,
 ): State {
  switch (action.type) {

    case TopStoriesActionTypes.Refresh:
      return {
      ...state,
      loading: true,
      };

  case TopStoriesActionTypes.LoadSuccess:
    return {
      loading: false,
      ids: action.payload,
      error: null,
    };
    case TopStoriesActionTypes.LoadFail:
    return {
    ...state,
    loading: false,
    error: action.payload,
    };

    default: {
      return state;
      }
   } 
}