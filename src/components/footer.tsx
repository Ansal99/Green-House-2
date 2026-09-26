import React from 'react';
import { ArrowUp, ArrowUpRight, Camera, MessageCircle, Link2 } from 'lucide-react';
import { HOTEL_INFO, NAV_LINKS } from '../lib/constants';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#F3EEE5] text-[#1A2E26] pt-24 pb-12 sm:pt-32 sm:pb-16 px-6 sm:px-12 md:px-16 lg:px-20 border-t border-[#E5DECF] overflow-hidden"
    >
      {/* Flowing Animated Wave Layer in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 h-[480px] w-[3600px] animate-wave">
          <svg
            className="h-full w-full"
            viewBox="0 0 3600 500"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 250C200 150 400 50 600 100C800 150 1000 350 1200 300C1400 250 1600 150 1800 250C2000 150 2200 50 2400 100C2600 150 2800 350 3000 300C3200 250 3400 150 3600 250V500H0V250Z"
              fill="currentColor"
              className="text-[#C8AC83]/12"
            />
            <path
              d="M0 250C200 200 400 100 600 150C800 200 1000 350 1200 300C1400 250 1600 200 1800 250C2000 200 2200 100 2400 150C2600 200 2800 350 3000 300C3200 250 3400 200 3600 250V500H0V250Z"
              fill="currentColor"
              className="text-[#1A2E26]/6"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section: Brand Statement & Guest Inquiries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#E5DECF]">
          {/* Main Brand Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#84796B] font-medium">
              Boutique Hotel in Dharamkot
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-light text-[#1A2E26] tracking-tight leading-[1.05]">
              {HOTEL_INFO.name}
            </h2>
            <p className="text-sm sm:text-base text-[#6B7C72] max-w-md font-light leading-relaxed">
              A peaceful luxury hotel in Dharamkot, Himachal Pradesh. Enjoy cozy mountain view rooms, delicious fresh food, and warm Indian hospitality.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-xs text-[#84796B] font-light">
              <div>
                <span className="block text-[9px] uppercase tracking-widest text-[#B8ADA0] font-medium">Hotel Host</span>
                <span className="text-[#1A2E26] font-medium">{HOTEL_INFO.owner}</span>
              </div>
              <div className="hidden sm:block w-[1px] h-8 bg-[#E5DECF]" />
              <div>
                <span className="block text-[9px] uppercase tracking-widest text-[#B8ADA0] font-medium">Location</span>
                <span>{HOTEL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Guest Registry & Navigation Columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Navigation Column */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#84796B] font-medium">
                Quick Links
              </span>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-[#2C4339] hover:text-[#1A2E26] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#C8AC83] transition-colors" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Follow Us / Social Handles */}
              <div className="pt-4">
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#84796B] font-medium mb-3">
                  Connect With Us
                </span>
                <div className="flex items-center space-x-2.5">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 rounded-full bg-[#EDE7DC]/80 hover:bg-[#1A2E26] hover:text-[#F8F5EF] text-[#2C4339] transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 rounded-full bg-[#EDE7DC]/80 hover:bg-[#1A2E26] hover:text-[#F8F5EF] text-[#2C4339] transition-all duration-300"
                    aria-label="Inquiries"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 rounded-full bg-[#EDE7DC]/80 hover:bg-[#1A2E26] hover:text-[#F8F5EF] text-[#2C4339] transition-all duration-300"
                    aria-label="Concierge Directory"
                  >
                    <Link2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Inquiries / Private Registry Form with Shadcn Input & Button */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#84796B] font-medium">
                Hotel Inquiries & Bookings
              </span>
              <p className="text-xs text-[#6B7C72] font-light leading-relaxed">
                Contact us for room availability, seasonal discounts, and special holiday packages.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="pt-2 space-y-2.5"
              >
                <div className="space-y-1">
                  <Label htmlFor="footer-guest-email" className="sr-only">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Input
                      id="footer-guest-email"
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full pr-24 rounded-full bg-[#EDE7DC]/70 border-[#E0D7C7] text-xs text-[#1A2E26] placeholder-[#84796B]/70 focus-visible:ring-1 focus-visible:ring-[#1A2E26] h-11"
                    />
                    <Button
                      type="submit"
                      className="absolute right-1 top-1 bottom-1 h-9 px-4 rounded-full bg-[#1A2E26] text-[#F8F5EF] text-[10px] tracking-widest uppercase hover:bg-[#2C4339] transition-colors flex items-center gap-1 shadow-sm"
                    >
                      <span>Join</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
                <span className="text-[9px] text-[#A69B8E] tracking-wide block">
                  Direct booking assistance for hotel guests, couples, and families.
                </span>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Geographic Meta, Copyright & Back to Top */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#84796B]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-[11px] tracking-wider uppercase">
            <span>{HOTEL_INFO.coordinates}</span>
            <span className="text-[#C8AC83]">·</span>
            <span>{HOTEL_INFO.elevation}</span>
            <span className="text-[#C8AC83]">·</span>
            <span>Dharamkot, Himachal Pradesh</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#A69B8E]">
              © {new Date().getFullYear()} {HOTEL_INFO.name}. All Rights Reserved.
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-full bg-[#EDE7DC] border-[#E0D7C7] text-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F8F5EF] transition-all duration-300 shadow-sm"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
