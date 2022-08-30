import { useState } from 'react'
import './App.css'
import Grid from '@mui/material/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Grid container spacing={2}>
            <Grid item xs={8}>
                xs=8
            </Grid>
            <Grid item xs={4}>
                xs=4
            </Grid>
            <Grid item xs={4}>
                xs=4
            </Grid>
            <Grid item xs={8}>
                xs=8
            </Grid>
        </Grid>
    </div>
  )
}

export default App
