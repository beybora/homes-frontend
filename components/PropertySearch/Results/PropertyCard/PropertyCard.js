import { faBathtub, faBed, faCar, faDog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import numeral from 'numeral';
import React from 'react'
import { relativeToAbsoluteUrls } from 'utils/relativeToAbsoluteUrls';

const PropertyCard = ({ title, price, bedrooms, bathrooms, hasParking, petFriendly, image, uri}) => {
  return (
    <Link className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200" href={relativeToAbsoluteUrls(uri)}>
      <div className="text-lg mt-3 font-bold">{title}</div>
      <Image src={image} alt={title} height="200" width="300" />
      <div className="text-md mt-3 font-bold">{numeral(price).format('$0,0')}</div>
      <div className="flex justify-between text-sm mt-3"> 
        <div> <FontAwesomeIcon icon={faBed} /> {bedrooms}</div>
        <div> <FontAwesomeIcon icon={faBathtub} /> {bathrooms}</div>
      </div>
      <div className="flex justify-between text-sm mt-3"> 
        {(!!hasParking || !!petFriendly ) && (
          <>
            <div> <FontAwesomeIcon icon={faCar} /> {hasParking} parking available</div>
            <div> <FontAwesomeIcon icon={faDog} /> {petFriendly} pet friendly</div>
          </>
        )}
      </div>
    </Link>
  );
};

export default PropertyCard
