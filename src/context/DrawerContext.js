import { createContext } from "react";

export const DrawerContext = createContext({
  isOpen: false,
  onDrawerClose: () => {},
});
const DrawerContextProvider = DrawerContext.Provider;

export default DrawerContextProvider;
