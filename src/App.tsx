import * as React from "react";
import HomePage from "./pages/HomePage";

const App: React.FC = (): React.ReactElement => (
  <>
    <main className="bg-white flex h-screen">
      <HomePage />
    </main>
  </>
);

export default App;
