import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const MyPhoneInput: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\d{10}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div>
      <PhoneInput
        country={'en'}
        value={phoneNumber}
        onChange={handleChange}
        inputProps={{ required: true }}
      />
    </div>
  );
};

export default MyPhoneInput;
