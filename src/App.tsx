import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={null}>
                <Home />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
