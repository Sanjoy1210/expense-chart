import Tabs from "./Tabs";

export default function HomePage() {
  return (
    <section className="section__container">
      <h1 className="title">Expense Chart</h1>
      <div className="chart__container">
        <h3 className="chart__title">Expenses</h3>
        {/* tabs */}
        <Tabs />
      </div>
    </section>
  );
}
