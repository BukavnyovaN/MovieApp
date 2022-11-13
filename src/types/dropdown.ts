export interface IDropdown {
  title?: string;
  items: {
    id?: number | undefined;
    name?: string | undefined;
    value?: string | undefined;
  }[];
  dropdownValue?: any;
  setDropdownValue: React.Dispatch<React.SetStateAction<any>>;
}
