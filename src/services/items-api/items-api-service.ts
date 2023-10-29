export interface IListItem {
  id: number;
  label: string;
}

export const fetchItems = (): Promise<IListItem[]> => {
  return Promise.resolve([
    { id: 1, label: "Some label 1" },
    { id: 2, label: "Some label 2" },
    { id: 3, label: "Some label 3" },
    { id: 4, label: "Some label 4" },
    { id: 5, label: "Some label 5" },
  ]);
};
