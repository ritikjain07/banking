import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
const Home = () => {
    const loggedIn = { firstName: 'Ritik', lastName: 'Jain', email: 'ritikjain4560@gmail.com'};
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                 type="greeting"
                 title="Welcome"
                 user={loggedIn?.firstName || 'Guest'}
                 subtext="Access and manage your account and transactions efficiently."
                />

                <TotalBalanceBox 
                   accounts={[]}
                   totalBanks={1}
                   totalCurrentBalance={12500.00}
                />
            </header>

            RECENT TRANSACTION
        </div>
        <RightSidebar 
         user={loggedIn}
         transaction = {[]}
         banks={[{ currentBalance: 1237.50 },{ currentBalance: 5369.98 }]}
        />
    </section>
  )
}

export default Home