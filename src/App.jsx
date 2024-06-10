import "./App.css";

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userDataFile from "./userData.json";
import friendsFile from "./friends.json";
import transactionsFile from "./transactions.json";

function App() {
  const userData = JSON.parse(userDataFile);
  const friends = JSON.parse(friendsFile);
  const transactions = JSON.parse(transactionsFile);
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
