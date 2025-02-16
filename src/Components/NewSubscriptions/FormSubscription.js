import React, { useState } from "react";

const FromSubscription = ({ onAddSubscription }) => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const subscriptionData = {
      id: Math.random().toString(), // Generate a unique ID
      title: form.title,
      amount: parseFloat(form.amount),
      date: new Date(form.date),
    };

    // Pass the new subscription data to the parent component
    onAddSubscription(subscriptionData);

    // Reset the form fields
    setForm({ title: "", amount: "", date: "" });
  };

  return (
    <div className="w-full flex justify-center items-center p-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md bg-[linear-gradient(maroon,navy)] shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-white text-center">
          Add Subscription
        </h2>
        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm font-medium text-white mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-medium text-white mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            value={form.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="amount"
            className="text-sm font-medium text-white mb-1"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            value={form.amount}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FromSubscription;
