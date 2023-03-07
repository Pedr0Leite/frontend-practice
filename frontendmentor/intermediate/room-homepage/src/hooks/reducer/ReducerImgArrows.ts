export enum REDUCER_ACTION {
    INCREASE = "increase",
    DECREASE = "decrease",
    INITIAL = "initial",
  }
  
  type IndexStateActionType = {
    type: REDUCER_ACTION;
    payload?: number;
  };
  
  type IndexStateType = number;
  
  export function ReducerImgArrows(
    indexState: IndexStateType,
    action: IndexStateActionType
  ) {
    switch (action.type) {
      case REDUCER_ACTION.INITIAL:
        indexState = 0;
        return indexState;
      case REDUCER_ACTION.INCREASE:
        if (indexState < 2) {
          indexState++;
        }
        return indexState;
      case REDUCER_ACTION.DECREASE:
        if (indexState > 0) {
          indexState--;
        }
        return indexState;
    }
  }
  