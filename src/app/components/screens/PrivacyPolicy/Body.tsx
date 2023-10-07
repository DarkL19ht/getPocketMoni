import Image from 'next/image';
import React from 'react';
import Table from './Table';
import privacySections from '@/utils/PrivacyPolicyData';

const Body = () => {
  return (
    <div className="w-full md:w-[68%] text-xs">
      {privacySections.map((data, index) => {
        let _id = data.title.replace(/ /g, '');
        return (
          <div>
            {data.id == 1 ? <div className="hidden "></div> : <div className="h-4 " id={_id}></div>}
            <h2 key={index} className="mt-2 mb-3 font-bold text-sm">
              {data.title}
            </h2>
            <p className="mb-2  text-justify">{data.text}</p>
            {data.list2 && (
              <ul className="mb-4">
                {data.list2.map((item, index) => (
                  <li className="flex flex-start mb-2">
                    <p className="mt-[0.3%]">{item.desc}</p>
                  </li>
                ))}
              </ul>
            )}
            {data.list && (
              <ul className="mb-4">
                {data.list.map((item, index) => (
                  <li className="flex flex-start mb-2">
                    <Image src="/Checkbox.svg" width={20} height={20} alt="checkbox" />
                    <p className="mt-[0.3%] ml-3">{item.desc}</p>
                  </li>
                ))}
              </ul>
            )}
            {data.tableData && <Table data={data} />}
          </div>
        );
      })}
    </div>
  );
};

export default Body;
