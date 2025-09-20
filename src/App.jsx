import "./App.css";
import Countries from "./components/Countries/Countries";
import { Suspense } from "react";

function App() {
  const countriesPromise = fetch(
    "https://openapi.programming-hero.com/api/all"
  ).then((res) => res.json());
  return (
    <>
      <h1>World On The Go...</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
