"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MapPin, CheckCircle } from "lucide-react";
import SectionStars from "../ui/SectionStars";
import { toast } from "react-toastify";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  property: string;
  message: string;
  terms: boolean;
};

function PropertyRegister({ name }: { name: string }) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: { property: name, terms: false },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log("Form data:", data);
      await new Promise((r) => setTimeout(r, 500));
      toast.success("Your inquiry has been sent!");
      setSubmitted(true);
      reset({ property: name, terms: false });
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";

      toast.error(message);
    }
  };

  if (submitted) {
    return (
      <section className="flex flex-col items-center justify-center w-full p-10 text-white bg-grey-800 rounded-xl">
        <CheckCircle size={48} className="mb-4 text-green-400" />
        <h3 className="mb-2 text-2xl font-semibold">
          Thanks for your interest!
        </h3>
        <p className="text-center text-grey-100">
          We’ve received your inquiry about <strong>{name}</strong>. One of our
          agents will reach out shortly.
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-col w-full gap-10 px-8 py-10 text-white lg:flex-row xl:px-20">
      <div className="flex flex-col lg:w-1/3 gap-y-4">
        <SectionStars />
        <h2 className="w-full text-2xl font-semibold md:w-2/3">
          Inquire About Seaside Serenity Villa
        </h2>
        <p className="text-sm leading-relaxed text-grey-100">
          Interested in this property? Fill out the form below, and our real
          estate experts will get back to you with more details, including
          scheduling a viewing and answering any questions you may have.
        </p>
      </div>

      <div className="px-6 py-8 lg:w-2/3 ring ring-grey-500 rounded-xl lg:px-12 lg:py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-6"
          noValidate
        >
          {/* Name fields */}
          <div className="flex flex-col gap-6 lg:flex-row">
            {[
              { id: "firstName", label: "First Name" },
              { id: "lastName", label: "Last Name" },
            ].map(({ id, label }) => (
              <div key={id} className="flex flex-col flex-1 gap-y-2">
                <label htmlFor={id} className="font-semibold">
                  {label}
                </label>
                <input
                  id={id}
                  type="text"
                  {...register(id as keyof FormValues, {
                    required: `${label} is required`,
                  })}
                  className={`px-3 py-2 bg-black border rounded-md focus:outline-none focus:ring-2 ${
                    errors[id as keyof FormValues]
                      ? "border-red-500 focus:ring-red-500"
                      : "border-grey-500 focus:ring-primary-500"
                  }`}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                />
                {errors[id as keyof FormValues] && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors[id as keyof FormValues]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Contact fields */}
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Email */}
            <div className="flex flex-col flex-1 gap-y-2">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`px-3 py-2 bg-black border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-grey-500 focus:ring-primary-500"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col flex-1 gap-y-2">
              <label htmlFor="phone" className="font-semibold">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9()+-\s]+$/,
                    message: "Invalid phone number",
                  },
                })}
                className={`px-3 py-2 bg-black border rounded-md focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500"
                    : "border-grey-500 focus:ring-primary-500"
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Selected property */}
          <div className="relative flex flex-col gap-y-2">
            <label htmlFor="property" className="font-semibold">
              Selected Property
            </label>
            <input
              id="property"
              type="text"
              readOnly
              {...register("property")}
              className="px-3 py-2 border rounded-md cursor-not-allowed bg-grey-700 text-grey-100 border-grey-500 focus:outline-none"
            />
            <span className="absolute bottom-2.5 right-3">
              <MapPin fill="#fff" color="#000" />
            </span>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Must be at least 10 characters",
                },
              })}
              className={`px-3 py-2 bg-black border rounded-md focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-grey-500 focus:ring-primary-500"
              }`}
              placeholder="Enter your message"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Terms & Submit */}
          <div className="flex flex-col justify-between md:items-center md:flex-row gap-y-4">
            <div className="flex items-center gap-x-2">
              <input
                id="terms"
                type="checkbox"
                {...register("terms", {
                  required: "You must agree to the terms",
                })}
                className="w-4 h-4 accent-primary-500"
              />
              <label htmlFor="terms" className="text-grey-100">
                I agree with Terms of Use and Privacy Policy
              </label>
            </div>
            {errors.terms && (
              <p className="mt-1 text-sm text-red-500 md:mt-0">
                {errors.terms.message}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 font-semibold text-white transition-colors rounded-md cursor-pointer bg-primary-900 hover:bg-primary-800 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Your Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PropertyRegister;
