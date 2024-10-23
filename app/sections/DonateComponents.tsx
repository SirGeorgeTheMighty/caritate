import { TextInput } from 'flowbite-react';
import RoundedButton from '../components/RoundedButton';

const DonateButtons = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="flex space-x-5">
          <RoundedButton text="Lunara" isSelected={false} smallButton={true} />
          <RoundedButton
            text="Singulara"
            isSelected={true}
            smallButton={true}
          />
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen pt-5">
        <div className="grid grid-cols-2 gap-4">
          <RoundedButton text="50 lei" />
          <RoundedButton text="100 lei" />
          <RoundedButton text="200 lei" />
          <RoundedButton text="500 lei" />
        </div>
      </div>
      <div className="flex justify-center pt-5  ">
        <TextInput
          type="number"
          id="suma-dorita"
          placeholder="Suma in RON"
          className="text-center"
        />
      </div>
    </div>
  );
};

export default DonateButtons;
