import { useGetPropertyQuery } from "@/state/api";
import { MapPin, Star } from "lucide-react";
import React from "react";

const PropertyOverview = ({ propertyId }: PropertyOverviewProps) => {
  const {
    data: property,
    isError,
    isLoading,
  } = useGetPropertyQuery(propertyId);

  if (isLoading) return <>Loading...</>;
  if (isError || !property) {
    return <>Property not Found</>;
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">
          {property.location?.country} / {property.location?.state} /{" "}
          <span className="font-semibold text-gray-600">
            {property.location?.city}
          </span>
        </div>
        <h1 className="text-3xl font-bold my-5">{property.name}</h1>
        <div className="flex justify-between items-center">
          <span className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-1 text-gray-700" />
            {property.location?.city}, {property.location?.state},{" "}
            {property.location?.country}
          </span>
          <div className="flex justify-between items-center gap-3">
            <span className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1 fill-current" />
              {property.averageRating.toFixed(1)} ({property.numberOfReviews}{" "}
              Reviews)
            </span>
            <span className="text-green-600">Verified Listing</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="border border-primary-200 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center gap-4 px-5">
          <div>
            <div className="text-sm text-gray-500">Monthly Rent</div>
            <div className="font-semibold">
              ${property.pricePerMonth.toLocaleString()}
            </div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Bedrooms</div>
            <div className="font-semibold">{property.beds} bd</div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Bathrooms</div>
            <div className="font-semibold">{property.baths} ba</div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Square Feet</div>
            <div className="font-semibold">
              {property.squareFeet.toLocaleString()} sq ft
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="my-16">
        <h2 className="text-xl font-semibold mb-5">About {property.name}</h2>
        <p className="text-gray-500 leading-7">
          {property.description}
          Experience resort-style luxury living at Seacrest Homes, where nature and modern city life seamlessly blend. Our newly built gated community features sophisticated 2 and 3-BHK residences, each designed with high-end interiors, premium finishes, and world-class amenities.

🏡 Elegant Homes with Premium Features:

Spacious interiors with contemporary architecture
Modular kitchen with quartz countertops and top-quality stainless steel appliances
Office nook for work-from-home convenience
Full-size in-unit washer and dryer for hassle-free laundry
Designer flooring and elegant lighting fixtures
🌿 Unmatched Luxury & Serenity:
Find your personal oasis of comfort beside our stunning swimming pools and spas, complete with poolside cabanas for ultimate relaxation. Experience the beauty of lush landscaped courtyards, complemented by indoor-outdoor entertainment seating and BBQ zones for social gatherings.

🌇 Breathtaking Views & Prime Location:
Start or end your day in the state-of-the-art fitness club and yoga studio. Enjoy breathtaking views of the surrounding landscapes, with unobstructed skyline panoramas that come alive at night.

👨‍💼 Business & Convenience at Your Doorstep:
For professionals, Seacrest Homes features a dedicated business center with a conference room, an internet lounge, and a coffee bar, allowing you to work efficiently without long commutes.

📍 Prime Location with Easy Connectivity:
Conveniently located in Rayadurgam, Anantapur, Andhra Pradesh (PIN Code: 515865), Seacrest Homes provides easy access to major highways, shopping centers, healthcare facilities, and entertainment hubs.

Nearby Cities: Anantapur, Bengaluru, Hyderabad
Education: Top-rated schools & colleges in the vicinity
Healthcare: Close to major hospitals like KIMS, Apollo, and Government General Hospital
Shopping & Entertainment: Access to leading malls, markets, and cultural hubs
Connectivity: Well-connected to major highways, railway stations, and upcoming metro projects
🌟 Live the Seacrest Luxury Lifestyle!
Schedule a visit today and embrace a lifestyle of sophistication, comfort, and convenience. Seacrest Homes is more than just a residence—it’s a dream home redefined.
<div>📞 Contact us today for a tour!</div>
        </p>
      </div>
    </div>
  );
};

export default PropertyOverview;
