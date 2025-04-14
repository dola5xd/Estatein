"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SectionStars from "../ui/SectionStars";
import { CheckCircle } from "lucide-react";
import { toast } from "react-toastify";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  hearAbout: string;
  message: string;
  terms: boolean;
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onBlur",
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log("Form data:", data);
      await new Promise((r) => setTimeout(r, 500));
      toast.success("Your message has been sent!");
      setSubmitted(true);
      reset({ terms: false });
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";

      toast.error(message);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  if (submitted) {
    return (
      <section className="flex flex-col items-center justify-center w-full p-10 text-white bg-grey-800 rounded-xl">
        <CheckCircle size={48} className="mb-4 text-green-400" />
        <h3 className="mb-2 text-2xl font-semibold">
          Thanks for your contact!
        </h3>
        <p className="text-center text-grey-100">
          We’ve received your message. One of our agents will reach out shortly.
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-col p-10 gap-x-4 gap-y-10 xl:p-20">
      <div className="flex flex-col gap-y-1">
        <SectionStars />
        <h2 className="text-3xl font-semibold">Let&apos;s Connect</h2>
        <p className="text-sm md:w-3/4 text-grey-100">
          We&apos;re excited to connect with you and learn more about your real
          estate goals. Use the form below to get in touch with Estatein.
          Whether you&apos;re a prospective client, partner, or simply curious
          about our services, we&apos;re here to answer your questions and
          provide the assistance you need.
        </p>
      </div>

      <motion.form
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={formVariants}
        onSubmit={handleSubmit(onSubmit)}
        id="Form"
        className="grid w-full grid-cols-1 gap-4 p-10 rounded xl:p-20 lg:grid-cols-3 ring ring-grey-500 gap-y-7"
      >
        {/* First Name */}
        <div className="flex flex-col col-span-3 lg:col-span-1">
          <label htmlFor="firstName" className="mb-2 font-semibold">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className="p-2 border rounded border-grey-500 focus:outline-0 focus:border-grey-200"
            {...register("firstName", {
              required: "First name is required",
              minLength: { value: 2, message: "At least 2 characters" },
              maxLength: { value: 30, message: "Max 30 characters" },
            })}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col col-span-3 lg:col-span-1">
          <label htmlFor="lastName" className="mb-2 font-semibold">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            className="p-2 border rounded border-grey-500 focus:outline-0 focus:border-grey-200"
            {...register("lastName", {
              required: "Last name is required",
              minLength: { value: 2, message: "At least 2 characters" },
              maxLength: { value: 30, message: "Max 30 characters" },
            })}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col col-span-3 lg:col-span-1">
          <label htmlFor="email" className="mb-2 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="p-2 border rounded border-grey-500 focus:outline-0 focus:border-grey-200"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col col-span-3 lg:col-span-1">
          <label htmlFor="phone" className="mb-2 font-semibold">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="p-2 border rounded border-grey-500 focus:outline-0 focus:border-grey-200"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                // allows digits, spaces, hyphens, parentheses, plus sign
                value: /^[0-9()+-\s]{7,20}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Inquiry Type */}
        <div className="flex flex-col col-span-3 lg:col-span-1">
          <label htmlFor="inquiryType" className="mb-2 font-semibold">
            Inquiry Type
          </label>
          <select
            id="inquiryType"
            className="p-2 border rounded custom-select border-grey-500 focus:outline-0 focus:border-grey-200"
            {...register("inquiryType", {
              required: "Please select an inquiry type",
            })}
          >
            <option value="">Select Inquiry Type</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnership">Partnership</option>
            <option value="Property Inquiry">Property Inquiry</option>
            <option value="Other">Other</option>
          </select>
          {errors.inquiryType && (
            <p className="mt-1 text-sm text-red-500">
              {errors.inquiryType.message}
            </p>
          )}
        </div>

        {/* How Did You Hear About Us */}
        <div className="flex flex-col col-span-3 lg:col-span-1">
          <label htmlFor="hearAbout" className="mb-2 font-semibold">
            How Did You Hear About Us?
          </label>
          <select
            id="hearAbout"
            className="p-2 border rounded custom-select border-grey-500 focus:outline-0 focus:border-grey-200"
            {...register("hearAbout", {
              required: "Please let us know how you heard about us",
            })}
          >
            <option value="">Select</option>
            <option value="Social Media">Social Media</option>
            <option value="Google">Google</option>
            <option value="Friend or Family">Friend or Family</option>
            <option value="Other">Other</option>
          </select>
          {errors.hearAbout && (
            <p className="mt-1 text-sm text-red-500">
              {errors.hearAbout.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col col-span-3">
          <label htmlFor="message" className="mb-2 font-semibold">
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Enter your message"
            className="p-2 border rounded border-grey-500 focus:outline-0 focus:border-grey-200"
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "At least 10 characters" },
              maxLength: { value: 500, message: "Max 500 characters" },
            })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Terms & Submit */}
        <div className="flex flex-col justify-between col-span-3 gap-y-4 md:items-center md:flex-row">
          <div className="flex items-center gap-2">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4"
              {...register("terms", {
                validate: (v) => v || "You must agree to the terms",
              })}
            />
            <label htmlFor="terms" className="text-sm">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>
          {errors.terms && (
            <p className="text-sm text-red-500">{errors.terms.message}</p>
          )}
          <button
            type="submit"
            className="px-4 py-2 font-semibold text-white rounded cursor-pointer bg-primary-800 hover:bg-primary-900"
          >
            Send Your Message
          </button>
        </div>
      </motion.form>
    </section>
  );
}

export default ContactForm;
