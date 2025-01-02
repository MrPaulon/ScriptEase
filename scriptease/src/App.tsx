import React from 'react';
import './App.scss'; // Votre fichier SCSS pour le style
// Imports
import  BlockComponent from './modules/Block/BlockComponent';
import { Block } from './modules/Block/Block';


function App() {

  const CreateChild = () => {
    const child = new Block(2, "test 2", null, []);
    console.log(child);
    return child;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>FiveM Script Builder</h1>
      </header>
      <main>
        <div className="workspace">
          {/* Zone de blocs */}
          <p>Drag and drop blocks here</p>

          <BlockComponent 
            block={new Block(1, "Sujet 0", null, [])}
            onAddChild={(parent) => {
              const child = CreateChild();
              parent.addChild(child);
              console.log(parent);
            }}
            onRemove={(block) => {
              if (block.parent) {
                block.parent.removeChild(block.id);
              }
            }}
          />
          
        </div>
        <div className="code-preview">
          {/* Aperçu du code */}
          <h2>Generated Code</h2>
          <pre>
            {/* Placeholder pour le code généré */}
            -- Votre code généré apparaîtra ici
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;