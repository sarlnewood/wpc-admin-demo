import React from 'react';
import ReactDOM from 'react-dom/client';

function AdminApp() {
  return <h1>Bienvenue dans l'interface Admin WPC</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminApp />
  </React.StrictMode>
);