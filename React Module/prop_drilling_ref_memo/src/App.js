import "./App.css";
import { FamilyContext } from "./Context/FamilyContext";
import FamilyC from "./ContextComponents/FamilyC";

function App() {
  const familyInfo = {
    familyName: "The Griffins",
    onlyForParents: () => {
      return "Info for Parents";
    },
    onlyForChildren: () => {
      return "Info For Children";
    },
    onlyForGrandChildren: () => {
      return "Info For Grand Children";
    },
  };
  return (
    <div className="App">
      <FamilyContext.Provider value={familyInfo}>
        <FamilyC info={familyInfo} />
      </FamilyContext.Provider>
    </div>
  );
}

export default App;
