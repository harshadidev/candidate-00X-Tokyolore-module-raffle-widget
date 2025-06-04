"use client";

import RaffleTicketWidget from "@/components/raffle-ticket-widget";

export default function Stories() {
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">TokyoLore Stories</h1>
          <p className="text-lg">
            Discover the hidden tales, cultural insights, and street art of
            Tokyo through the eyes of locals and visitors.
          </p>
        </section>

        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">
                The Secret Shrine in Harajuku
              </h3>
              <p className="text-gray-600 mb-4">
                Hidden behind the bustling streets lies a peaceful shrine that
                locals have protected for centuries...
              </p>
              <div className="text-sm text-gray-500">
                📸 Photo Story • 5 min read
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">Street Art of Shibuya</h3>
              <p className="text-gray-600 mb-4">
                A visual journey through the evolving murals and graffiti that
                tell Tokyo's modern story...
              </p>
              <div className="text-sm text-gray-500">
                🎨 Visual Story • 8 min read
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">The Last Ramen Master</h3>
              <p className="text-gray-600 mb-4">
                Meet the 80-year-old chef who has been perfecting his broth
                recipe for over 50 years...
              </p>
              <div className="text-sm text-gray-500">
                🍜 Interview • 12 min read
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">
                Tokyo's Underground Rivers
              </h3>
              <p className="text-gray-600 mb-4">
                Explore the forgotten waterways that flow beneath the concrete
                jungle of modern Tokyo...
              </p>
              <div className="text-sm text-gray-500">
                🌊 Historical • 10 min read
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">
                Night Markets of Ameya-Yokocho
              </h3>
              <p className="text-gray-600 mb-4">
                After dark, this historic market transforms into a vibrant
                tapestry of sounds, smells, and stories...
              </p>
              <div className="text-sm text-gray-500">
                🌃 Night Story • 7 min read
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">Poetry in Ueno Park</h3>
              <p className="text-gray-600 mb-4">
                Local poets gather under cherry blossoms to share verses that
                capture the soul of Tokyo...
              </p>
              <div className="text-sm text-gray-500">
                🌸 Poetry • 6 min read
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
            <p className="text-gray-600 mb-4">
              Have a Tokyo story to tell? Whether it's a hidden gem, cultural
              tradition, or street art discovery, we'd love to hear from you.
            </p>
            <button className="bg-[#E91E63] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors">
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
