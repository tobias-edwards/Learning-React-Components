import React, { useState, useEffect, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as serviceWorker from './serviceWorker';
import './index.css';
import userData from './user-data.json';
import UserCard from './components/user-card';
import ToggleButton from './components/ToggleButton';
import Gallery from './components/gallery';
import AddUserCardForm from './components/AddUserCardForm';
import Stopwatch from './components/stopwatch';
import Draggable from './components/draggable';
import DraggableCard from './components/DraggableCard';
import GIFViewer from './components/gif-viewer';
import StarRatingInteractive from './components/StarRatingInteractive';
import ColourList from './components/ColourList';
import AddColourForm from './components/AddColourForm';
import ColourListContext from './components/ColourListContext';
import AddColourContext from './components/AddColourContext';
import colourData from './colour-data.json';
import { ColourProvider } from './hooks/colour-hooks';
import Counter from './components/Counter';
import Pure from './components/Pure';
import Impure from './components/Impure';

const App = () => {
  const [colours, setColours] = useState(colourData);
  const [users, setUsers] = useState(userData);

  return (
    <div className="center">
      {/* Testing Pure components performance */}
      <div className="flex-item">
        <h1>Pure components</h1>
        <Pure />
      </div>
      <div className="flex-item">
        <h1>Impure component</h1>
        <Impure />
      </div>

      <div className="flex-item">
        <Counter />
      </div>

      {/* Context time */}
      <div className="flex-item">
        {/* Pass as object i.e. value = {colourData: colourData, ...} */}
        <ColourProvider>
          <AddColourContext />
          <ColourListContext />
        </ColourProvider>
      </div>

      {/* Props passing */}
      <div className="flex-item">
        <AddColourForm
          onNewColour={(title, colour) =>
            setColours([
              {
                id: uuidv4(),
                rating: 0,
                title,
                colour,
              },
              ...colours,
            ])
          }
        />
      </div>

      {/* Props passing */}
      <div className="flex-item">
        <ColourList
          colours={colours}
          onRateColour={(id, rating) =>
            setColours(
              colours.map((colour) =>
                colour.id === id ? { ...colour, rating } : colour
              )
            )
          }
          onRemoveColour={(id) => {
            setColours(colours.filter((colour) => colour.id !== id));
          }}
        />
      </div>

      {/* Star rating */}
      <div className="flex-item">
        <StarRatingInteractive totalStars={5} />
      </div>

      {/* Generic Draggable Component */}
      <div className="flex-item">
        <Draggable dragHandle>
          <DraggableCard />
          <DraggableCard />
          <DraggableCard />
        </Draggable>
      </div>

      {/* User cards */}
      <div className="flex-item all-cards">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
        <AddUserCardForm
          addUser={(name, age) => {
            setUsers([
              {
                name,
                age,
                money: 0,
                id: users.length + 1,
              },
              ...users,
            ]);
          }}
        />
      </div>

      {/* Toggle Button */}
      <div className="flex-item">
        <ToggleButton />
      </div>

      {/* Gallery */}
      <div className="flex-item">
        <Gallery />
      </div>

      {/* Stopwatch */}
      <div className="flex-item">
        <Stopwatch />
      </div>

      {/* Fetch GIF Cards */}
      <div className="flex-item">
        <GIFViewer />
      </div>
    </div>
  );
};

export default App;
