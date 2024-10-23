import { Card } from 'flowbite-react';
import React from 'react';

interface PricingCardProps {
  icon: React.ElementType; // Tipul pentru componenta icon
  price: string; // Prețul
  description: string; // Descrierea
}

export const PricingCard: React.FC<PricingCardProps> = ({
  icon: Icon,
  price,
  description,
}) => {
  return (
    <Card className="hover:shadow-2xl">
      <div className="flex flex-col max-w-xs space-y-5  ">
        <div className="flex justify-center items-center">
          <Icon className="w-8 h-8" />
        </div>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            cu
          </span>
          <span className="text-5xl font-extrabold tracking-tight">
            {price}
          </span>
          <span className="text-2xl font-semibold">LEI</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /luna
          </span>
        </div>
        <div>{description}</div>
      </div>
    </Card>
  );
};
