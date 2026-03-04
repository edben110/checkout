export default function Home() {
  const cartItems = [
    {
      id: 1,
      name: "Denim T-Shirt",
      ref: "007197456",
      color: "Blue",
      qty: 2,
      price: "7500.00 NGN",
      bg: "bg-blue-100",
      emoji: "👔",
    },
    {
      id: 2,
      name: "Denim Pants",
      ref: "011015233",
      color: "Blue",
      qty: 3,
      price: "9000.00 NGN",
      bg: "bg-indigo-100",
      emoji: "👖",
    },
    {
      id: 3,
      name: "Sony Smartwat...",
      ref: "004822981",
      color: "Black",
      qty: 1,
      price: "24500.00 NGN",
      bg: "bg-gray-200",
      emoji: "⌚",
    },
    {
      id: 4,
      name: "Cognac Oxford",
      ref: "035772962",
      color: "Brown",
      qty: 1,
      price: "4500.00 NGN",
      bg: "bg-amber-100",
      emoji: "👞",
    },
  ];

  return (
    <div className="grid grid-cols-[3fr_2fr] h-screen w-screen font-sans">
      {/* ── LEFT PANEL: Shopping Cart ── */}
      <div className="flex flex-col bg-gray-100 px-14 py-10">

        {/* Header */}
        <div className="flex items-center gap-5 mb-10">
          {/* Q Logo */}
          <div className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-black">
            <span className="text-lg font-bold leading-none">Q</span>
          </div>
          {/* Divider */}
          <div className="w-px h-8 bg-gray-400" />
          <h1 className="text-2xl font-semibold tracking-wide text-gray-800">
            Your Shopping Cart
          </h1>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-3 flex-1">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[64px_1fr_auto_auto_auto_auto] items-center gap-5 bg-white rounded-xl px-5 py-3"
            >
              {/* Product image placeholder */}
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full ${item.bg} text-2xl select-none`}
              >
                {item.emoji}
              </div>

              {/* Name + Ref */}
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold text-gray-800">
                  {item.name}
                </span>
                <span className="text-xs text-gray-400">Ref. {item.ref}</span>
              </div>

              {/* Color */}
              <span className="text-sm text-gray-600 w-12 text-center">
                {item.color}
              </span>

              {/* Quantity controls */}
              <div className="flex flex-col items-center gap-1">
                <button className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-700 text-white text-xs leading-none hover:bg-gray-900">
                  +
                </button>
                <span className="text-sm font-medium text-gray-700">
                  {item.qty}
                </span>
                <button className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-700 text-white text-xs leading-none hover:bg-gray-900">
                  −
                </button>
              </div>

              {/* Price */}
              <span className="text-sm font-medium text-gray-700 w-32 text-right">
                {item.price}
              </span>

              {/* Remove */}
              <button className="text-gray-400 hover:text-gray-700 text-lg leading-none pl-2">
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-8 pt-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <span>←</span>
            <span>Back to Shop</span>
          </button>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <span className="font-medium">Subtotal:</span>
            <span className="font-semibold text-gray-900 text-base">
              45500.00 NGN
            </span>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL: Card Details ── */}
      <div
        className="flex flex-col bg-[#2f2b27]"
        style={{ boxShadow: "inset 4px 0 12px rgba(0,0,0,0.3)" }}
      >
        {/* Top section with dots + form */}
        <div className="flex flex-1 gap-6 px-12 pt-12">
          {/* Navigation dots */}
          <div className="flex flex-col items-center gap-2 pt-1">
            <div className="w-2 h-2 rounded-full bg-gray-500" />
            <div className="w-2 h-2 rounded-full bg-[#d4a520]" />
            <div className="w-2 h-2 rounded-full bg-gray-500" />
          </div>

          {/* Form */}
          <div className="flex flex-col flex-1 gap-8">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-[#d4a520] tracking-wide">
              Card Details
            </h2>

            {/* Select Card Type */}
            <div className="flex flex-col gap-4">
              <span className="text-sm text-gray-400 tracking-wide">
                Select Card Type
              </span>
              <div className="flex items-center gap-6">
                {/* Mastercard */}
                <div className="flex items-center justify-center cursor-pointer opacity-100 hover:opacity-80">
                  <div className="relative flex items-center">
                    <div className="w-7 h-7 rounded-full bg-red-500 opacity-90" />
                    <div className="w-7 h-7 rounded-full bg-yellow-400 opacity-90 -ml-3" />
                  </div>
                </div>
                {/* Visa */}
                <div className="flex items-center justify-center px-2 cursor-pointer opacity-50 hover:opacity-80">
                  <span className="text-white font-bold italic text-lg tracking-tight">
                    VISA
                  </span>
                </div>
                {/* Verve */}
                <div className="flex items-center justify-center px-2 cursor-pointer opacity-50 hover:opacity-80">
                  <span className="text-gray-300 font-semibold text-base tracking-tight">
                    <span className="text-green-400">V</span>erve
                  </span>
                </div>
              </div>
            </div>

            {/* Card Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 tracking-wide">
                Card Number
              </label>
              <input
                type="text"
                placeholder=""
                className="bg-transparent border-b border-gray-500 text-white text-sm py-1 outline-none focus:border-[#d4a520] placeholder-gray-600"
              />
            </div>

            {/* Expiry + CVV */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 tracking-wide">
                  Expiry Date
                </label>
                <div className="flex items-center gap-1 border-b border-gray-500 pb-1">
                  <input
                    type="text"
                    maxLength={2}
                    placeholder="MM"
                    className="bg-transparent text-white text-sm w-8 outline-none placeholder-gray-600 text-center"
                  />
                  <span className="text-gray-500">/</span>
                  <input
                    type="text"
                    maxLength={2}
                    placeholder="YY"
                    className="bg-transparent text-white text-sm w-8 outline-none placeholder-gray-600 text-center"
                  />
                  <span className="text-gray-500">/</span>
                  <input
                    type="text"
                    maxLength={4}
                    placeholder="YYYY"
                    className="bg-transparent text-white text-sm w-12 outline-none placeholder-gray-600 text-center"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 tracking-wide">
                  CVV
                </label>
                <input
                  type="password"
                  maxLength={3}
                  placeholder="•••"
                  className="bg-transparent border-b border-gray-500 text-white text-sm py-1 outline-none focus:border-[#d4a520] w-16 placeholder-gray-600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Checkout button */}
        <button className="w-full py-5 bg-[#d4a520] text-gray-900 font-semibold text-lg tracking-widest uppercase hover:bg-[#c49518] transition-colors mt-8">
          Checkout
        </button>
      </div>
    </div>
  );
}


