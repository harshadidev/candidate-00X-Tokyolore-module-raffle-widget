"use client";

import { useState, useEffect } from "react";
import { Ticket } from "lucide-react";

interface RaffleTicketWidgetProps {
  userId: string;
}

export default function RaffleTicketWidget({
  userId,
}: RaffleTicketWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ticketCount, setTicketCount] = useState<number | null>(null);
  const [isJoiningRaffle, setIsJoiningRaffle] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isExpanded && ticketCount === null) {
      fetchTicketCount();
    }
  }, [isExpanded]);

  const fetchTicketCount = async () => {
    try {
      setIsInitialLoading(true);
      setError(null);
      const response = await fetch(`/api/raffle-status?userId=${userId}`);
      if (!response.ok) throw new Error("Failed to fetch ticket count");
      const data = await response.json();
      setTicketCount(data.tickets);
    } catch (err) {
      setError("Failed to load ticket count");
      console.error(err);
    } finally {
      setIsInitialLoading(false);
    }
  };

  const enterRaffle = async () => {
    if (isJoiningRaffle || isProcessingPayment) return; // Prevent multiple clicks during any loading

    try {
      setIsJoiningRaffle(true);
      setError(null);

      const response = await fetch("/api/raffle-entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) throw new Error("Failed to enter raffle");

      const data = await response.json();
      if (data.success) {
        setTicketCount(data.tickets);
      } else {
        throw new Error("Failed to enter raffle");
      }
    } catch (err) {
      setError("❌ Error, try again.");
      console.error(err);
    } finally {
      setTimeout(() => {
        setIsJoiningRaffle(false);
      }, 500);
    }
  };

  const proceedToPayment = async () => {
    if (isJoiningRaffle || isProcessingPayment) return; // Prevent multiple clicks during any loading

    try {
      setIsProcessingPayment(true);
      setError(null);

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 100, // $1.00 in cents
          currency: "usd",
          userId: userId,
        }),
      });

      if (!response.ok) throw new Error("Failed to create checkout session");

      const data = await response.json();
      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      setError("❌ Payment failed. Please try again.");
      console.error(err);
      setIsProcessingPayment(false); // Only reset loading on error, not on redirect
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out ${
        isExpanded ? "w-[300px] h-[350px]" : "w-[50px] h-[50px]"
      }`}
    >
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full h-full flex items-center justify-center bg-[#E91E63] text-white shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out hover:shadow-xl"
          style={{ borderRadius: "8px" }}
          aria-label="Open raffle ticket widget"
        >
          <Ticket className="w-6 h-6" />
        </button>
      ) : (
        <div
          className="w-full h-full bg-white shadow-xl p-4 flex flex-col border animate-slideIn"
          style={{
            borderRadius: "8px",
            borderColor: "var(--accent-color, #E91E63)",
            boxShadow: "0 10px 25px -5px rgba(233, 30, 99, 0.3)",
            animation: "slideIn 0.3s ease-out",
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg flex items-center">
              <Ticket className="w-5 h-5 mr-2 text-[#E91E63]" />
              <span>Raffle Tickets</span>
            </h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-500 hover:text-[#E91E63] transition-colors duration-200"
              aria-label="Close raffle ticket widget"
            >
              ✕
            </button>
          </div>

          <div className="flex-grow flex flex-col items-center justify-center min-h-0">
            {error ? (
              <div className="text-red-500 text-center mb-4 font-medium">
                {error}
              </div>
            ) : null}

            {isInitialLoading ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#E91E63] mx-auto mb-4"></div>
                <p className="text-gray-600">Loading tickets...</p>
              </div>
            ) : (
              <div className="text-center w-full">
                <p className="text-xl mb-6 font-medium">
                  ✅ You have {ticketCount} tickets.
                </p>

                <div className="space-y-4">
                  <button
                    onClick={enterRaffle}
                    disabled={isJoiningRaffle || isProcessingPayment}
                    className="py-2 px-4 rounded-md transition-all duration-300 w-full text-white relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-90 min-h-[44px] flex items-center justify-center font-semibold"
                    style={{
                      backgroundColor: "#E91E63",
                      boxShadow: "0 4px 10px -2px rgba(233, 30, 99, 0.4)",
                    }}
                  >
                    <span className="flex items-center justify-center">
                      {isJoiningRaffle && (
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                      )}
                      {isJoiningRaffle ? "Joining..." : "Join the Raffle"}
                    </span>
                  </button>

                  <button
                    onClick={proceedToPayment}
                    disabled={isJoiningRaffle || isProcessingPayment}
                    className="py-2 px-4 rounded-md transition-all duration-300 w-full text-white relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-90 min-h-[44px] flex items-center justify-center font-semibold"
                    style={{
                      backgroundColor: "var(--primary-color, #22c55e)",
                      boxShadow: "0 4px 10px -2px rgba(34, 197, 94, 0.4)",
                    }}
                  >
                    <span className="flex items-center justify-center">
                      {isProcessingPayment && (
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                      )}
                      {isProcessingPayment
                        ? "Processing..."
                        : "Proceed to Payment"}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
