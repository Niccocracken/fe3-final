import { createContext, useEffect, useReducer} from "react";

export const initialState = { theme: "", data: [] }

export const ContextGlobal = createContext(undefined);

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
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'setData', data });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};