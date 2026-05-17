export default function PatientStories() {
  const cards = [
    {
      quote:
        '"I used to dread going to the dentist, but d-care changed everything. The staff is so gentle and the office feels like a spa. My veneers look incredibly natural!"',
      name: 'Sarah J.',
      role: 'Cosmetic Patient',
    },
    {
      quote:
        '"I found d-care after a dental emergency. They saw me the same day and took care of my pain immediately. I\'ve since moved my whole family here for their checkups."',
      name: 'Michael R.',
      role: 'Family Care',
    },
    {
      quote:
        '"The level of technology they use is impressive. Everything was explained clearly using digital scans of my teeth. I highly recommend d-care for their transparency."',
      name: 'Elena W.',
      role: 'Invisalign Patient',
    },
  ];

  return (
    <section id="patient-stories" className="bg-slate-50 py-16">
     <div className="max-w-6xl mx-auto px-4">
     <h2 className="font-manrope font-semibold text-3xl text-center text-slate-800 mb-3">
       Patient Stories</h2>
     <p className="font-inter text-center text-slate-500 mb-10">
     Hear from those who have transformed their smiles at d-care.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
    {cards.map((c, i) => ( <article
              key={i}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
    <div className="mb-4">
    <div className="flex items-center gap-2 mb-3">
    <div className="flex space-x-1">
    {Array.from({ length: 5 }).map((_, idx) => (
    <svg
    key={idx}
    xmlns="http://www.w3.org/2000/svg"
    fill="#FFD439"
    viewBox="0 0 20 20"
    className="w-4 h-4">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.378-2.455a1 1 0 00-1.176 0L4.98 17.95c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L.985 8.233c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L7.982 2.927z" />
    </svg>
    ))}
    </div>
    </div>
    <p className="text-slate-700 font-inter text-base">{c.quote}</p>
    </div>
    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-100">
    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
    {c.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
    </div>
    <div>
    <div className="text-sm font-medium text-slate-800">{c.name}</div>
    <div className="text-xs text-slate-500">{c.role}</div>
    </div>
    </div>
    </article>
    ))}
    </div>
    </div>
    </section>
  );
}
