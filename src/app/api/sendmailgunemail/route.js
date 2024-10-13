import Mailgun from "mailgun.js";
import FormData from "form-data";

export async function POST(req) {
  const body = await req.json();

  console.log("MAILGUN_API_KEY: ", process.env.MAILGUN_API_KEY);
  console.log("MAILGUN_URL: ", process.env.MAILGUN_URL);
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });
  const emailHtml = `name: ${body.name}, email: ${body.email}, message: ${body.message}`;
  let res = { status: "success", data: null }; // Initialize with null data

  try {
    const msg = await mg.messages.create(process.env.MAILGUN_URL, {
      from: `Excited User <mailgun@${process.env.MAILGUN_URL}>`,
      to: [body.email],
      subject: "Contact form submitted",
      text: "Testing some Mailgun awesomeness!",
      html: emailHtml,
    });
    res.data = body;
    console.log("Mailgun response:", msg);
  } catch (err) {
    console.log("Mailgun error:", err); // Log any error from Mailgun
    res.status = "error";
  }

  return Response.json(res);
}
