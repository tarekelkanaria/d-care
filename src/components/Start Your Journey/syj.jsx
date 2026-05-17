export default function StartYJ() {
  return (
            <>
            {/*main div*/}
            <section className="stj bg-cta text-white rounded-xl w-auto p-20 m-10 flex flex-col items-center text-center justify-center gab-6   ">
                {/*header div*/}
                <div className ="stjh text-2xl sm:text-4xl font-semibold tracking-tight max-w-2xl leading-tight">
                    <h1>Start Your Journey to a Better Smile Today</h1>
                </div>
                {/*paragraph div*/}
                <div className="stjp text-sm sm:text-base text-blue-100 max-w-xl font-light leading-relaxed ">
                    <p>Join thousands of happy patients and experience the d-care difference.<br></br> 
                       New patients receive a free whitening consultation.</p>
                </div>
                {/*button div*/}
                <div className="stjbutton mt-10 bg-white text-blue-600 font-medium px-8 py-3.5 rounded-xl transition-all duration-200 hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] shadow-md w-fit text-sm sm:text-base whitespace-nowrap ">
                    <button> Book Your Appointment </button>

                </div>
            </section>
            
            </>
  )
}