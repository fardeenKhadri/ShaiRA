// import React from 'react'

import { Route, Routes } from "react-router"
import RootLayout from "./_root/RootLayout"
import { Gallery, Gift, Home, Playlist, Timeline } from "./_root/pages"

const App = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-100 to-teal-100">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/timeline" element={<Timeline />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App