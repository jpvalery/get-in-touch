import React from "react";
import { useForm } from "react-hook-form";

import Success from "../components/Success";
import toast, { Toaster } from "react-hot-toast";
const notify = () =>
  toast(<Success />, {
    style: {
      border: "0px solid black",
      backgroundColor: "transparent",
    },
  });

import { InboxInIcon } from "@heroicons/react/outline";

export default function Generic() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const text = await res.text();
    console.log(data);
    console.log(res);
  };

  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="py-12 font-serif text-5xl font-bold">Get in touch</h1>
      <form className="grid gap-10" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label for="name" className="block text-sm font-medium text-gray-50">
            What's your name?
          </label>
          <div className="mt-1">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              id="name"
              className="block w-full text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-form-500 focus:border-form-500 sm:text-sm"
              ref={register({ required: true, min: 2, maxLength: 80 })}
            />
          </div>
        </div>

        <div>
          <label for="email" className="block text-sm font-medium text-gray-50">
            Where can I write back to you?
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="email"
              id="email"
              className="block w-full text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-form-500 focus:border-form-500 sm:text-sm"
              placeholder="you@example.com"
              aria-describedby="email-description"
              ref={register({ required: true, maxLength: 80 })}
            />
          </div>
        </div>

        <div>
          <label
            for="reason"
            className="block text-sm font-medium text-gray-50"
          >
            What can I help you with?
          </label>
          <select
            id="reason"
            name="reason"
            className="block w-full py-2 pl-3 pr-10 mt-1 text-base text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-form-500 focus:border-form-500 sm:text-sm"
            ref={register}
          >
            <option value="say-hi" selected>
              You just wanna say hi
            </option>
            <option value="services">You're interested in my services</option>
            <option value="photo">You'd like to talk photography</option>
            <option value="other">Something else</option>
          </select>
        </div>

        <div>
          <label
            for="message"
            className="block text-sm font-medium text-gray-50"
          >
            Can you add more details?
          </label>
          <div className="mt-1">
            <textarea
              type="text"
              name="message"
              id="message"
              rows="3"
              className="block w-full text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-form-500 focus:border-form-500"
              aria-describedby="message"
              ref={register({ required: true, maxLength: 80 })}
            />
          </div>
        </div>

        <div className="grid items-center justify-start grid-flow-col gap-2">
          <label
            for="checked"
            className="block text-sm font-medium text-gray-50"
          >
            Have you proofread everything?
          </label>

          <input
            type="checkbox"
            id="checked"
            name="checked"
            ref={register({ required: true })}
            className="order-first w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
        </div>

        <button
          onClick={notify}
          type="submit"
          className="flex items-center justify-between px-4 py-2 ml-0 mr-auto text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-cta-600 hover:bg-cta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-500"
        >
          Let's do this
          <InboxInIcon className="w-5 h-5 ml-3 -mr-1" />
        </button>
        <Toaster
          toastOptions={{
            className: "rounded-md bg-green-50 p-4",
          }}
        />
      </form>
    </main>
  );
}