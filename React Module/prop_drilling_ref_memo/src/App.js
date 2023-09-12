import "./App.css";
import Memoize from "./RefAndMemo/Memoize";
// import { FamilyContext } from "./Context/FamilyContext";
// import FamilyC from "./ContextComponents/FamilyC";

function App() {
  // const familyInfo = {
  //   familyName: "The Griffins",
  //   onlyForParents: () => {
  //     return "Info for Parents";
  //   },
  //   onlyForChildren: () => {
  //     return "Info For Children";
  //   },
  //   onlyForGrandChildren: () => {
  //     return "Info For Grand Children";
  //   },
  // };
  return (
    <div className="App">
      {/* <FamilyContext.Provider value={familyInfo}>
        <FamilyC info={familyInfo} />
      </FamilyContext.Provider> */}
      {/* <Reference /> */}
      <Memoize />
    </div>
  );
}

export default App;
