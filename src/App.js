

import { Section } from './components/Section/Section';
import { Title } from './components/Title/Title';
import { ListEvents } from './components/ListEvents/ListEvents';
import { Event } from './components/Event/Event';
import games from "./games.json";

import './App.css';

function App() {
  return (
    <Section>
      <Title text="Найпопулярніші ігри" />
      <ListEvents>
        <Event games={games} />
      </ListEvents>
    </Section>
  );
}

export default App;
