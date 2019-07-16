const initialState = {
    isWelcomePageDisplayed: false,
    isDiscoverPageDisplayed: true,
  };
  
  const circusReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_DISCOVER':
        return {
          ...state,
          isWelcomePageDisplayed: !state.isWelcomePageDisplayed,
          isDiscoverPageDisplayed: !state.isDiscoverPageDisplayed,
        };
      case 'GET_POIS_SAMPLE':
        return {
          ...state,
          poiSampleDisplay: action.poiSampleDisplay,
        };
      case 'GET_POIS_KEYWORDS':
        return {
          ...state,
          poiKeywordsDisplay: action.poiKeywordsDisplay,
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
