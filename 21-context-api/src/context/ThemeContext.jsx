import React, { createContext, useState } from "react";

//1. create context
export const ThemeDataContext = createContext();

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('light');

  return (
    <div>
      {/* 2. Provider: */}
      <ThemeDataContext.Provider value={{theme, setTheme}} >
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;
