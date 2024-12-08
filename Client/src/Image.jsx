export default function Image({ src, alt = '', ...rest }) {
    // Check if the src includes 'https://', if not prepend the base URL
    const imageUrl = src && src.includes('https://') 
      ? src 
      : `http://localhost:4000/uploads/${src}`;
  
    return (
      <img
        {...rest} // Spread the remaining props (like className, onClick, etc.)
        src={imageUrl}
        alt={alt} // Use the provided alt text, defaulting to empty string
      />
    );
  }
  