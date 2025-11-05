import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner';

export default function Verify() {
  const [searchParams] = useSearchParams();
  const certID = searchParams.get("certID");

  return (
    <>
      <SecBanner
        title="COA Verification"
        subtitle="To view the original certificate please verify your information"
        image="/img/aboutus/HEader3.png"
      />

      <div className="flex justify-center my-12 mt-5">
        <iframe
          src={`https://www.sharkeyasugar.com/verify-v2/?certID=${certID}`}
          width="100%"
          height="580"
          style={{ border: "none" }}
          title="Verification Page"
        ></iframe>
      </div>
    </>
  );
}
