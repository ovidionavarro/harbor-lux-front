export default function SocialSidebar() {
  return (
    <div className="fixed top-1/3 left-0 z-50 flex flex-col space-y-4 px-2">
      <a href="https://facebook.com/tuempresa" target="_blank" rel="noreferrer" className="text-white bg-[#4267B2] p-3 rounded-r-lg hover:opacity-80">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com/tuempresa" target="_blank" rel="noreferrer" className="text-white bg-[#C13584] p-3 rounded-r-lg hover:opacity-80">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://twitter.com/tuempresa" target="_blank" rel="noreferrer" className="text-white bg-[#1DA1F2] p-3 rounded-r-lg hover:opacity-80">
        <i className="fab fa-x-twitter"></i>
      </a>
    </div>
  );
}
