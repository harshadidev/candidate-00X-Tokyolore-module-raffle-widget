import Link from "next/link"
import { Trophy, Sparkles } from "lucide-react"

export default function AwardsPanels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <Link
        href="https://top216.com/vote"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border border-[#424242] rounded-lg p-5 shadow-md hover:border-[#E91E63] transition-colors flex items-center"
      >
        <Trophy className="text-[#424242] mr-3 flex-shrink-0" size={24} />
        <span className="font-serif text-xl" style={{ fontFamily: "Playfair Display, serif", fontSize: "20px" }}>
          Vote Top216
        </span>
      </Link>

      <Link
        href="https://thetop36.com/highlights"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border border-[#424242] rounded-lg p-5 shadow-md hover:border-[#E91E63] transition-colors flex items-center"
      >
        <Sparkles className="text-[#424242] mr-3 flex-shrink-0" size={24} />
        <span className="font-serif text-xl" style={{ fontFamily: "Playfair Display, serif", fontSize: "20px" }}>
          Explore TheTop36
        </span>
      </Link>
    </div>
  )
}
