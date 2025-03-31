import React from "react";
import InternshipForm from "./InternshipForm";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      {/* <Header /> */}

      {/* Main Content */}
      <main className="flex-1">
        <InternshipForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
