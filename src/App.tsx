/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSpecialist } from './components/AboutSpecialist';
import { Services } from './components/Services';
import { SymptomsGuide } from './components/SymptomsGuide';
import { TreatmentProcess } from './components/TreatmentProcess';
import { FAQ } from './components/FAQ';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingContacts } from './components/FloatingContacts';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setSelectedService(undefined);
    setBookingModalOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] flex flex-col selection:bg-[#58654F]/20 selection:text-[#173226]">
      {/* Clean Minimal Header */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* 1. Hero: Short headline → Key benefit → Experience → CTA */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. About Specialist: 15 Years of Experience & Philosophy */}
        <AboutSpecialist onOpenBooking={handleOpenBooking} />

        {/* 3. Services: Concise 4 core services with direct booking */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Symptoms Guide: Direct self-check inspired by clinical diagnostic structure */}
        <SymptomsGuide onSelectSymptom={handleSelectService} />

        {/* 5. Process: 3 simple, non-redundant steps */}
        <TreatmentProcess onOpenBooking={handleOpenBooking} />

        {/* 5. FAQ: Most frequent practical questions */}
        <FAQ />

        {/* 6. Address & Direct Booking */}
        <ContactLocation onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenBooking={handleOpenBooking} />

      {/* Floating Vertical Contact Buttons (WhatsApp, Instagram, Phone) */}
      <FloatingContacts />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
