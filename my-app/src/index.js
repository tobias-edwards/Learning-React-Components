import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import data from "./sample-data.json";
import UserCard from "./components/user-card";
import ToggleButton from "./components/ToggleButton";
import Gallery from "./components/gallery";
import AddCardForm from "./components/add-card-form";
import Stopwatch from "./components/stopwatch";
import Draggable from "./components/draggable";
import DraggableCard from "./components/DraggableCard";
import GIFViewer from "./components/gif-viewer";
import StarRatingInteractive from "./components/StarRatingInteractive";
import ColourList from "./components/ColourList";
import AddColourForm from "./components/AddColourForm";
import colourData from "./colour-data.json";

const Main = (props) => {
  const [colours, setColours] = useState(colourData);

  return (
    <div className="center">
      {/* Props passing */}
      <div className="flex-item">
        <AddColourForm />
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
        {props.userData.users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
        <AddCardForm addUser={(name, age) => <UserCard {...name} {...age} />} />
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

class MainClass extends React.Component {
  prevUserId = 6;

  render() {
    return (
      <div className="center">
        {/* User cards */}

        <div className="flex-item all-cards">
          {this.props.userData.users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
          <AddCardForm addUser={this.handleAddUser} />
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
      </div>
    );
  }
}

ReactDOM.render(<Main userData={data} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
