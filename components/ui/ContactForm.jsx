"use client";

import Button from "@/components/ui/Button";
import Field from "@/components/ui/Field";
import FormNotice from "@/components/ui/FormNotice";
import Textarea from "@/components/ui/Textarea";
import { submitForm } from "@/lib/formSubmit";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Please add a name.";
  if (!values.email.trim()) {
    errors.email = "Please add an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (!values.message.trim()) {
    errors.message = "Please add a message.";
  } else if (values.message.trim().length < 24) {
    errors.message = "Please add a little more detail to the message.";
  }

  return errors;
}

export default function ContactForm({ notice }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [apiError, setApiError] = useState("");

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

  function handleNewInquiry() {
    setApiError("");
    setErrors({});
    setValues(initialValues);
    setStatus("idle");
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setApiError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting) return;

    setApiError("");
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    const result = await submitForm({
      formData: values,
      requiredFields: ["name", "email", "subject", "message"],
      extraFields: {
        formName: "contact",
      },
    });

    if (result?.success) {
      setValues(initialValues);
      setErrors({});
      setStatus("success");
      return;
    }

    if (result?.validationErrors) {
      setErrors((current) => ({ ...current, ...result.validationErrors }));
    }

    setApiError(
      result?.error ||
        "We couldn't send your message right now. Please try again.",
    );
    setStatus("idle");
  }

  if (isSuccess) {
    return (
      <div className="grid gap-4">
        <FormNotice tone="success" className="px-5 py-4">
          <div className="space-y-2">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-soot-900/80">
              Message sent
            </p>
            <p className="text-sm leading-7 text-soot-900">{notice}</p>
            <p className="text-[0.88rem] leading-7 text-soot-700">
              Want to add another note? You can send a new inquiry anytime.
            </p>
          </div>
        </FormNotice>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="button"
            variant="outline"
            tone="soot"
            size="lg"
            className="w-full sm:w-auto"
            onClick={handleNewInquiry}
          >
            Send another inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          autoComplete="name"
          error={errors.name}
          label="Name"
          name="name"
          onChange={handleChange}
          placeholder="Your name"
          value={values.name}
          disabled={isSubmitting}
        />
        <Field
          autoComplete="email"
          error={errors.email}
          label="Email"
          name="email"
          onChange={handleChange}
          placeholder="your@email.com"
          type="email"
          value={values.email}
          disabled={isSubmitting}
        />
      </div>
      <Field
        error={errors.subject}
        label="Subject"
        name="subject"
        onChange={handleChange}
        placeholder="What is this about?"
        value={values.subject}
        disabled={isSubmitting}
      />
      <Textarea
        error={errors.message}
        label="Message"
        name="message"
        onChange={handleChange}
        placeholder="Share the kind of inquiry, opportunity, or conversation you have in mind."
        value={values.message}
        disabled={isSubmitting}
      />

      {apiError ? <FormNotice tone="warning">{apiError}</FormNotice> : null}
      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <Button
          size="lg"
          type="submit"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : "Send inquiry"}
        </Button>
      </div>
    </form>
  );
}
