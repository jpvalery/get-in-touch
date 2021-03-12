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

export default function Generic() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/send-advisorship", {
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
      <h1 className="py-12 font-serif text-5xl font-bold">Get me as advisor</h1>
      <div className="pb-12 text-gray-200 prose">
        <p>
          The more details you give me, the faster we can start working
          together.
        </p>
        <p>Please fill out the form below and let's get started. </p>
      </div>
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
          <label for="role" className="block text-sm font-medium text-gray-50">
            What's your role?
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="role"
              id="role"
              className="block w-full text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-form-500 focus:border-form-500 sm:text-sm"
              placeholder="Your job title"
              aria-describedby="email-description"
              ref={register({ required: true, maxLength: 80 })}
            />
          </div>
        </div>

        <div>
          <label
            for="company"
            className="block text-sm font-medium text-gray-50"
          >
            What's your company?
          </label>
          <div className="mt-1">
            <input
              type="text"
              placeholder="Dunder Mifflin Inc."
              name="company"
              id="company"
              className="block w-full text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-form-500 focus:border-form-500 sm:text-sm"
              ref={register({ required: true, min: 2, maxLength: 80 })}
            />
          </div>
        </div>

        <div>
          <label
            for="website"
            className="block text-sm font-medium text-gray-50"
          >
            What's your website?
          </label>
          <div className="mt-1">
            <input
              type="text"
              placeholder="dundermifflin.com"
              name="website"
              id="website"
              className="block w-full text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-form-500 focus:border-form-500 sm:text-sm"
              ref={register({ required: true, min: 2, maxLength: 80 })}
            />
          </div>
        </div>

        <div>
          <label
            for="reason"
            className="block text-sm font-medium text-gray-50"
          >
            What do you need my help with?
          </label>
          <select
            id="reason"
            name="reason"
            className="block w-full py-2 pl-3 pr-10 mt-1 text-base text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-form-500 focus:border-form-500 sm:text-sm"
            ref={register}
          >
            <option value="pick-one" disabled selected>
              Pick one
            </option>
            <option value="growth">Growth</option>
            <option value="cs">Customer Success</option>
            <option value="operations">GrowthOps / RevOps</option>
            <option value="automation">Automation</option>
            <option value="instrumentation">Instrumentation</option>
            <option value="analytics">Analytics</option>
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

        <div className="items-center justify-start grid grid-flow-col gap-2">
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
          className="inline-flex items-center px-4 py-2 ml-0 mr-auto text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-cta-600 hover:bg-cta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-500"
        >
          Send your request
          <svg
            class="w-5 h-5 ml-3 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            />
          </svg>
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
