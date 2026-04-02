'use client';
import HomeTable from '../ui/hometable';
import Image from 'next/image';
import Link from 'next/link';

const TableTime = () => {
  const openingHours = [
    { day: 'Monday - Thursday', time: 'From 11:00 to 24:00' },
    { day: 'Friday', time: 'From 11:00 to 24:00' },
    { day: 'Saturday', time: 'From 10:00 to 24:00' },
    { day: 'Sunday', time: 'From 10:00 to 24:00' },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/other images/booking_bg_1.jpg"
          alt="Restaurant Interior"
          fill
          className="object-cover blur-sm opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#A48134] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A48134] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Timing Card */}
          <div className="order-1 lg:order-1">
            <div className="bg-gradient-to-br from-black/60 via-[#A48134]/10 to-black/60 backdrop-blur-md border border-[#A48134]/30 rounded-3xl p-8 lg:p-10 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in-up">
              
              {/* Header */}
              <div className="text-center mb-8">
                <Link href="/menu" className="group block">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3 font-serif group-hover:text-[#A48134] transition-colors duration-300">
                    Explora Menu
                  </h2>
                </Link>
                <p className="text-[#A48134] text-xl font-medium italic">
                  Effettua la tua prenotazione!
                </p>
              </div>

              {/* Opening Hours */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-serif text-center">
                  Orari di apertura
                </h3>
                <div className="space-y-4">
                  {openingHours.map((schedule, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#A48134]/50 transition-all duration-300 animate-slide-in-left"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-gray-200 font-medium">{schedule.day}</span>
                      <span className="text-[#A48134] font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call Now Section */}
              <div className="text-center pt-6 border-t border-white/20">
                <p className="text-xl font-bold text-white mb-3 font-serif">
                  Chiama ora
                </p>
                <a 
                  href="tel:+393403366793"
                  className="inline-flex items-center gap-2 text-2xl lg:text-3xl font-bold text-[#A48134] hover:text-[#B8923A] transition-colors duration-300"
                >
                  <svg className="w-6 h-6 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                  </svg>
                  +39 340 3366 793
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Reservation Form */}
          <div className="order-2 lg:order-2">
            <div className="bg-gradient-to-br from-black/80 via-[#D4A541]/10 to-black/80 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-2xl border border-[#D4A541]/30 transform hover:scale-105 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <HomeTable />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.05);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TableTime;