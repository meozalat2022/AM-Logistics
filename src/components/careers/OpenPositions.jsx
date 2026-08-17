"use client";

const jobs = [
  {
    title: "Freight Forwarding Specialist",
    desc: "Coordinate international shipments and manage documentation.",
    location: "Cairo / Hybrid",
  },
  {
    title: "Sales Executive",
    desc: "Develop new clients and manage logistics accounts.",
    location: "Cairo / Hybrid",
  },
  {
    title: "Operations Coordinator",
    desc: "Handle daily shipment operations and carrier coordination.",
    location: "Cairo / On-site",
  },
  {
    title: "Customer Service Representative",
    desc: "Support clients and track shipments.",
    location: "Remote / Hybrid",
  },
];

export default function OpenPositions() {
  const scrollToForm = (jobTitle) => {
    const select = document.getElementById("positionField");

    if (select) {
      select.value = jobTitle;

      // Notify React Hook Form that the select value changed
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    const el = document.getElementById("apply-form");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="open-positions" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-4xl font-bold">
          Open Positions
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="rounded-2xl border p-8 transition hover:shadow-xl"
            >
              <h3 className="mb-3 text-2xl font-bold">
                {job.title}
              </h3>

              <p className="mb-4 text-gray-600">
                {job.desc}
              </p>

              <p className="mb-6 text-sm text-gray-500">
                {job.location}
              </p>

              <button
                type="button"
                onClick={() => scrollToForm(job.title)}
                className="rounded-md bg-blue-900 px-6 py-3 text-white transition hover:bg-orange-500"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}