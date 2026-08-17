"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import SuccessModal from "@/components/ui/SuccessModal";
import Spinner from "@/components/ui/Spinner";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = async (data) => {
  //   const res = await fetch("/api/quote", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       ...data,
  //       formType: "contact",
  //     }),
  //   });

  //   if (res.ok) {
  //     alert("Message sent successfully!");
  //   } else {
  //     alert("Something went wrong.");
  //   }
  // };
const [error, setError] = useState("");
 const onSubmit = async (data) => {
  setLoading(true);
  setError("");

  try {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        formType: "contact",
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "Something went wrong.");
    }

    setShowModal(true);
  } catch (error) {
    setError(
      error.message ||
        "We could not send your message. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-6 text-3xl font-bold text-center">Request a Quote</h2>

        <p className="mb-10 text-center text-gray-600">
          Provide your shipment details and our team will contact you shortly.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-xl bg-white p-10 shadow-md"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full rounded-md border px-4 py-2"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full rounded-md border px-4 py-2"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              {...register("phone", { required: "Phone is required" })}
              className="w-full rounded-md border px-4 py-2"
            />
          </div>

          {/* Shipment Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Shipment Type
            </label>
            <select
              {...register("service", { required: true })}
              className="w-full rounded-md border px-4 py-2"
            >
              <option value="">Select Service</option>
<option>Ocean Freight</option>
<option>Air Freight</option>
<option>Inland Transportation</option>
<option>Customs Clearance</option>
<option>Import on Behalf of Others</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full rounded-md border px-4 py-2"
            />
          </div>

          {/* Submit */}
          {/* <button
            type="submit"
            className="w-full rounded-md bg-blue-900 py-3 text-white transition hover:bg-orange-500"
          >
            Submit Request
          </button> */}
          {error && (
  <p className="rounded-md bg-red-50 p-3 text-sm text-red-600">
    {error}
  </p>
)}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-md bg-blue-900 py-3 text-white transition hover:bg-orange-500 disabled:opacity-60"
          >
            {loading ? <Spinner /> : "Submit Request"}
          </button>
        </form>
      </div>
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Message Sent!"
        message="Thank you for contacting us. We'll reply shortly."
      />
    </section>
  );
};

export default ContactForm;
