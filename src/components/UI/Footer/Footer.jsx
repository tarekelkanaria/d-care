// import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear().toString();
  return (
    <footer className="container flex max-lg:flex-col max-lg:items-center lg:justify-between py-5 lg:py-10">
      <div>
        <h3 className="font-inter text-logo font-extrabold">
          D-Care Dental Systems
        </h3>
      </div>
      <div className="text-placeholder">
        <p>© {year} d-care Dental. Precision Care for Your Smile.</p>
      </div>
      <div className="text-placeholder flex max-sm:flex-col max-sm:space-y-3 sm:space-x-3">
        <p>Privacy Policy</p>
        <p>Patient Portal</p>
        <p>Contact Us</p>
      </div>
    </footer>
  );
}
