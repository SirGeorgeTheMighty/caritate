import { FaBowlFood } from 'react-icons/fa6';
import { GiHeartPlus, GiMedicinePills } from 'react-icons/gi';
import { PricingCard } from '../components/pricing-card';

const Cards = () => {
  return (
    <div>
      <div className="flex justify-center space-x-5">
        <PricingCard
          icon={GiMedicinePills}
          price="50"
          description="îi poți dărui unui vârstnic medicamente pentru o lună          "
        />
        <div>
          <PricingCard
            icon={GiHeartPlus}
            price="100"
            description="donezi un pachet cu alimente de bază pentru un senior"
          />
        </div>
        <PricingCard
          icon={FaBowlFood}
          price="200"
          description="dăruiești unui bunic un pachet complet de alimente și produse de igienă"
        />
      </div>
    </div>
  );
};

export default Cards;
