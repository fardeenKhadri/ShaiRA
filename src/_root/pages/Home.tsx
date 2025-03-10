import {Link} from "react-router-dom"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-4xl font-bold text-gray-800">NEZUKO's BIRTHDAY</h1>
        <p className="mb-8 text-xl text-gray-600">A little something just for you.</p>
        <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
          <img
            src="/images/3v.png"
            alt="Friends together"
            width={600}
            height={400}
            className="mx-auto"
          />
        </div>
        <p className="mb-8 text-lg text-gray-700">
         こんにちわ　ねずこ　ちゃん, wishing you a very very happy birthday. I pray for your happiness, peace and enourmous success in your life. May almighty bless you with all the blessings you deserve in life. May he grant you the best in your life 
        </p>
        <div className="space-x-4">
          <Link
            to={"/gift"}
            className="rounded-full bg-rose-500 px-6 py-3 text-white transition-colors hover:bg-rose-600"
          >
            Gift
          </Link>
          <Link
            to={"/gallery"}
            className="rounded-full bg-rose-500 px-6 py-3 text-white transition-colors hover:bg-rose-600"
          >
            Photo Gallery
          </Link>
          <Link
            to={"/timeline"}
            className="rounded-full bg-teal-500 px-6 py-3 text-white transition-colors hover:bg-teal-600"
          >
            Our Timeline
          </Link>
          <Link
            to={"/playlist"}
            className="rounded-full bg-teal-500 px-6 py-3 text-white transition-colors hover:bg-teal-600"
          >
            🎶Music🎶
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

