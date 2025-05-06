import { RootState } from "../store";

export const selectIsUserAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
