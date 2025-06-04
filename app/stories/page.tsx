"use client";

import RaffleTicketWidget from "@/components/raffle-ticket-widget";

export default function Stories() {
  return (
    <main className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12 bg-white p-8 rounded-lg shadow-lg border-b-4 border-[#E91E63]">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            TokyoLore Stories
          </h1>
          <p className="text-lg" style={{ fontFamily: "Lora, serif" }}>
            Discover the hidden tales, cultural insights, and street art of
            Tokyo through the eyes of locals and visitors.
          </p>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#E91E63]">
              <h3
                className="font-bold text-xl mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                The Secret Shrine in Harajuku
              </h3>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: "Lora, serif" }}
              >
                Hidden behind the bustling streets lies a peaceful shrine that
                locals have protected for centuries...
              </p>
              <div className="text-sm text-[#E91E63] font-medium">
                📸 Photo Story • 5 min read
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#E91E63]">
              <h3
                className="font-bold text-xl mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Street Art of Shibuya
              </h3>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: "Lora, serif" }}
              >
                A visual journey through the evolving murals and graffiti that
                tell Tokyo's modern story...
              </p>
              <div className="text-sm text-[#E91E63] font-medium">
                🎨 Visual Story • 8 min read
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#E91E63]">
              <h3
                className="font-bold text-xl mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                The Last Ramen Master
              </h3>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: "Lora, serif" }}
              >
                Meet the 80-year-old chef who has been perfecting his broth
                recipe for over 50 years...
              </p>
              <div className="text-sm text-[#E91E63] font-medium">
                🍜 Interview • 12 min read
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#E91E63]">
              <h3
                className="font-bold text-xl mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Tokyo's Underground Rivers
              </h3>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: "Lora, serif" }}
              >
                Explore the forgotten waterways that flow beneath the concrete
                jungle of modern Tokyo...
              </p>
              <div className="text-sm text-[#E91E63] font-medium">
                🌊 Historical • 10 min read
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#E91E63]">
              <h3
                className="font-bold text-xl mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Night Markets of Ameya-Yokocho
              </h3>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: "Lora, serif" }}
              >
                After dark, this historic market transforms into a vibrant
                tapestry of sounds, smells, and stories...
              </p>
              <div className="text-sm text-[#E91E63] font-medium">
                🌃 Night Story • 7 min read
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#E91E63]">
              <h3
                className="font-bold text-xl mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Poetry in Ueno Park
              </h3>
              <p
                className="text-gray-600 mb-4"
                style={{ fontFamily: "Lora, serif" }}
              >
                Local poets gather under cherry blossoms to share verses that
                capture the soul of Tokyo...
              </p>
              <div className="text-sm text-[#E91E63] font-medium">
                🌸 Poetry • 6 min read
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#E91E63]">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Share Your Story
            </h2>
            <p
              className="text-gray-600 mb-6"
              style={{ fontFamily: "Lora, serif" }}
            >
              Have a Tokyo story to tell? Whether it's a hidden gem, cultural
              tradition, or street art discovery, we'd love to hear from you.
            </p>
            <button
              className="bg-[#E91E63] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors shadow-md hover:shadow-lg"
              style={{ fontFamily: "Lora, serif" }}
            >
              Submit Your Story
            </button>
          </div>
        </section>
      </div>

      {/* Raffle Ticket Widget */}
      <RaffleTicketWidget userId="123" />
    </main>
  );
}
