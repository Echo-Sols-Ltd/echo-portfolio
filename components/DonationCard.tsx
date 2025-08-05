"use client"

import { useState } from "react"
import { Heart, CreditCard, Shield, CheckCircle } from "lucide-react"

export default function DonationCard() {
  const [amount, setAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState("")
  const [frequency, setFrequency] = useState("once")

  const presetAmounts = [25, 50, 100, 250]

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto card-hover">
      <div className="text-center mb-6">
        <div className="bg-gradient-to-r from-blue-900 to-orange-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Heart className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Make a Difference</h3>
        <p className="text-gray-600">Your donation directly impacts vulnerable communities</p>
      </div>

      <form className="space-y-6">
        {/* Frequency Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Donation Frequency</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFrequency("once")}
              className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                frequency === "once"
                  ? "border-orange-500 bg-orange-50 text-orange-700"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              One-time
            </button>
            <button
              type="button"
              onClick={() => setFrequency("monthly")}
              className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                frequency === "monthly"
                  ? "border-orange-500 bg-orange-50 text-orange-700"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Amount Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Donation Amount</label>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setAmount(preset)
                  setCustomAmount("")
                }}
                className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                  amount === preset && !customAmount
                    ? "border-orange-500 bg-orange-50 text-orange-700"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                ${preset}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Custom amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value)
              setAmount(0)
            }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Impact Message */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800">
                <strong>${customAmount || amount}</strong> can provide clean water for a family of 4 for an entire
                month.
              </p>
            </div>
          </div>
        </div>

        {/* Donate Button */}
        <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4">
          <CreditCard className="h-5 w-5" />
          <span>
            Donate ${customAmount || amount} {frequency === "monthly" ? "/month" : ""}
          </span>
        </button>

        {/* Security Note */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <Shield className="h-4 w-4" />
          <span>Secure payment powered by Stripe</span>
        </div>
      </form>
    </div>
  )
}
