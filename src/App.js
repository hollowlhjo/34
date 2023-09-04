import React from "react";
import { BrowserRouter,Routes, Route, Link, useParams } from "react-router-dom";
import { FriendsContextProvider } from "./mycontext"

const FriendsApi = {
  friends: [
    { number: 1, name: "Valentine", hobby: "None", age: "14" },
    { number: 2, name: "Zahar", hobby: "Computer games", age: "15" },
    { number: 3, name: "Yaroslaw", hobby: "Basketball", age: "13" },
  ],
  all: function () {
    return this.friends;
  },
  get: function (id) {
    const isFriend = (friend) => friend.number === id;
    return this.friends.find(isFriend);
  },
};

const AllFriends = () => (
  <div>
    <ul>
      {FriendsApi.all().map((friend) => (
        <li key={friend.number}>
          <Link to={`/friends/${friend.number}`}>{friend.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Friend = () => {
  const { number } = useParams();
  const friend = FriendsApi.get(parseInt(number, 10));

  if (!friend) {
    return <div>Sorry, but the friend was not found</div>;
  }

  return (
    <div>
      <h1>{friend.name}(#{friend.number})</h1>
      <h2>Hobby: {friend.hobby}</h2>
      <h2>Age: {friend.age}</h2>
      <Link to="/friends">Back</Link>
    </div>
  );
};

const Home = () => (
  <div>
    <h1>Welcome to the My Friends List Website</h1>
  </div>
);

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/friends">Friends</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const App = () => (
  <BrowserRouter>
    <FriendsContextProvider>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<AllFriends />} />
        <Route path="/friends/:number" element={<Friend />} />
      </Routes>
    </div>
    </FriendsContextProvider>
  </BrowserRouter>
);

export default App;