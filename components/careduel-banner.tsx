import Link from "next/link"

export default function CareDuelBanner() {
  return (
    <div className="bg-gray-100 border border-[#E91E63] rounded-lg shadow-md p-4 mb-6">
      <Link
        href="https://careduel.com/topic-of-the-week"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center font-serif text-[#E91E63] text-lg hover:underline"
        style={{ fontFamily: "Lora, serif", fontSize: "18px" }}
      >
        Check out this week's featured topic on CareDuel
      </Link>
    </div>
  )
}
