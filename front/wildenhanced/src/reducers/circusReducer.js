const initialState = {
  isWelcomePageDisplayed: true,
  isDiscoverPageDisplayed: false,
  isPriceListDisplayed: false,
  isReservationFormDisplayed: false,
  isCongratsPageDisplayed: false,
  datesTable: [],
  dateChosen: '',
  dateChosenId: '',
  firstNameTyped: '',
  lastNameTyped: '',
  emailTyped: '',
  adultTicketsNumber: '',
  childTicketsNumber: '',
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
    case 'DISPLAY_FORM':
      return {
        ...state,
        isPriceListDisplayed: !state.isPriceListDisplayed,
        isReservationFormDisplayed: !state.isReservationFormDisplayed,
      };
    case 'GET_SHOW_DATES':
      return {
        ...state,
        datesTable: action.datesTable,
      };
    case 'SAVE_FORM_VALUES':
      return {
        ...state,
        dateChosen: action.dateChosen ? action.dateChosen : state.dateChosen,
        dateChosenId: action.dateChosenId ? action.dateChosenId : state.dateChosenId,
        firstNameTyped: action.firstNameTyped ? action.firstNameTyped : state.firstNameTyped,
        lastNameTyped: action.lastNameTyped ? action.lastNameTyped : state.lastNameTyped,
        emailTyped: action.emailTyped ? action.emailTyped : state.emailTyped,
        adultTicketsNumber: action.adultTicketsNumber ? action.adultTicketsNumber : state.adultTicketsNumber,
        childTicketsNumber: action.childTicketsNumber ? action.childTicketsNumber : state.childTicketsNumber,
      };
    case 'DISPLAY_CONGRATS':
      return {
        ...state,
        isCongratsPageDisplayed: true,
        isReservationFormDisplayed: !state.isReservationFormDisplayed,
      };
    case 'TOGGLE_CONGRATS_HOME':
      return {
        ...state,
        isCongratsPageDisplayed: false,
        isWelcomePageDisplayed: !state.isWelcomePageDisplayed,
      };
    case 'TOGGLE_CONGRATS_DISCOVER':
      return {
        ...state,
        isCongratsPageDisplayed: false,
        isDiscoverPageDisplayed: !state.isDiscoverPageDisplayed,
      };
    case 'BACK_HOME':
      return {
        ...state,
        isWelcomePageDisplayed: !state.isWelcomePageDisplayed,
        isReservationFormDisplayed: false,
      };
    default:
      return state;
  }
};

export default circusReducer;
