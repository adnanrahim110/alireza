"use client";

import Button from "@/components/ui/Button";
import Field from "@/components/ui/Field";
import FormNotice from "@/components/ui/FormNotice";
import Textarea from "@/components/ui/Textarea";
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
  const [showNotice, setShowNotice] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setShowNotice(Object.keys(nextErrors).length === 0);
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
        />
      </div>
      <Field
        error={errors.subject}
        label="Subject"
        name="subject"
        onChange={handleChange}
        placeholder="What is this about?"
        value={values.subject}
      />
      <Textarea
        error={errors.message}
        label="Message"
        name="message"
        onChange={handleChange}
        placeholder="Share the kind of inquiry, opportunity, or conversation you have in mind."
        value={values.message}
      />
      {showNotice ? <FormNotice tone="warning">{notice}</FormNotice> : null}
      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <Button size="lg" type="submit" className="w-full sm:w-auto">
          Review inquiry
        </Button>
      </div>
    </form>
  );
}
