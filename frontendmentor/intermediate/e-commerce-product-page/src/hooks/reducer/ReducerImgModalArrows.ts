export enum REDUCER_ACTION {
  INCREASE = "increase",
  DECREASE = "decrease",
  SPECIFIC = "specific",
  INITIAL = "initial",
}

type IndexStateActionType = {
  type: REDUCER_ACTION;
  payload?: number;
};

type IndexStateType = number;

export function ReducerImgModalArrows(
  indexState: IndexStateType | 0,
  action: IndexStateActionType
) {
  return indexState;
  // switch (action.type) {
  //   case REDUCER_ACTION.INITIAL:
  //     indexState = 0;
  //     return indexState;
  //   case REDUCER_ACTION.INCREASE:
  //     if (indexState < 3) {
  //       indexState++;
  //     }
  //     return indexState;
  //   case REDUCER_ACTION.DECREASE:
  //     if (indexState > 0) {
  //       indexState--;
  //     }
  //     return indexState;
  //   case REDUCER_ACTION.SPECIFIC:
  //   indexState = action.payload;
  //   return indexState;
  // }
}
