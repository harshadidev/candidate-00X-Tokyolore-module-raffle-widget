"use client";

import AwardsPanels from "@/components/awards-panels";
import CareDuelBanner from "@/components/careduel-banner";
import RaffleTicketWidget from "@/components/raffle-ticket-widget";

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12 bg-white p-8 rounded-lg shadow-lg border-b-4 border-[#E91E63]">
          <h1
            className="text-4xl font-bold mb-4 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Welcome to TokyoLore
          </h1>
          <p className="text-lg" style={{ fontFamily: "Lora, serif" }}>
            A city-focused microsite where locals and visitors share tales,
            hidden histories, and cultural insights of the city — famous, local
            and hidden — through photos, videos, poems, and street art.
          </p>
        </section>

        <CareDuelBanner />

        <AwardsPanels />

        <section className="mt-12">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Latest Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#E91E63]">
              <h3
                className="font-bold text-lg mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Hidden Alleyways of Shinjuku
              </h3>
              <p
                className="text-gray-700"
                style={{ fontFamily: "Lora, serif" }}
              >
                Discover the secret passages and tiny bars tucked away in
                Tokyo's busiest district...
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#E91E63]">
              <h3
                className="font-bold text-lg mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                The Ghost Stations of Tokyo Metro
              </h3>
              <p
                className="text-gray-700"
                style={{ fontFamily: "Lora, serif" }}
              >
                Exploring abandoned subway stations and their fascinating
                histories...
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Raffle Ticket Widget */}
      <RaffleTicketWidget userId="123" />
    </main>
  );
}
