interface TableData {
  id: number;
  type: string;
  desc: string;
}

const Table = ({ data }: any) => {
  return (
    <div className="rounded-lg shadow-md border-t border-grey px-5 md:px-8 lg:px-16 pt-5 pb-1 leading-relaxed mb-10">
      <div className="flex justify-between text-justify w-full mb-10 text-sm font-semibold">
        <p className="">Data Type</p>
        <p className="w-[60%]">Description of Data</p>
      </div>
      {data.tableData.map((item: TableData, index: number) => (
        <div key={index} className="flex justify-between text-left md:text-justify w-full mb-10">
          <p className="">{item.type}</p>
          <p className=" w-[60%]">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Table;
