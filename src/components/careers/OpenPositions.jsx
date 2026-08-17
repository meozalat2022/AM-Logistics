"use client";

const jobs = [
  {
    title: "Freight Forwarding Specialist",
    desc: "Coordinate international shipments and manage documentation.",
    location: "Cairo / Hybrid",
  },
  {
    title: "Sales Executive (Logistics)",
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
    const el = document.getElementById("apply-form");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });

    // set job in dropdown
    const select = document.getElementById("positionField");
    if (select) select.value = jobTitle;
  };

  return (
    <section id="open-positions" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Open Positions</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job,i)=>(
            <div key={i} className="p-8 rounded-2xl border hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-3">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.desc}</p>
              <p className="text-sm mb-6 text-gray-500">{job.location}</p>

              <button
                onClick={()=>scrollToForm(job.title)}
                className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-orange-500 transition"
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
