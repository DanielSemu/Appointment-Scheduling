import { useEffect, useRef } from "react";

function MobileMenu({ openMobileView, setOpenMobileView }) {
  const panelRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target)
      ) {
        setOpenMobileView(false);
      }
    }

    if (openMobileView) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMobileView]);

  return (
    <div
      className={`z-50 inset-0 ${openMobileView ? "fixed" : "hidden"}`}
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm "></div>

      {/* Panel */}
      <div
        ref={panelRef}
        className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setOpenMobileView(false)}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 "
        >
          <span className="sr-only">Close navigation</span>
          <svg
            viewBox="0 0 10 10"
            className="w-2.5 h-2.5 overflow-visible"
            aria-hidden="true"
          >
            <path
              d="M0 0L10 10M10 0L0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>

        {/* Navigation Items */}
        <ul className="space-y-6 mt-4">
          <li><a className="hover:text-sky-500" href="#">Docs</a></li>
          <li><a className="hover:text-sky-500" href="#">Components</a></li>
          <li><a className="hover:text-sky-500" href="#">Blog</a></li>
          <li><a className="hover:text-sky-500" href="#">Showcase</a></li>
          <li><a className="hover:text-sky-500" href="#">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
