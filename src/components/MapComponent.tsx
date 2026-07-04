import React from 'react';

interface MapComponentProps {
  location: string; // This can be an address string or coordinates (e.g., "latitude,longitude")
  height?: string; // Tailwind height class, e.g., "h-64", "h-96", "h-full"
  zoom?: number; // Zoom level for the map, default is 15
}

export function MapComponent({ location, height = "h-96", zoom = 15 }: MapComponentProps) {
  // IMPORTANT: Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API Key.
  // You can get one from the Google Cloud Console. Ensure it has Maps Embed API enabled.
  // For security, consider loading this key from environment variables (e.g., process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'; 

  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(location)}&zoom=${zoom}`;

  return (
    <div className={`w-full ${height} overflow-hidden rounded-lg shadow-lg`}>
      <iframe
        title="Melona Dental Center Location"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={embedUrl}
      ></iframe>
    </div>
  );
}