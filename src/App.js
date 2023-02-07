import { useState, createContext } from 'react';
import Header from './components/header/Header.js';
import Presentation from './components/Presentation.js';
import Cards from './components/cards/Cards.js';
import Tokenize from './components/tokenize/Tokenize.js';
import Generate from './components/generate/Generate.js';

export const Context = createContext();

function App() {


  const [tokenize, setTokenize] = useState(false);
  const [generate, setGenerate] = useState(false);
  const [BB, showBB] = useState(false);

  if (tokenize) {
    return (
      <Tokenize setTokenize={setTokenize} />
    )
  }

  if (generate) {
    return (
      <Generate setGenerate={setGenerate} />
    )
  }

  return (
    <Context.Provider value={[{setTokenize}, {setGenerate}]}>
      <div className="h-screen w-full flex flex-col items-center">
        <Presentation />
        <Cards />
      </div>
    </Context.Provider>
  );
}

export default App;
