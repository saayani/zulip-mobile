/* @flow */
import type { RealmState, Action } from '../types';
import {
  REALM_INIT,
  EVENT_REALM_EMOJI_UPDATE,
  LOGOUT,
  LOGIN_SUCCESS,
  ACCOUNT_SWITCH,
  INIT_REALM_EMOJI,
  EVENT_UPDATE_DISPLAY_SETTINGS,
  SAVE_TOKEN_PUSH,
  DELETE_TOKEN_PUSH,
  INIT_REALM_FILTER,
  EVENT_REALM_FILTER_UPDATE,
} from '../actionConstants';

// Initial state
const initialState = {
  twentyFourHourTime: false,
  pushToken: '',
  emoji: {},
  filter: [],
};

const reducer = (state: RealmState = initialState, action: Action): RealmState => {
  switch (action.type) {
    case REALM_INIT:
      return {
        ...state,
        twentyFourHourTime: action.data.twenty_four_hour_time,
      };

    case ACCOUNT_SWITCH:
      return initialState;
    case SAVE_TOKEN_PUSH: {
      return {
        ...state,
        pushToken: action.pushToken,
      };
    }
    case DELETE_TOKEN_PUSH: {
      return {
        ...state,
        pushToken: '',
      };
    }
    case LOGOUT:
    case LOGIN_SUCCESS:
      return {
        ...state,
        emoji: {},
        pushToken: '',
      };
    case INIT_REALM_EMOJI:
      return {
        ...state,
        emoji: action.emojis,
      };
    case INIT_REALM_FILTER: {
      return {
        ...state,
        filter: action.filters,
      };
    }
    case EVENT_REALM_FILTER_UPDATE: {
      return {
        ...state,
        filter: action.realm_filters,
      };
    }
    case EVENT_REALM_EMOJI_UPDATE:
      return {
        ...state,
        emoji: action.realm_emoji,
      };
    case EVENT_UPDATE_DISPLAY_SETTINGS:
      switch (action.setting_name) {
        case 'twenty_four_hour_time':
          return { ...state, twentyFourHourTime: action.setting };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default reducer;
