// import logo from './logo.svg';
 import './App.css';
 import { AppProvider } from './Components/providers/app-provider';
 import { MuiMode } from './Components/mui/mui-mode';
  

function App() {
  return ( 
    <AppProvider>
      <div className="App">
        <MuiMode />
      </div>
    </AppProvider>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//           data-testid='learn-link'
//         >
//           Learn Testing
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
