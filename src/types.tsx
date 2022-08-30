export type Quote = {
  map(arg0: (quote: any) => JSX.Element): import("react").ReactNode;
  id: number;
  quote: string;
  name: string;
};
