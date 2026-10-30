import React from "react";
import { Launchpad } from "./ui/components/Launchpad";
import { NewsSection } from "./ui/components/NewsSection";
import "./ui/components/launchpad.css";

export function App() {
  return (
    <div className="app-shell">
      <main className="launchpad-main" role="main" aria-label="درگاه پیوندهای انجمن علمی مهندسی صنایع">
        <Launchpad />
      </main>
      <NewsSection />
    </div>
  );
}

export default App;
