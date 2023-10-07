export interface PrivacySection {
  id: number;
  title: string;
  text: string;
  list?: string[];
  tableData?: TableDataItem[];
  list2?: string[];
}

export interface TableDataItem {
  id: number;
  type: string;
  desc: string;
}

export interface PrivacySectionsData {
  privacySections: PrivacySection[];
}
// export default PrivacySectionsData;
