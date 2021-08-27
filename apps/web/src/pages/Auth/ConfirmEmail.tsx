import React from 'react';
import { ConfirmWrap } from '../../styles/confirm-email.stc';
import { site_title } from '@skill-mask/app';


const ConfirmEmail = () => {
  return (
    <ConfirmWrap>
      <h1>{site_title}</h1>
      <h2>Please confirm your email</h2>
      <p>
        Check your inbox to get instructions <br />
        on how to confirm email
      </p>
    </ConfirmWrap>
  );
};

export default ConfirmEmail;
