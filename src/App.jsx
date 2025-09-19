import "./App.css";
import Countries from "./components/Countries";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<h5>Loading...</h5>}>
        <Countries></Countries>
      </Suspense>
      <h1>World On The Go...</h1>
    </>
  );
}

export default App;
