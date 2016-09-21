import {
  createSelector,
} from 'reselect';

const selectCustomReducer = () => (state) => state.get('customReducer');

const selectTopLevelTab = () => createSelector(
  selectCustomReducer(),
  (substate) => substate.get('currentTopLevelTab')
);

const selectLowLevelTab = () => createSelector(
  selectCustomReducer(),
  (substate) => substate.get('currentLowLevelTab')
);

const selectCurrentProduct = () => createSelector(
  selectCustomReducer(),
  (substate) => substate.get('currentSelectedProduct')
);

const selectNewestUploadedImage = () => createSelector(
  selectCustomReducer(),
  (substate) => substate.get('newestProductUploaded')
);

export {
  selectTopLevelTab,
  selectLowLevelTab,
  selectCurrentProduct,
  selectNewestUploadedImage,
};
