const handleClose = () => {
  if (confirm("Are you sure you want to exit the website?")) {
    window.open("about:blank", "_self")?.close();
  }
};

export default function CloseBtn() {
  return (
    <button
      aria-label="Close website button"
      onClick={handleClose}
      className="relative h-6 w-6 motion-safe:animate-fade-in-top-full motion-safe:-translate-y-12 motion-safe:duration-header-nav-item-in motion-safe:delay-window-content"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 h-[2px] bg-white rotate-45 rounded" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 h-[2px] bg-white -rotate-45 rounded" />
    </button>
  );
}
