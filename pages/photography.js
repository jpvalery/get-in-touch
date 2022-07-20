import { useForm } from "react-hook-form";

import { Button, Post, ToastSuccess } from "@jpvalery/mistral";

import toast, { Toaster } from "react-hot-toast";
const notify = () =>
  toast(<ToastSuccess message="Successfully submitted!" />, {
    style: {
      border: "0px solid black",
      backgroundColor: "transparent",
    },
  });

export default function Generic() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/send-photo", {
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
    <>
      <Post header="Get in touch about photography">
        <div className="prose pb-12 text-gray-200">
          <p>
            I'm available for editorial, commercial, and documentary projects.
          </p>
          <p>
            While I'm currently favoring more in-depth editorial and documentary
            projects, I'm happy to discuss other projects if they match my
            vision or move me.
          </p>
          <p>Please fill out the form below and let's get started. </p>
        </div>
        <form className="grid gap-10" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-50"
            >
              What's your name?
            </label>
            <div className="mt-1">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                id="name"
                className="focus:border-form-500 focus:ring-form-500 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm sm:text-sm"
                ref={register({ required: true, min: 2, maxLength: 80 })}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-50"
            >
              Where can I write back to you?
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="email"
                id="email"
                className="focus:border-form-500 focus:ring-form-500 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm sm:text-sm"
                placeholder="you@example.com"
                aria-describedby="email-description"
                ref={register({ required: true, maxLength: 80 })}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-50"
            >
              What can I help you with?
            </label>
            <select
              id="reason"
              name="reason"
              className="focus:border-form-500 focus:ring-form-500 mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none sm:text-sm"
              ref={register}
            >
              <option value="project-pitch" selected>
                You want to collaborate on a project
              </option>
              <option value="hire-me">You'd like to hire/commission me</option>
              <option value="general-chat">
                You'd like to chat about photography in general
              </option>
              <option value="specific-chat">
                You'd like to chat about one of my series/projects
              </option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
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
                className="focus:border-form-500 focus:ring-form-500 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm"
                aria-describedby="message"
                ref={register({ required: true, maxLength: 80 })}
              />
            </div>
          </div>

          <div className="grid grid-flow-col items-center justify-start gap-2">
            <label
              htmlFor="checked"
              className="block text-sm font-medium text-gray-50"
            >
              Have you proofread everything?
            </label>

            <input
              type="checkbox"
              id="checked"
              name="checked"
              ref={register({ required: true })}
              className="order-first h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <Button
            icon="InboxInIcon"
            label="Send message"
            onClick={notify}
            type="submit"
          />
          <Toaster
            toastOptions={{
              className: "rounded-md bg-green-50 p-4",
            }}
          />
        </form>
      </Post>
    </>
  );
}
