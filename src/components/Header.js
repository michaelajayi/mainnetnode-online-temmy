import React from "react";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className='bg-accent mt-5 sticky-top d-flex justify-content-center'>
      <div className='d-flex justify-content-between align-items-center mt-3 mb-5 w-75'>
        <p className='fs-4 text-white'>Dappsify</p>
        <a
          href='/access-wc'
          className='bg-deepblue border-0 shadow-none px-4 py-3 claim_airdop_btn rounded-1 text-white'
        >
          Claim Airdrop
        </a>
      </div>
    </div>
  );
};

export default Header;
