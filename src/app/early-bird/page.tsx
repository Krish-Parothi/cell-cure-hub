"use client";

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

// Read from env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function EarlyBirdPage() {
  const [form, setForm] = useState({ name: '', mobile: '', address: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!form.name || !form.mobile || !form.address) {
      setError('All fields are required.');
      return;
    }
    if (!/^\d{10}$/.test(form.mobile.trim())) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    
    // Insert into supabase
    const { data, error: dbError } = await supabase
      .from('early_bird_users')
      .insert([
        { name: form.name, mobile: form.mobile, address: form.address }
      ]);

    setLoading(false);

    if (dbError) {
      setError(dbError.message);
    } else {
      setSuccess(true);
      setForm({ name: '', mobile: '', address: '' });
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden" style={{ background: "#F9FAFB" }}>
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="flex items-center gap-2 text-xs font-black text-zinc-500 hover:text-[#FF6B35] transition-colors uppercase tracking-[0.2em] font-sans">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back Home
        </Link>
      </div>

      <div className="w-full max-w-xl bg-white rounded-[2rem] p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(255,107,53,0.15)] border border-zinc-100 relative z-10">
        {/* Subtle orange accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF9A6C]" />

        {success ? (
          <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-3xl font-black text-zinc-900 mb-4 tracking-tighter uppercase">You&apos;re On The List!</h2>
            <p className="text-zinc-500 leading-relaxed font-medium">
              We&apos;ve reserved your 15% off Early Bird discount. We will notify you at <strong className="text-zinc-800">{form.mobile}</strong> when we launch in Nagpur.
            </p>
            <button 
              onClick={() => setSuccess(false)}
              className="mt-8 text-sm font-bold text-zinc-400 hover:text-[#FF6B35] uppercase tracking-widest transition-colors"
            >
              Register Another Person
            </button>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FF6B35]/10 text-[#FF6B35] mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tighter uppercase leading-tight">Reserve Your Spot</h2>
              <p className="text-zinc-500 mt-3 font-medium">Flat 15% off on your first repair. Register early.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35] transition-all font-medium placeholder:font-normal placeholder:text-zinc-400"
                  placeholder="Rahul Sharma"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">Mobile Number</label>
                <input 
                  type="tel" 
                  value={form.mobile}
                  onChange={e => setForm({...form, mobile: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35] transition-all font-medium placeholder:font-normal placeholder:text-zinc-400"
                  placeholder="9876543210"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-1">Full Residential Address</label>
                <textarea 
                  value={form.address}
                  onChange={e => setForm({...form, address: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35] transition-all min-h-[120px] resize-none font-medium placeholder:font-normal placeholder:text-zinc-400"
                  placeholder="Your complete address in Nagpur..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl font-medium animate-in fade-in">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-5 mt-2 rounded-xl font-black tracking-[0.2em] text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex justify-center items-center gap-3 shadow-[0_10px_30px_-10px_rgba(255,107,53,0.6)]"
                style={{ background: "linear-gradient(135deg, #FF6B35, #FF9A6C)", textTransform: 'uppercase' }}
              >
                {loading ? (
                  <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    <span>Claim 15% Off Now</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
