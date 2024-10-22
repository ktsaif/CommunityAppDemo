/**
 * @module NavigationUtilsHook
 * @desc Utility functions for react-navigation library
 * ...
 */

import {createNavigationContainerRef} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

/**
 * Use on ref to get access on navigation container to various helper method.
 */
export const navigationRef = createNavigationContainerRef();

/**
 * Allows to navigate to a specific route.
 * @param {string} name A destination name of the route that has been registered somewhere.
 * @param {object} params Params to merge into the destination route
 */

export function navigate<T extends Record<string, object>>(
  name: keyof T,
  params?: T[keyof T] | undefined,
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

/**
 * Returns active route name.
 */
export const getActiveRoute = () => {
  let currentRouteName = navigationRef.getCurrentRoute()?.name;
  return currentRouteName;
};

/**
 * Allows to go back to the previous route in history.
 */
export const goBack = () => {
  navigationRef.dispatch(CommonActions.goBack());
};

/**
 * Reset the navigation state to the given state.
 * @param {object} newState The new navigation state object to use.
 */
type ResetState = {
  index: number;
  routes: {name: string; params?: object}[];
};

export const resetNavigation = (newState: ResetState | undefined) => {
  try {
    navigationRef.dispatch(CommonActions.reset(newState));
  } catch (error) {}
};
