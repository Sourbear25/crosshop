import React from 'react'

export default function App() {
  return (
    <div style={{fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', padding: 24}}>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <div style={{width:36, height:36, borderRadius:12, background:'#111', display:'grid', placeItems:'center', color:'#fff', fontWeight:700}}>
          X
        </div>
        <h1 style={{margin:0}}>CrossHop</h1>
      </div>
      <p style={{marginTop:8, color:'#555'}}>International passport & visa comparison (prototype).</p>

      <section style={{marginTop:24, padding:16, border:'1px solid #e5e7eb', borderRadius:12}}>
        <h2 style={{marginTop:0}}>Status</h2>
        <ul>
          <li>Frontend: React + Vite is running ✅</li>
          <li>Backend: Connects to <code>crosshop-api</code> (configure URL in <code>.env</code> later)</li>
        </ul>
      </section>
    </div>
  )
}