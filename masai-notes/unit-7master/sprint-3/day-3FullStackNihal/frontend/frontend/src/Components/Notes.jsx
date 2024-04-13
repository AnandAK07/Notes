import React, { useEffect, useState } from 'react'

export const Notes = () => {
  const [notes, setNotes] = useState([])
  const token = localStorage.getItem("psc_app_token");


  const getData = () => {
    fetch(`http://localhost:8080/notes`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setNotes(res)
      })
      .then((err) => console.log(err))

  }
  useEffect(() => {
    getData()
  }, [])

  if(!localStorage.getItem('psc_app_token')){
    return <h1>please login again</h1>
  }
  return (
    <div>
      <h1>Notes</h1>
      {notes && notes.map((note, id) => {
        return <div key={id}>
          <h1>{note.Heading}</h1>
          <button >Delete</button>
        </div>
      })}
    </div>
  )
}
