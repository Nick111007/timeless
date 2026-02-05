import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HashRouter, Route, Routes} from "react-router";
import Navigation from "./Navigation.tsx";
import Calander from "./Calander.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<App />}></Route>
                <Route path="/products" element={<Calander />}></Route>
                <Route path="/cart" element={<App />}></Route>
            </Route>
        </Routes>
    </HashRouter>
  </StrictMode>,
)
