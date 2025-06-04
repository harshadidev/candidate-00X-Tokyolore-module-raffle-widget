"use client";

import AwardsPanels from "@/components/awards-panels";
import CareDuelBanner from "@/components/careduel-banner";
import RaffleTicketWidget from "@/components/raffle-ticket-widget";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to TokyoLore</h1>
          <p className="text-lg">
            A city-focused microsite where locals and visitors share stories,
            hidden histories, cultural insights, and street art through photos,
            videos, and poetry.
          </p>
        </section>

        <CareDuelBanner />

        <AwardsPanels />

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Latest Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Hidden Alleyways of Shinjuku</h3>
              <p>
                Discover the secret passages and tiny bars tucked away in
                Tokyo's busiest district...
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">The Ghost Stations of Tokyo Metro</h3>
              <p>
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
