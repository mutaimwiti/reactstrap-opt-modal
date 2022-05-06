import { createContext } from "react";

const StateContext = createContext({ state: {}, setState: () => {} });

export default StateContext;
