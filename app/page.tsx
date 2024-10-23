import { Form } from './components/form';
import Cards from './sections/Cards';
import DonateButtons from './sections/DonateComponents';
import TitleDescription from './sections/TitleDescription';

export default function MyPage() {
  return (
    <>
      <div className="my-10">
        <TitleDescription />
      </div>
      <Cards />
      <div className="flex justify-center items-center pt-10 ">
        <div className="pr-10 ">
          <DonateButtons />
        </div>
        <Form />
      </div>
    </>
  );
}
