"use client";

import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessModal from "@/components/ui/SuccessModal";
import Spinner from "@/components/ui/Spinner";

const CTAForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // const [success, setSuccess] = useState(false);

  const [showModal, setShowModal] = useState(false);
const [error, setError] = useState("");
  // async function onSubmit(data) {
  //   setSuccess(false);

  //   const res = await fetch("/api/quote", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       ...data,
  //       formType: "quote",
  //     }),
  //   });

  //   if (res.ok) {
  //     setSuccess(true);
  //     reset();
  //   }
  // }
async function onSubmit(data) {
  setError("");

  try {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        formType: "quote",
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "Something went wrong.");
    }

    setShowModal(true);
    reset();
  } catch (error) {
    setError(
      error.message ||
        "We could not submit your request. Please try again."
    );
  }
}
  return (
    <section className="bg-blue-900 py-24">
      <div className="mx-auto max-w-4xl px-6 text-white">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Request a Shipment Quote
        </h2>

        <p className="mb-12 text-center text-white/80">
          Tell us about your shipment and our team will contact you shortly.
        </p>

        {error && (
  <p className="md:col-span-2 rounded-md bg-red-50 p-3 text-center text-sm text-red-600">
    {error}
  </p>
)}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6 rounded-xl bg-white p-8 text-gray-900 md:grid-cols-2"
          noValidate
        >
          {/* Full Name */}
          <div>
            <input
              {...register("name", { required: "Full name is required" })}
              placeholder="Full Name"
              className="input"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          {/* Company */}
          <div>
            <input
              {...register("company")}
              placeholder="Company Name"
              className="input"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email Address"
              className="input"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <input
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 7,
                  message: "Phone number is too short",
                },
              })}
              placeholder="Phone / WhatsApp"
              className="input"
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>

          {/* Origin */}
          <div>
            <input
              {...register("origin", { required: "Origin is required" })}
              placeholder="Origin Country / City"
              className="input"
            />
            {errors.origin && <p className="error">{errors.origin.message}</p>}
          </div>

          {/* Destination */}
          <div>
            <input
              {...register("destination", {
                required: "Destination is required",
              })}
              placeholder="Destination Country / City"
              className="input"
            />
            {errors.destination && (
              <p className="error">{errors.destination.message}</p>
            )}
          </div>

          {/* Service */}
          <div>
            <select
              {...register("service", { required: "Service type is required" })}
              className="input"
            >
              <option>Ocean Freight</option>
<option>Air Freight</option>
<option>Inland Transportation</option>
<option>Customs Clearance</option>
<option>Import on Behalf of Others</option>
            </select>
            {errors.service && (
              <p className="error">{errors.service.message}</p>
            )}
          </div>

          {/* Cargo */}
          <div>
            <input
              {...register("cargo")}
              placeholder="Cargo Type / Description"
              className="input"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <textarea
              {...register("message")}
              rows="4"
              placeholder="Additional Details"
              className="input"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="md:col-span-2 flex items-center justify-center gap-3 rounded-md bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:opacity-60"
          >
            {isSubmitting ? <Spinner /> : "Submit Request"}
          </button>

          {/* {success && (
            <p className="md:col-span-2 text-center text-green-600">
              Request sent successfully. We will contact you shortly.
            </p>
          )} */}
        </form>
      </div>
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Request Sent!"
        message="Our logistics team will contact you shortly."
      />
    </section>
  );
};

export default CTAForm;
