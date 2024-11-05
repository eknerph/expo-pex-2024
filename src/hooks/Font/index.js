import { useFonts } from "expo-font";
import { createContext } from "react";

const FontContext = createContext({})

export function FontProvider({ children }) {

  const [] = useFonts({});
  return <FontContext.Provider value={{}}>{children}</FontContext.Provider>
}

export function useFont() {
  const context = useContext(FontContext)
  if (!context) {
    throw new Error("useFont must be used within a FontProvider")
  }
  return context;
}