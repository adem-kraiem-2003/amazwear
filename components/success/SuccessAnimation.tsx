import "@/styles/desktop.css";

export default function SuccessAnimation() {
  return (
    <div className="mb-12 relative w-24 h-24 flex items-center justify-center">
      <svg className="w-full h-full text-primary" viewBox="0 0 52 52">
        <circle className="success-circle" cx="26" cy="26" fill="none" r="24" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        <path className="success-check" d="M16 26l7.5 7.5L36 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>

    </div>
  );
}
