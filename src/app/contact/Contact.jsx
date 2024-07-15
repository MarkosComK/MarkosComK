import Noise from "../effects/noise";

export default function Contact({ display, setContactDisplay, index, handleIndex}) {
  return (
    <section
    className={
    `${display ? "open bg-white dark:bg-gray-900 border-t border-r border-b" : "close custom-hover border-b"} transition-all duration-500 bottom-0 bg-charcoal`
    } 
    id="contact"
    style={{zIndex: index}}
    >
    <button
    className={`${display ? "z-30 absolute w-full h-full" : "w-full h-full z-[19] absolute" }`}
    onMouseEnter={() => handleIndex()}
    onClick={() => {setContactDisplay(!display)}}
    >
    </button>
    <p className={`${display ? "hidden" : "" } p-4`}>contact</p>
          <div className={`${display ? "" : "hidden" } py-8 lg:py-16 px-4 mx-auto max-w-screen-md relative z-40 top-1/2 -translate-y-1/2`}>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Let`s to work together? Want to send feedback? Need more details about my work? Let me know.</p>
              <form action="#" className="space-y-8">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                      <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@company.com" required />
                  </div>
                  <div>
                      <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                      <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how i can help you" required />
                  </div>
                  <div className="sm:col-span-2">
                      <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                      <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
              </form>
          </div>
          <Noise />
    </section> 
  )
}
