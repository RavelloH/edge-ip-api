import { geolocation } from "@vercel/edge";
import { ipAddress } from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export default function handler(request) {
  const data = {
    ip: ipAddress(request) || "unknown",
    city: geolocation(request).city,
    country: geolocation(request).country,
    latitude: geolocation(request).latitude,
    longitude: geolocation(request).longitude,
    region: geolocation(request).region,
  };

  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
}
