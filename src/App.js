import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Website from "./components/Website";

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<Website />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}