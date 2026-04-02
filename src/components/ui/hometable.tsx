'use client';

import { useRef, useState } from 'react';

interface TableFormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

const HomeTable = () => {
  const [formData, setFormData] = useState<TableFormData>({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isTimeFocused, setIsTimeFocused] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);

  const openInputPicker = (input: HTMLInputElement | null) => {
    if (!input || isSubmitting) return;

    input.focus();

    const pickerInput = input as HTMLInputElement & {
      showPicker?: () => void;
    };

    if (typeof pickerInput.showPicker === 'function') {
      try {
        pickerInput.showPicker();
      } catch {
        // Some browsers may block showPicker in restricted contexts.
      }
    }
  };

  const handleDateInputClick = () => {
    openInputPicker(dateInputRef.current);
  };

  const handleTimeInputClick = () => {
    openInputPicker(timeInputRef.current);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6ff6b34b-58ef-44c9-baa6-9a6f1304f317",
          subject: "New Table Reservation - Al Taj Restaurant (Home Page)",
          from_name: formData.fullName,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          guests: formData.guests,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          message: '',
        });

        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-white mb-2 font-serif">
          Prenota il tuo tavolo
        </h3>
        <p className="text-[#D4A541]">Compila i dettagli qui sotto</p>
      </div>

      {/* Full Name */}
      <div className="relative group">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none placeholder-gray-400 text-white group-hover:border-[#D4A541]/50"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
      </div>

      {/* Email */}
      <div className="relative group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none placeholder-gray-400 text-white group-hover:border-[#D4A541]/50"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
      </div>

      {/* Phone */}
      <div className="relative group">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none placeholder-gray-400 text-white group-hover:border-[#D4A541]/50"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative group">
          <input
            ref={dateInputRef}
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            onClick={handleDateInputClick}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none text-white group-hover:border-[#D4A541]/50 [color-scheme:dark]"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
        </div>
        
        <div className="relative group">
          <input
            ref={timeInputRef}
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            onClick={handleTimeInputClick}
            onFocus={() => setIsTimeFocused(true)}
            onBlur={() => setIsTimeFocused(false)}
            required
            disabled={isSubmitting}
            className={`w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none group-hover:border-[#D4A541]/50 [color-scheme:dark] ${
              formData.time ? 'text-white' : 'text-transparent'
            }`}
          />
          {!formData.time && !isTimeFocused && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none">
              Time
            </span>
          )}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
        </div>
      </div>

      {/* Number of Guests */}
      <div className="relative group">
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none appearance-none cursor-pointer text-white group-hover:border-[#D4A541]/50"
        >
          <option value="" className="bg-[#040402] text-gray-400">Number of Guests</option>
          <option value="1" className="bg-[#040402]">1 Person</option>
          <option value="2" className="bg-[#040402]">2 People</option>
          <option value="3" className="bg-[#040402]">3 People</option>
          <option value="4" className="bg-[#040402]">4 People</option>
          <option value="5" className="bg-[#040402]">5 People</option>
          <option value="6" className="bg-[#040402]">6 People</option>
          <option value="7+" className="bg-[#040402]">7+ People</option>
        </select>
        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4A541] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
      </div>

      {/* Message */}
      <div className="relative group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Special Requests (Optional)"
          rows={4}
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/5 border-2 border-[#D4A541]/30 rounded-xl focus:border-[#D4A541] focus:bg-white/10 transition-all duration-300 outline-none placeholder-gray-400 text-white resize-none group-hover:border-[#D4A541]/50"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4A541]/0 to-[#D4A541]/0 group-hover:from-[#D4A541]/5 group-hover:to-[#D4A541]/5 pointer-events-none transition-all duration-300"></div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed text-gray-700'
            : submitStatus === 'success'
            ? 'bg-green-500 text-white'
            : 'bg-gradient-to-r from-[#D4A541] to-[#B8923A] text-black hover:shadow-2xl hover:shadow-[#D4A541]/50'
        }`}
      >
        {isSubmitting ? 'Invio in corso...' : submitStatus === 'success' ? 'Prenotazione confermata!' : 'Prenota il tuo tavolo'}
      </button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-center animate-fade-in">
          <p className="text-green-700 font-medium">Grazie! Ti contatteremo a breve per confermare la prenotazione.</p>
        </div>
      )}
    </form>
  );
};

export default HomeTable;