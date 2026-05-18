export default function StartYJ() {
  return (
    <section className="bg-cta text-white rounded-xl w-auto p-4 sm:p-20 mx-2 sm:mx-10 lg:mx-20 flex flex-col items-center text-center justify-center gab-6   ">
      {/*header div*/}
      <div className="text-2xl sm:text-4xl font-semibold tracking-tight max-w-2xl leading-tight">
        <h1>Start Your Journey to a Better Smile Today</h1>
      </div>
      {/*paragraph div*/}
      <div className="text-sm sm:text-base text-blue-100 max-w-xl font-light leading-relaxed ">
        <p>
          Join thousands of happy patients and experience the d-care difference.
          <br></br>
          New patients receive a free whitening consultation.
        </p>
      </div>
      {/*button div*/}
      <div className="mt-10 bg-white text-blue-600 font-medium rounded-xl transition-all duration-200 hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] shadow-md w-fit text-sm sm:text-base whitespace-nowrap ">
        <button className="px-8 py-3.5 cursor-pointer">
          Book Your Appointment
        </button>
      </div>
    </section>
  );
}
