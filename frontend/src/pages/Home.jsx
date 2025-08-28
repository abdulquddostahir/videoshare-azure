import React from 'react'
import { Link } from 'react-router-dom'
import { apiBase } from '../config'
export default function Home(){const [list,setList]=React.useState([]);React.useEffect(()=>{fetch(apiBase()+'/videos/latest').then(r=>r.json()).then(setList)},[]);return(<div className='container'><h2>Latest videos</h2><div className='grid'>{list.map(v=>(<Link className='card' key={v.id} to={'/video/'+v.id}><h3>{v.title}</h3><div className='small'>{v.genre} · {v.ageRating} · by {v.publisher}</div></Link>))}</div></div>)}
