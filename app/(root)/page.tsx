import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Santosh" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Fuel up your savings and transactions with ease."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={0}
            totalCurrentBalance={1250.33}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
