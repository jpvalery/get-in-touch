export default async (req, res) => {
  if (req.method === "POST") {
    await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "jp.valery@me.com" }],
            subject: `New message from ${req.body.name} ${req.body.email}`,
          },
        ],
        from: {
          email: "contact@jpvalery.me",
          name: "Contact Form - Get in touch w/ Jp",
        },
        reply_to: {
          email: req.body.email,
        },
        content: [
          {
            type: "text/html",
            value: `<p><b>Reason:</b> ${req.body.reason}</p><p><b>Message:</b> ${req.body.message}</p>`,
          },
        ],
      }),
    });

    console.log("Email sent!");

    return res.status(200).end();
  }
  return res.status(500).end();
};
