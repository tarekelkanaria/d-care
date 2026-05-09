// import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear().toString();
  return (
    <footer className="container flex justify-between py-10">
      <div>
        <h1 className="font-inter text-logo font-extrabold">
          D-Care Dental Systems
        </h1>
      </div>
      <div className="text-placeholder">
        <p>© {year} d-care Dental. Precision Care for Your Smile.</p>
      </div>
      <div className="text-placeholder flex space-x-3">
        <p>Privacy Policy</p>
        <p>Patient Portal</p>
        <p>Contact Us</p>
      </div>
    </footer>
  );
}
