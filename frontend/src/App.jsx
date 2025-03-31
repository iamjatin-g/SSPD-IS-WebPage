import React from "react";
import { ToastContainer } from 'react-toastify';  // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
