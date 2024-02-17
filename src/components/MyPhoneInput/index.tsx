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
        country={'gb'}
        value={phoneNumber}
        onChange={handleChange}
        inputProps={{ required: true }}
        inputStyle={{
          width: '500px',
          borderRadius: '2rem',
          border: '1px solid #777777',
          outline: 'none',
          fontSize: '16px',
          fontWeight: '300',
          color: '#121212',
          height: '50px',
        }}
        dropdownStyle={{
          textOverflow: 'ellipsis',
        }}
        buttonStyle={{
          borderRadius: '2rem',
          background: 'none',
          border: 'none',
          outline: 'none',
        }}
      />
    </div>
  );
};

export default MyPhoneInput;
