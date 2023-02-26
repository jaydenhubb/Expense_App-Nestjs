export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}
export const data: Data = {
  report: [
    {
      id: 'a2115596-8b10-4de3-b236-480abdbdaaff',
      source: 'Salary',
      amount: 7900,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '147027aa-1259-4ddb-b939-5366adb2362e',
      source: 'Novels',
      amount: 1100,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'a5f905c4-8d0c-45c6-8bed-13fab873dd88',
      source: 'Lottery',
      amount: 900,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'e16477b8-f4ce-4090-8421-d9579e74cc1b',
      source: 'Food',
      amount: 300,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}
