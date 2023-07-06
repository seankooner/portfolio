"use client";

import sendContactEmail from "@/actions/sendContactEmail";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().required("Required"),
});

const ContactForm = () => {
  const handleSubmit = async (
    values: ContactFormProps,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const result = await sendContactEmail(values);
      const { error } = result;
      if (error) throw new Error(error);

      toast.success("Email sent successfully!");
      resetForm();
    } catch (e) {
      toast.error("Failed to send email.");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label className="mb-2 block text-sm text-white" htmlFor="name">
          Name
        </label>
        <input
          className="w-full rounded-md bg-white bg-opacity-20 px-3 py-2 text-white"
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          required
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm text-white" htmlFor="email">
          Email
        </label>
        <input
          className="w-full rounded-md bg-white bg-opacity-20 px-3 py-2 text-white"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm text-white" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full rounded-md bg-white bg-opacity-20 px-3 py-2 text-white"
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          required
        />
      </div>
      <button
        className={`rounded px-4 py-2 text-white ${
          formik.isSubmitting
            ? "cursor-not-allowed bg-cyan-300"
            : "bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700"
        }`}
        type="submit"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
