// "use client"
// import { createContext, useState, useEffect ,ReactNode} from "react";

// interface ThemeContextProps {
//     theme: string;
//     toggle: () => void;
//   }

// export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// const getFromLocalStorage = (): string =>{

//     if(typeof window !== "undefined"){
//         const value = localStorage.getItem("theme")
//         return value || "light"
//     }
    
//     return "light";
// }

// export const ThemeContextProvider : React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [theme, setTheme] = useState(()=>{
//         return getFromLocalStorage();
//     });

//     const toggle = () =>{
//         setTheme(theme==="light" ? "dark" : "light")
//     }

//     useEffect(()=>{
//         localStorage.setItem("theme",theme);
//     },[theme])
//   return (
//     <ThemeContext.Provider value={{ theme , toggle }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
