  export const adapter: EntityAdapter<Todo> = createEntity 
    Adapter<Item>({
    selectId: (item: Item) => item.id,
    sortComparer: false,
  });

  export const initialState: State = adapter.getInitialState({
    loading: false,
    error: null,
  });

  export function reducer(
      state = initialState,
      action: ItemActions,
  ): State {
  switch (action.type) {
    case ItemActionTypes.Load: {
      return {
      ...state,
      loading: true,
      };
    }
    
    case ItemActionTypes.LoadSuccess: {
      return adapter.upsertMany(action.payload, {
        ...state,
        loading: false,
        error: null,
        });
      }

      case ItemActionTypes.LoadFail: {
        return {
          ...state,
            loading: false,
            error: action.payload,
           };
        }

        default: {
          return state;
        }
      } }