export default function Footer() {
    return (
      <footer className="bg-slate-900 text-slate-300 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <p className="text-sm">
            © {new Date().getFullYear()} Todo App. All rights reserved.
          </p>
  
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-sky-400 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              Terms
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              Contact
            </a>
          </div>
  
        </div>
      </footer>
    );
  }
  