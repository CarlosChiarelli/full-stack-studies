import ExchangesList from "@/components/ExchangesList";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return <div><ExchangesList pageIndex={1}/></div>;
}
