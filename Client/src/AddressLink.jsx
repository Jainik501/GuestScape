export default function AddressLink({ children, className = null }) {
    if (!className) {
      className = 'my-3 block';
    }
    className += ' flex gap-1 font-semibold underline';
  
    return (
      <a
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        href={`https://maps.google.com/?q=${children}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.121 10.121a3 3 0 11-4.242-4.242 3 3 0 014.242 4.242z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25c5.068 0 9.75 4.482 9.75 9.75S17.068 21.75 12 21.75 2.25 17.268 2.25 12 6.932 2.25 12 2.25z"
          />
        </svg>
        {children}
      </a>
    );
  }
  