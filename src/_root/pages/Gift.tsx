import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";


export default function Gift() {
  const [isOpen, setIsOpen] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)



  const handleImageOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
  
    setImageOpen(!imageOpen)
  };
  
  

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">A Gift for You</h1>
      <div className="mx-auto max-w-2xl text-center">
        <svg className="mx-auto mb-8 h-64 w-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#FDE68A" />
          <path d="M100 50 L120 90 L160 90 L130 110 L140 150 L100 130 L60 150 L70 110 L40 90 L80 90 Z" fill="#FCD34D" />
          <text x="100" y="180" fontSize="24" textAnchor="middle" fill="#4B5563">
            ShaiRAaaAaaAaa
          </text>
        </svg>
        <p className="mb-8 text-lg text-gray-600">
        Please have a look at this, tried something, though my hands may falter and sway🌴 so a little thing for you, taking shape in its own humble way😁. 
        </p>
        <button
          onClick={handleImageOpen}
          className="rounded-full bg-rose-500 px-6 py-3 text-white transition-colors hover:bg-rose-600"
        >
          Image from SK
        </button>
        {
          imageOpen && <img src="/assets/shaira.jpg" alt="image" className="size- " /> // change classname to size
        }
        <p className="mt-8 text-lg text-gray-600">  
  I've woven these words with you in mind, <br />  
  A little piece of heart you'll find. <br />  
  A poem I wish for you to see, <br />  
  A gentle thought from me to thee. ✨  
</p>

        <button
          onClick={()=> setIsOpen(!isOpen)}
          className="m-4 inline-block rounded-full bg-teal-500 px-6 py-3 text-white transition-colors hover:bg-teal-600"
        >
          Read Letter
        </button>
        {isOpen && <Document
          file={"/ShaiRA.pdf"}
        >
          <Page
            width={700}
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>}
      </div>
    </div>
  )
}

