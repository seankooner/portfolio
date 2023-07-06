"use server";

import { Resend } from "resend";
import ContactEmailTemplate from "@/components/Contact/ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

interface sendContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const sendContactEmail = async ({
  name,
  email,
  message,
}: sendContactEmailProps) => {
  try {
    const data = await resend.emails.send({
      from: "Luminos Bot <no-reply@luminos.app>",
      to: ["seankooner@gmail.com"],
      subject: "Inquiry via Portfolio",
      react: ContactEmailTemplate({ name, email, message }),
    });

    if (!data.id) throw new Error("Failed to send email");

    return { id: data.id, error: null };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return { error: errorMessage };
  }
};

export default sendContactEmail;
