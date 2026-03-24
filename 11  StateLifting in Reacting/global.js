import { createContext } from "react";

const GlobalContext = createContext("kishan");//you can ut here anything
//when you pass the vlue from the globalcontext.provider it replace the value to the provided value
export default GlobalContext;