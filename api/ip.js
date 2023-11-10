import { geolocation } from "@vercel/edge";
import { ipAddress } from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export default function handler(request) {
  return new Response(
    {
      ip: ipAddress(request) || "unknown",
      city: geolocation(request).city,
      country: geolocation(request).country,
      latitude: geolocation(request).latitude,
      longitude: geolocation(request).longitude,
      region: geolocation(request).region,
    },
    {
      headers: { "content-type": "text/json" },
    },
  );
}
