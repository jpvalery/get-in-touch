import React from "react";
import { useForm } from "react-hook-form";

import Success from "../components/Success"
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast(<Success />, {
  style: {
    border: '0px solid black',
    backgroundColor: 'transparent'
  },
});

export default function Generic() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const text = await res.text()
    console.log(data);
    console.log(res);
  }


  return (
    <main className="max-w-3xl mx-auto">
    <h1 className="font-serif font-bold text-5xl py-12">Get in touch</h1>
    <form
      className="grid gap-10"
      onSubmit={handleSubmit(onSubmit)}
    >
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
            className="text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
            className="text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="you@example.com"
            aria-describedby="email-description"
            ref={register({ required: true, maxLength: 80 })}
          />
        </div>
      </div>

      <div>
        <label for="reason" className="block text-sm font-medium text-gray-50">
          What can I help you with?
        </label>
        <select
          id="reason"
          name="reason"
          className="text-gray-900 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          ref={register}
        >
          <option value="say-hi" selected>
            You just wanna say hi
          </option>
          <option value="services">
            You're interested in my services
          </option>
          <option value="photo">
            You'd like to talk photography
          </option>
          <option value="other">
            Something else
          </option>
        </select>
      </div>

      <div>
        <label for="message" className="block text-sm font-medium text-gray-50">
          Can you add more details?
        </label>
        <div className="mt-1">
          <textarea
            type="text"
            name="message"
            id="message"
            rows="3"
            className="text-gray-900 w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300 rounded-md"
            aria-describedby="message"
            ref={register({ required: true, maxLength: 80 })}
          />
        </div>
      </div>

      <div className="grid grid-flow-col justify-start items-center gap-2">
        <label for="checked" className="block text-sm font-medium text-gray-50">
          Have you proofread everything?
        </label>

          <input
            type="checkbox"
            id="checked"
            name="checked"
            ref={register({ required: true })}
            className="order-first h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />

      </div>

      <button onClick={notify} type="submit" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cta-600 hover:bg-cta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-500 mr-auto ml-0">
        Let's do this
        <svg
          class="ml-3 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
        </svg>
      </button>
      <Toaster   toastOptions={{
    className: 'rounded-md bg-green-50 p-4',
  }}
  />
    </form>
    </main>
  );
}
