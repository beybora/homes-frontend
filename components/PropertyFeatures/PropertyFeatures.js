import { faBath, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import numeral from "numeral";

const PropertyFeatures = ({ attributes }) => {
  const { has_parking, pet_friendly, bedrooms, bathrooms, price } = attributes;
  return (
    <div className="max-w-lg mx-auto my-10 bg-white text-slate-900 p-5 text-center">
      <div className="grid grid-cols-2 mb-4 gap-y-5">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBed} /> {bedrooms} bedrooms
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBath} /> {bathrooms} bathrooms
        </div>
        <div className="flex items-center gap-2">
          {!!pet_friendly && (
            <>
              <FontAwesomeIcon icon={faDog} /> pet friendly
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          {!!has_parking && (
            <>
              <FontAwesomeIcon icon={faCar} /> parking available
            </>
          )}
        </div>
      </div>
      <h3 className="text-5xl font-bold">£{numeral(price).format("0,0")}</h3>
    </div>
  );
};

export default PropertyFeatures;
