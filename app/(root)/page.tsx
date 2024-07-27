import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Santosh",
    lastName: "Kumar",
    email: "dynamoroy371@gmail.com",
  };
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
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 120.3 }, { currentBalance: 500.5 }]}
      />
    </section>
  );
};

export default Home;
