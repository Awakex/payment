import React from "react";
import { Payment, PaymentCheck } from "./features/payment";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="/check/:pid" element={<PaymentCheck />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
