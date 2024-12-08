import axios from "axios";
import { useState } from "react";

export default function PhotosUploader({ addedPhotos, onChange }) {
  const [photoLink, setPhotoLink] = useState('');

  // Add a photo by URL
  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post('/upload-by-link', { link: photoLink });
    onChange(prev => [...prev, filename]);
    setPhotoLink('');
  }

  // Upload photo from file input
  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i]);
    }
    axios.post('/upload', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(response => {
      const { data: filenames } = response;
      onChange(prev => [...prev, ...filenames]);
    });
  }

  // Remove a photo
  function removePhoto(ev, filename) {
    ev.preventDefault();
    onChange([...addedPhotos.filter(photo => photo !== filename)]);
  }

  // Select a photo as the main photo
  function selectAsMainPhoto(ev, filename) {
    ev.preventDefault();
    onChange([filename, ...addedPhotos.filter(photo => photo !== filename)]);
  }

  return (
    <>
      {/* Add photo by URL */}
      <div className="flex gap-2">
        <input
          value={photoLink}
          onChange={ev => setPhotoLink(ev.target.value)}
          className="border p-2 rounded-md w-full"
          placeholder="Paste a photo link"
        />
        <button
          onClick={addPhotoByLink}
          className="bg-primary text-black px-4 py-2 rounded-md"
        >
          Add Photo
        </button>
      </div>

      {/* Display uploaded photos */}
      <div className="mt-2 grid gap-3 grid-cols-3 lg:grid-cols-8">
        {addedPhotos.length > 0 && addedPhotos.map(link => (
          <div className="h-32 flex relative" key={link}>
            <img
              className="rounded-2xl w-full object-cover"
              src={link}
              alt="Uploaded"
            />
            {/* Remove photo button */}
            <button
              onClick={ev => removePhoto(ev, link)}
              className="absolute top-0 right-0 bg-black bg-opacity-50 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Set as main photo button */}
            <button
              onClick={ev => selectAsMainPhoto(ev, link)}
              className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              {link === addedPhotos[0] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c-.278-.18-.589-.283-.902-.283-.313 0-.624.103-.902.283L5.403 5.343a.75.75 0 01-1.06-1.061l4.5-4.5a2.25 2.25 0 013.182 0l4.5 4.5a.75.75 0 01-1.06 1.061l-4.5-4.5z"
                  />
                </svg>
              ) : (
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
                    d="M13.5 6.75l2.25 2.25-2.25 2.25"
                  />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Upload photo from file input */}
      <label className="border bg-transparent rounded-2xl p-2 cursor-pointer mt-4">
        <input
          type="file"
          multiple
          className="hidden"
          onChange={uploadPhoto}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1.5 6a2.25 2.25 0 012.25-2.25h17.25A2.25 2.25 0 0123 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6z"
          />
        </svg>
        Upload
      </label>
    </>
  );
}
