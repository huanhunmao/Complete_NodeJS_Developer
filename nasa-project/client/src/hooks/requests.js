const API_URL = 'http://localhost:8000'

async function httpGetPlanets() {
  // Load planets and return as JSON.
  const response = await fetch(`${API_URL}/planets`)
  const resJson = await response.json();
  return  resJson
}

async function httpGetLaunches() {
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${API_URL}/launches`)
  const resJson = await response.json();
  return resJson.sort((a, b) => a.flightNumber - b.flightNumber)
}

async function httpSubmitLaunch(launch) {
  // Submit given launch data to launch system.
  try{
    return  await fetch(`${API_URL}/launches`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(launch),
      })
  }catch(err){
    console.error(err);
    return {
        ok: false
    }
  }
}

async function httpAbortLaunch(id) {
  // Delete launch with given ID.
  try{
    return  await fetch(`${API_URL}/launches/${id}`,{
        method: 'delete',
      })
  }catch(err){
    console.error(err);
    return {
        ok: false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};