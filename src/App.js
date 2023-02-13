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

  console.log(screen.width)

  return (
    <Context.Provider value={[{ setTokenize }, { setGenerate }]}>
      <div className='background h-[100vh] w-[100vw]'>
        <div className="h-screen w-full bg-[rgba(0,0,0,0.6)] flex flex-col items-center app">
          <Presentation />
          <Cards />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
