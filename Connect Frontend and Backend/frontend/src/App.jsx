import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    axios.get('/api/job')
      .then((res) => {
        setJobs(res.data)
      })
      .catch((err) => {
        console.error('Error fetching job data:', err);
      });
  },)
  return (
    <>
      <h1>Frontend</h1>
      <p>jobs:{jobs.length}</p>
      {
        jobs.map((job) => (
          <div key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
