import { BsPerson } from "react-icons/bs";

const ContactForm = () => {
  return (
    <div className="lg:col-span-7">
      <div className="bg-navy-800 border border-white/5 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/40">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
          <p className="text-slate-400 text-sm">
            Required fields are marked with an asterisk (
            <span className="text-blue-500">*</span>)
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1"
              >
                Your Name <span className="text-blue-500">*</span>
              </label>
              <div className="w-full  relative group px-3 py-3.5 bg-navy-950/60 border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 flex items-center gap-2">
                <BsPerson className="size-6  text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="block w-full outline-none "
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1"
              >
                Your Email <span className="text-blue-500">*</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-slate-500 group-focus-within:text-blue-400 transition-colors">
                    alternate_email
                  </span>
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="block w-full pl-12 pr-4 py-3.5 bg-navy-950/60 border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="block text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1"
            >
              Subject
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  topic
                </span>
              </div>
              <input
                id="subject"
                type="text"
                placeholder="Project Inquiry"
                className="block w-full pl-12 pr-4 py-3.5 bg-navy-950/60 border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1"
            >
              Message <span className="text-blue-500">*</span>
            </label>
            <div className="relative group">
              <div className="absolute top-4 left-4 flex items-start pointer-events-none">
                <span className="text-slate-500 group-focus-within:text-blue-400 transition-colors">
                  edit_note
                </span>
              </div>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about your project needs..."
                className="block w-full pl-12 pr-4 py-4 bg-navy-950/60 border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/20 transform hover:-translate-y-0.5"
            >
              Send Message
              <span className="text-lg group-hover:translate-x-1 transition-transform">
                send
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
