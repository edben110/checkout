"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [panelOpen, setPanelOpen] = useState(true);

  const cartItems = [
    {
      id: 1,
      name: "Denim T-Shirt",
      ref: "007197456",
      color: "Blue",
      qty: 2,
      price: "7500.00 NGN",
      img: "/denim_tshirt.png",
      bg: "bg-[#c8d8e8]",
    },
    {
      id: 2,
      name: "Denim Pants",
      ref: "011015233",
      color: "Blue",
      qty: 3,
      price: "9000.00 NGN",
      img: "/denim_pants.png",
      bg: "bg-[#c0c8dc]",
    },
    {
      id: 3,
      name: "Sony Smartwat...",
      ref: "004822981",
      color: "Black",
      qty: 1,
      price: "24500.00 NGN",
      img: "/smartwatch.png",
      bg: "bg-[#d0d0d0]",
    },
    {
      id: 4,
      name: "Cognac Oxford",
      ref: "035772962",
      color: "Brown",
      qty: 1,
      price: "4500.00 NGN",
      img: "/oxford_shoes.png",
      bg: "bg-[#e8d0b0]",
    },
  ];

  return (
    <div className="flex h-screen w-screen bg-[#e2e2e2] font-sans overflow-hidden">

      {/* ══════════════════════════════
          LEFT PANEL — Shopping Cart
      ══════════════════════════════ */}
      <div className="flex flex-col justify-between flex-1 px-16 py-10 min-w-0">

        {/* ── Header ── */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            {/* Logo from public */}
            <div className="shrink-0" style={{ width: 40, height: 44 }}>
              <Image
                src="/logo_top_left.png"
                alt="Logo"
                width={80}
                height={88}
                className="object-contain"
              />
            </div>
            {/* vertical divider */}
            <div className="w-px h-9 bg-gray-400" />
            <h1 className="text-xl font-light tracking-widest text-gray-700 ">
              Your Shopping Cart
            </h1>
          </div>

          {/* ── Individual item cards ── */}
          <div className="flex flex-col gap-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                {/* card */}
                <div
                  className="grid items-center gap-4 px-5 py-4 bg-[#d8d8d8] rounded-2xl flex-1"
                  style={{ gridTemplateColumns: "72px 1fr 64px 52px 140px" }}
                >
                {/* circular thumbnail with real image */}
                <div
                  className={`relative flex items-center justify-center rounded-full overflow-hidden shrink-0 ${item.bg}`}
                  style={{ width: 68, height: 68 }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover scale-110"
                  />
                </div>

                {/* name + ref */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-gray-800 tracking-wide">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-500 font-light">
                    Ref. {item.ref}
                  </span>
                </div>

                {/* color */}
                <span className="text-sm text-gray-600 text-center">{item.color}</span>

                {/* quantity stepper */}
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-sm font-medium text-gray-800 w-3 text-center">{item.qty}</span>
                  <div className="flex flex-col items-center gap-0.5">
                    <button className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-gray-600 text-white text-[10px] leading-none hover:bg-gray-800 select-none">
                      +
                    </button>
                    <button className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-gray-600 text-white text-[10px] leading-none hover:bg-gray-800 select-none">
                      −
                    </button>
                  </div>
                </div>

                {/* price */}
                <span className="text-sm text-gray-700 text-right font-medium">
                  {item.price}
                </span>

                {/* remove — intentionally removed from grid, placed outside */}
              </div>

              {/* × outside the card */}
              <button className="flex items-center justify-center text-gray-400 hover:text-gray-700 text-xl leading-none shrink-0">
                ×
              </button>
            </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="flex items-center justify-between pt-6">
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 tracking-wide">
            <span className="text-base">←</span>
            <span>Back to Shop</span>
          </button>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <span className="font-normal tracking-wide">Subtotal:</span>
            <span className="font-semibold text-gray-900 text-base tracking-wide">
              45500.00 NGN
            </span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          RIGHT PANEL — Card Details (collapsible)
          Tab is outside (absolute, always visible).
          Dark panel slides inside a clip zone offset 20px.
      ══════════════════════════════ */}
      <div className="relative w-105 shrink-0 h-full">

        {/* ── Tab — independent, outside the dark panel, moves with it ── */}
        <button
          onClick={() => setPanelOpen(!panelOpen)}
          className="absolute z-20 flex flex-col items-center justify-center gap-1.75 cursor-pointer hover:brightness-125 bg-[#2E2A24] rounded-tl-md rounded-bl-md transition-all duration-300 ease-in-out"
          style={{ left: panelOpen ? 0 : 400, top: 100, width: 20, paddingTop: 12, paddingBottom: 12 }}
          aria-label={panelOpen ? "Collapse panel" : "Expand panel"}
        >
          <div className="w-1.75 h-1.75 rounded-full bg-gray-400" />
          <div className="w-1.75 h-1.75 rounded-full bg-[#d4a520]" />
          <div className="w-1.75 h-1.75 rounded-full bg-gray-400" />
        </button>

        {/* ── Clip zone: starts at left:20px so panel never overlaps tab ── */}
        <div className="absolute top-0 bottom-0 right-0 overflow-hidden" style={{ left: 20 }}>

          {/* Dark panel slides inside the clip zone */}
          <div
            className="absolute inset-0 flex flex-col bg-[#2e2a24] transition-transform duration-300 ease-in-out"
            style={{ transform: panelOpen ? "translateX(0)" : "translateX(400px)" }}
          >

            {/* Form area */}
            <div
              className="flex flex-col flex-1 overflow-hidden transition-opacity duration-300 ease-in-out"
              style={{ opacity: panelOpen ? 1 : 0, pointerEvents: panelOpen ? "auto" : "none" }}
            >
              <div className="flex flex-col gap-9 pt-14 pr-10 pb-8 pl-6">

                {/* title */}
                <h2 className="text-2xl font-semibold text-[#d4a520] tracking-wide">
                  Card Details
                </h2>

                {/* card type */}
                <div className="flex flex-col gap-4">
                  <span className="text-[13px] text-gray-400 tracking-widest">
                    Select Card Type
                  </span>
                  <div className="flex items-center gap-8">

                    {/* Mastercard — selected */}
                    <div className="flex items-center cursor-pointer">
                      <div className="relative flex items-center" style={{ width: 46, height: 30 }}>
                        <div
                          className="absolute rounded-full bg-[#eb001b]"
                          style={{ width: 30, height: 30, left: 0, opacity: 0.95 }}
                        />
                        <div
                          className="absolute rounded-full bg-[#f79e1b]"
                          style={{ width: 30, height: 30, left: 16, opacity: 0.95 }}
                        />
                      </div>
                    </div>

                    {/* VISA — dimmed */}
                    <div className="flex items-center cursor-pointer opacity-40 hover:opacity-70">
                      <span
                        className="text-white font-extrabold italic text-xl tracking-tight"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        VISA
                      </span>
                    </div>

                    {/* Verve — dimmed */}
                    <div className="flex items-center cursor-pointer opacity-40 hover:opacity-70">
                      <span className="text-gray-300 font-semibold text-base">
                        <span className="text-[#6dbf67]">V</span>erve
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="flex flex-col gap-3">
                  <label className="text-[13px] text-gray-400 tracking-widest">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-gray-600 text-white text-sm pb-2 outline-none focus:border-[#d4a520] caret-[#d4a520]"
                  />
                </div>

                {/* Expiry + CVV */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[13px] text-gray-400 tracking-widest">
                      Expiry Date
                    </label>
                    <div className="flex items-end border-b border-gray-600 pb-2">
                      <input
                        type="text"
                        maxLength={2}
                        placeholder="__"
                        className="bg-transparent text-white text-sm w-7 outline-none placeholder-gray-600 text-center"
                      />
                      <span className="text-gray-500 text-sm pb-px">/</span>
                      <input
                        type="text"
                        maxLength={2}
                        placeholder="__"
                        className="bg-transparent text-white text-sm w-7 outline-none placeholder-gray-600 text-center"
                      />
                      <span className="text-gray-500 text-sm pb-px">/</span>
                      <input
                        type="text"
                        maxLength={4}
                        placeholder="____"
                        className="bg-transparent text-white text-sm w-12 outline-none placeholder-gray-600 text-center"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[13px] text-gray-400 tracking-widest">
                      CVV
                    </label>
                    <input
                      type="password"
                      maxLength={3}
                      placeholder="____"
                      className="bg-transparent border-b border-gray-600 text-white text-sm pb-2 outline-none focus:border-[#d4a520] w-20 caret-[#d4a520] placeholder-gray-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout button */}
            <div
              className="shrink-0 overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: panelOpen ? 80 : 0, opacity: panelOpen ? 1 : 0 }}
            >
              <button className="w-full py-5 bg-[#d4a520] text-gray-900 font-semibold text-base tracking-[0.25em] uppercase hover:bg-[#c49518] transition-colors">
                Checkout
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
