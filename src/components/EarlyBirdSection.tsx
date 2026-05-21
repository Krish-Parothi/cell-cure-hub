"use client";
import { useState } from "react";

export default function EarlyBirdSection() {
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [submitted, setSubmitted] = useState(false);
  const [entries, setEntries] = useState<{name:string,phone:string,address:string,time:string}[]>([]);
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      setError("Please fill all fields.");
      return;
    }
    if (!/^\d{10}$/.test(form.phone.trim())) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }
    const newEntry = { ...form, time: new Date().toLocaleString("en-IN") };
    const updated = [...entries, newEntry];
    setEntries(updated);
    // Store in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("earlybird_entries", JSON.stringify(updated));
    }
    setSubmitted(true);
    setError("");
  };

  // Load from localStorage on mount
  useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("earlybird_entries");
      if (stored) setEntries(JSON.parse(stored));
    }
  });

  return (
    <section
      style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      className="px-6 py-28 md:py-40"
    >
      <div className="max-w-2xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.3)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#FF6B35" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase font-medium"
              style={{ fontFamily: "'SF Pro Text', sans-serif", color: "#FF6B35" }}
            >
              Limited Time
            </span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2
            className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-none mb-4"
            style={{ fontFamily: "'SF Pro Display', sans-serif" }}
          >
            Early Bird
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #FF9A6C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Flat 15% Off
            </span>
          </h2>
          <p
            className="text-base font-light mt-4"
            style={{ fontFamily: "'SF Pro Text', sans-serif", color: "rgba(255,255,255,0.4)" }}
          >
            Register now and get 15% off your first repair. <br />No catch. No expiry. Just your reward for believing in us early.
          </p>
        </div>

        {!submitted ? (
          <div
            className="rounded-3xl p-8 md:p-10 space-y-5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {[
              { key: "name", label: "Full Name", placeholder: "Rahul Sharma", type: "text" },
              { key: "phone", label: "Phone Number", placeholder: "9876543210", type: "tel" },
              { key: "address", label: "Address", placeholder: "Dharampeth, Nagpur", type: "text" },
            ].map((field) => (
              <div key={field.key}>
                <label
                  className="block text-xs uppercase tracking-widest mb-2"
                  style={{ fontFamily: "'SF Pro Text', sans-serif", color: "rgba(255,255,255,0.3)" }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl outline-none text-white text-sm transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "'SF Pro Text', sans-serif",
                    caretColor: "#FF6B35",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid rgba(255,107,53,0.5)")}
                  onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.1)")}
                />
              </div>
            ))}

            {error && (
              <p className="text-xs" style={{ color: "#FF6B35", fontFamily: "'SF Pro Text', sans-serif" }}>
                {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
              style={{
                background: "linear-gradient(135deg, #FF6B35, #FF9A6C)",
                color: "#fff",
                fontFamily: "'SF Pro Text', sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              Claim My 15% Off →
            </button>
          </div>
        ) : (
          <div
            className="rounded-3xl p-10 text-center space-y-4"
            style={{ background: "rgba(255,107,53,0.06)", border: "1px solid rgba(255,107,53,0.2)" }}
          >
            <div className="text-4xl mb-2">🎉</div>
            <h3
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "'SF Pro Display', sans-serif" }}
            >
              You&apos;re in!
            </h3>
            <p
              className="text-sm"
              style={{ fontFamily: "'SF Pro Text', sans-serif", color: "rgba(255,255,255,0.45)" }}
            >
              Hey <strong style={{ color: "rgba(255,255,255,0.8)" }}>{form.name}</strong>, your 15% off is saved. Show this page when you walk in — we&apos;ll take care of the rest.
            </p>
          </div>
        )}

        {/* Admin table toggle — hidden, triple click to reveal */}
        <div className="mt-16">
          <p
            className="text-center text-xs cursor-pointer select-none"
            style={{ color: "rgba(255,255,255,0.05)" }}
            onClick={() => setShowTable(!showTable)}
          >
            ···
          </p>
          {showTable && entries.length > 0 && (
            <div className="mt-6 overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ background: "rgba(255,107,53,0.08)" }}>
                    {["#", "Name", "Phone", "Address", "Registered At"].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-medium tracking-wider uppercase"
                        style={{ fontFamily: "'SF Pro Text', sans-serif", color: "rgba(255,255,255,0.35)" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {entries.map((e, i) => (
                    <tr
                      key={i}
                      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      {[i + 1, e.name, e.phone, e.address, e.time].map((val, j) => (
                        <td
                          key={j}
                          className="px-4 py-3"
                          style={{ fontFamily: "'SF Pro Text', sans-serif", color: "rgba(255,255,255,0.5)" }}
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}