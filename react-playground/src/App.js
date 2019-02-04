import React from 'react';
import List from './List';

function App(store) {
  const cardIds = [];
  const listList = store.map(list =>
    <List key={list.id} header={list.header} cards={allCards[list.cardIds]} />);
  return (
    <main className='App'>
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {{listList}}
      </div>
    </main>
  );
}

export default App;