import { createContext, useEffect, useMemo, useReducer} from "react";

export const initialState = { theme: "light", data: [] }

export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "changeTheme":
      return { ...state, theme: action.theme }
    case "setData":
      return { ...state, data: action.data }
    default:
      return state
  }
}
export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(()=>{
        const fetchData= async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'setData', data:data });
  }
  fetchData()
}, []);

  const handleChangeTheme = () => {
    dispatch({ type: 'changeTheme', theme: state.theme === 'dark' ? 'light' : 'dark' });
  }

  const contextValue = useMemo(() => ({ state, handleChangeTheme }), [state, handleChangeTheme])

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};