import React, { useEffect, useState } from 'react'
import { App as Ide } from './Components/IDE/App'
import { App as WebEditor } from './Components/Web Editor/App'
import useLocalStorage from './hooks/useLocalStorage'
import { io } from 'socket.io-client'
import { useParams } from 'react-router-dom'

export const ToggleContext = React.createContext()

export default function App() {
  const [Editor, toggle] = useLocalStorage('editor', true)
  // const [Editor, toggle] = useState('editor', true)

  const [socketIO, setSocket] = useState()

  const { id: collabId } = useParams()
  console.log(collabId)

  useEffect(() => {
    const connector = io('http://localhost:4545')
    setSocket(connector)

    return () => {
      connector.disconnect()
    }
  }, [])

  useEffect(() => {
    if (socketIO == null) return

    // TODO
    // socketIO.once('load-session',)

    socketIO.emit('get-session',collabId)
  }, [socketIO, collabId])

  useEffect(() => {
    if (socketIO == null) return
    socketIO.on('currentEditor', (newEditor) => {
      toggle(newEditor)
    })
  }, [socketIO, Editor])

  useEffect(() => {
    if (socketIO == null) return
    socketIO.emit('toggleEditor', Editor)
  }, [socketIO, Editor])

  function handleClick() {
    toggle(!Editor)
  }

  if (Editor === true) {
    return (
      <div>
        <ToggleContext.Provider value={handleClick}>
          <Ide socket={socketIO} />
        </ToggleContext.Provider>
      </div>
    )
  } else {
    return (
      <div>
        <ToggleContext.Provider value={handleClick}>
          <WebEditor socket={socketIO} />
        </ToggleContext.Provider>
      </div>
    )
  }
}
