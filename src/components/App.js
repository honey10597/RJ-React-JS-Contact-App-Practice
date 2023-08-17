import "./App.css";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const conatcts = [
    {
      id: 1,
      name: "Ritika",
      email: "Ritika@gmail.com",
    },
    {
      id: 2,
      name: "Honey",
      email: "Honey@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList conatcts={conatcts} />
    </div>
  );
}

export default App;
