import { Button } from 'flowbite-react';

const RoundedButton = ({
  text,
  isSelected = false,
  smallButton = false,
}: {
  text: string;
  isSelected?: boolean;
  smallButton?: boolean;
}) => {
  return (
    <Button
      color={isSelected ? 'dark' : 'light'}
      className={`flex rounded-full justify-center ${
        smallButton ? 'w-32' : 'w-40'
      }`}
    >
      {text}
    </Button>
  );
};

export default RoundedButton;
