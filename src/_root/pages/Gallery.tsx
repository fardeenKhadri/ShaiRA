import { motion } from "framer-motion";

// Define a type for better structure (Optional but recommended)
interface Photo {
  src: string;
  // alt: string;
  // category: string;
}

// Use relative paths assuming images are in `public/images/`
const photos: Photo[] = [
  { src: "/images/view.jpg"  },
  { src: "/images/2v.jpg"  },
  { src: "/images/disp.jpg" },
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">Photo Gallery</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={photo.src || "/placeholder.svg"} // ✅ Uses a placeholder if missing
              // alt={photo.alt}
              width={200}
              height={200}
              className="h-full w-full object-cover"
              loading="lazy" // ✅ Improves performance
            />
            <div className="bg-white p-4">
              {/* <p className="text-sm text-gray-600">{photo.category}</p> */}
              {/* <p className="text-lg font-semibold text-gray-800">{photo.alt}</p> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
