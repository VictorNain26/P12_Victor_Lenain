import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Dashboard } from "./pages/dashboard";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Header/>
    <div className='flex'>
      <Sidebar />
      <Dashboard />
    </div>
  </React.StrictMode>
);
