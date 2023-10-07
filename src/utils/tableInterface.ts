export interface TableData {
  id: number;
  type: string;
  desc: string;
}

export interface ListProps {
  id: number;
  desc: string;
}

export interface PrivacySection {
  id: number;
  title: string;
  text: string;
  list?: ListProps[];
  tableData?: TableData[];
  list2?: ListProps[];
}

export interface PrivacySectionsData {
  privacySections: PrivacySection[];
}
// export default PrivacySectionsData;
