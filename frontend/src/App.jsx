import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setShortUrl('');

    try {
      const response = await axios.post('https://url-shortener-y1dh.onrender.com/api/shorten', {
        originalUrl: url,
      });

      setShortUrl(response.data.shortUrl);
    } catch (err) {
      setError('Erro ao encurtar a URL');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          🔗 Encurtador de URL
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Cole sua URL aqui"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border p-2 rounded mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? 'Encurtando...' : 'Encurtar URL'}
          </button>
        </form>

        {shortUrl && (
          <div className="mt-4">
            <p className="text-sm">Sua URL encurtada:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline break-all"
            >
              {shortUrl}
            </a>
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-500">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
