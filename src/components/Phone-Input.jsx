import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import '../CSS/phone-input.css'; 

function PhoneNumberInput({ onChange }) {
  return (
    <div className='phone-number-input'>
        <PhoneInput 
        country={'sa'}
        preferredCountries={['sa', 'eg', 'ae']}
        inputClass="custom-phone-input"
        containerClass="custom-container"
        buttonClass="custom-flag-button"
        dropdownClass="custom-dropdown"
        placeholder="XXXXXXXXX"
         onChange={(value) => {
          onChange("+" + value); // ← نمرر الرقم لـ الأعلى
         }}
      />
    </div>
  );
}
export default PhoneNumberInput;

