"use client"

import { motion } from "framer-motion"

const timelineEvents = [
  { date: "2nd February 2022", title: "FIRST TEXT", description: "The day Fardeen got Sadiya's instagram account and dropped the first text {_سدیا_}." },
  { date: "13th February 2022", title: "LET'S SNAP", description: "Hey, is this your snapchat i'd?{sadiyamulla16}" },
  { date: "2nd March 2022", title: "Fardeen to Cosmic  ", description: "A new name was given." },
  { date: "11th April 2023", title: "Cosmic to Shayr . Sadiya to ShaiRA  ", description: "We gave each other the names by which we address even now ." },
  { date: "4th August 2024", title: "It's The Friendship Day ", description: "The first time of us seeing each other, best way to celebrate the friendship day ." },
  { date: "16th February 2025", title: "The Best Meet", description: "Difficult to describe the day in just a sentence." },
  
  
  // Add more events here
]

export default function Timeline() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">Our Timeline</h1>
      <div className="relative">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="mb-8 flex"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex w-1/2 flex-col items-end pr-8 text-right">
              <span className="text-lg font-bold text-rose-500">{event.date}</span>
              <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-teal-200"></div>
              <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-teal-500"></div>
            </div>
            <div className="w-1/2 pl-8">
              <p className="text-gray-600">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

