import PageTitle from '@/app/components/screens/PrivacyPolicy/PageTitle';
import Body from '@/app/components/screens/PrivacyPolicy/Body';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-gray mt-5 p-3 mb-5">
        <h1 className=" mx-auto flex-center font-normal text-navy-200 text-3xl max-w-lg text-center">
          Privacy Policy
        </h1>
      </div>
      <div className="block md:flex justify-between pl-5 md:pl-8 lg:pl-12 pr-5 md:pr-8 lg:pr-24">
        <div className="w-[25%] text-[10px] hidden md:block">
          <PageTitle />
        </div>
        <Body />
      </div>
    </>
  );
};

export default PrivacyPolicy;
