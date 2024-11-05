import { useFonts } from "expo-font";
import { createContext } from "react";

const FontContext = createContext({})

export function FontProvider({ children }) {

  const [loaded, error] = useFonts({
    regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
    bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });
  return <FontContext.Provider value={{}}>{children}</FontContext.Provider>
}

export function useFont() {
  const context = useContext(FontContext)
  if (!context) {
    throw new Error("useFont must be used within a FontProvider")
  }
  return context;
}