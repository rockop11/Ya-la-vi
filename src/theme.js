// ThemeProvider will wrap our entire application, and provide the theme’s context to all of the nested components.

export const lightTheme = {
  body: "#fff",
  text: "#373939",
};
export const darkTheme = {
  body: "#373939",
  text: "#fff",
};

// In App.jsx, we’ll import GlobalStyles, lightTheme and darkTheme, and use ThemeProvider to pass the selected theme to the child components:
// import React, { useState } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme, GlobalStyles } from './theme';
// const App = () => {
//   const [theme, setTheme] = useState("light");
//   const isDarkTheme = theme === "dark";
//   const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
//   return (
//     <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
//       <>
//         <GlobalStyles />
//         <h1>Hello!</h1>
//         <button onClick={toggleTheme}>
//           {isDarkTheme ?
//             <span aria-label="Light mode" role="img">🌞</span> :
//             <span aria-label="Dark mode" role="img">🌜</span>}
//         </button>
//       </>
//     </ThemeProvider>
//   );
// }
// export default App;

// Notice that we’re passing the selected theme as the theme property, so the destructuring in GlobalStyles will work. This theme property will be available in all of the child components, so you don’t have to worry about prop-drilling. You can apply the same logic that we used in GlobalStyles in all of your components, to color anything that’s not inherited from the body’s settings (for example, an input component’s text color).
