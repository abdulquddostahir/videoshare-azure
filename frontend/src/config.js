export function apiBase(){return (typeof window!=='undefined'&&window.__API_BASE__)||import.meta.env.VITE_API_BASE||window.localStorage.getItem('apiBase')||'http://localhost:7071/api'}
