const initialState = {
  isWelcomePageDisplayed: true,
  isDiscoverPageDisplayed: false,
  isPriceListDisplayed: false,
};

const circusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DISCOVER_HOME':
      return {
        ...state,
        isWelcomePageDisplayed: !state.isWelcomePageDisplayed,
        isDiscoverPageDisplayed: !state.isDiscoverPageDisplayed,
      };
    case 'TOGGLE_BUY_TICKETS_HOME':
      return {
        ...state,
        isWelcomePageDisplayed: !state.isWelcomePageDisplayed,
        isPriceListDisplayed: !state.isPriceListDisplayed
      };
    case 'TOGGLE_DISCOVER_BUY_HOME':
      return {
        ...state,
        isPriceListDisplayed: !state.isPriceListDisplayed,
        isDiscoverPageDisplayed: !state.isDiscoverPageDisplayed,
      };
    case 'SHOW_POI_INFOS':
      return {
        ...state,
        specificPoiInfos: action.specificPoiInfos,
      };
    default:
      return state;
  }
};

export default circusReducer;
