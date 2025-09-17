import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Contact Me</h2>
          <p className="mt-4 text-lg text-slate-400">Feel free to reach out for collaborations or just a friendly chat!</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" className="w-full bg-slate-800 rounded-md py-3 px-4 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" className="w-full bg-slate-800 rounded-md py-3 px-4 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your Message" className="w-full bg-slate-800 rounded-md py-3 px-4 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-110">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;