"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Spinner from "@/components/ui/Spinner";
import SuccessModal from "@/components/ui/SuccessModal";

const CareersForm = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();

      formData.append("formType", "career");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position", data.position);
      formData.append("experience", data.experience || "");
      formData.append("linkedin", data.linkedin || "");
      formData.append("message", data.message || "");

      if (data.cv?.[0]) {
        formData.append("cv", data.cv[0]);
      }

      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
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
        "We could not submit your application. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="apply-form" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Apply Now
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-2xl bg-white p-10 shadow"
        >
          <div>
            <input
              {...register("name", {
                required: "Full name is required",
              })}
              placeholder="Full Name"
              className="input"
            />

            {errors.name && (
              <p className="error">{errors.name.message}</p>
            )}
          </div>

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

            {errors.email && (
              <p className="error">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("phone", {
                required: "Phone number is required",
              })}
              placeholder="Phone"
              className="input"
            />

            {errors.phone && (
              <p className="error">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <select
              id="positionField"
              {...register("position", {
                required: "Please select a position",
              })}
              className="input"
            >
              <option value="">Position Applying For</option>
              <option>Freight Forwarding Specialist</option>
              <option>Sales Executive</option>
              <option>Operations Coordinator</option>
              <option>Customer Service Representative</option>
            </select>

            {errors.position && (
              <p className="error">{errors.position.message}</p>
            )}
          </div>

          <input
            {...register("experience")}
            placeholder="Years of Experience"
            className="input"
          />

          <input
            {...register("linkedin")}
            placeholder="LinkedIn Profile"
            className="input"
          />

          <textarea
            {...register("message")}
            rows={4}
            placeholder="Cover Letter / Message"
            className="input"
          />

          <div>
            <label className="mb-2 block font-medium">
              Upload CV (PDF, max 5 MB)
            </label>

            <input
              type="file"
              accept=".pdf,application/pdf"
              {...register("cv", {
                required: "Please upload your CV",
              })}
            />

            {errors.cv && (
              <p className="error">{errors.cv.message}</p>
            )}
          </div>

          {error && (
            <p className="rounded-md bg-red-50 p-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-md bg-orange-500 py-3 text-white transition hover:bg-orange-600 disabled:opacity-60"
          >
            {loading ? <Spinner /> : "Submit Application"}
          </button>
        </form>

        <SuccessModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Application Sent!"
          message="Our HR team will review your CV and contact you."
        />
      </div>
    </section>
  );
};

export default CareersForm;