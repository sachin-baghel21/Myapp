import './App.css';
import React, { useState } from 'react';
import NewSubscriptions from './Components/NewSubscriptions/NewSubscription';
import Subscriptions from './Components/Subscriptions';

function App() {
  const [subscriptions, setSubscriptions] = useState([
    {
      id: '1',
      date: new Date(2024, 2, 23),
      title: 'Monthly Subscription',
      amount: 125.6,
    },
    {
      id: '2',
      date: new Date(2022, 11, 12),
      title: 'Quarterly Subscription',
      amount: 669.0,
    },
    {
      id: '3',
      date: new Date(2025, 7, 1),
      title: 'Yearly Subscription',
      amount: 1300.6,
    },
  ]);

  const [selectedYear, setSelectedYear] = useState('all');

  const addSubscriptionHandler = (subscriptionData) => {
    setSubscriptions((prevSubscriptions) => [
      ...prevSubscriptions,
      subscriptionData,
    ]);
  };

  const deleteSubscriptionHandler = (id) => {
    setSubscriptions((prevSubscriptions) =>
      prevSubscriptions.filter((subscription) => subscription.id !== id)
    );
  };

  const filterChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredSubscriptions =
    selectedYear === 'all'
      ? subscriptions
      : subscriptions.filter(
          (subscription) => subscription.date.getFullYear().toString() === selectedYear
        );

  return (
    <>
      <nav className="w-full bg-indigo-500 text-white flex justify-between items-center px-4 py-2 sticky top-0">
        <h1 className="text-lg">Webdcs</h1>
        <div className="flex items-center gap-2">
          <a href="/" className="text-white hover:text-black hover:underline">
            Login
          </a>
          <a href="/" className="text-white hover:text-black hover:underline">
            Signup
          </a>
        </div>
      </nav>

      <div className="w-full sticky top-10">
        <h1 className="text-center md:text-2xl text-xl py-2 font-bold text-orange-500 bg-[rgba(0,0,0,0.4)]">
          Subscription Page
        </h1>
      </div>

      <div className="w-full bg-black flex justify-between items-center py-2 md:px-4 px-1 mb-2 sticky top-[80px]">
        <h3 className="text-white">Apply Filter</h3>
        <select
          className="rounded-md px-2 md:py-0 py-1"
          value={selectedYear}
          onChange={filterChangeHandler}
        >
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      <div className="md:px-2 px-1 space-y-4">
        {filteredSubscriptions.length > 0 ? (
          filteredSubscriptions.map((subscription) => (
            <Subscriptions
              key={subscription.id}
              id={subscription.id}
              date={subscription.date}
              title={subscription.title}
              amount={subscription.amount}
              onDelete={deleteSubscriptionHandler}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No subscriptions found for the selected year.</p>
        )}
      </div>

      <NewSubscriptions onAddSubscription={addSubscriptionHandler} />
    </>
  );
}

export default App;
