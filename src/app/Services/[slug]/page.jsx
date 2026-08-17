import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "../../data/services";

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main>

      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-900">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Text */}
            <div className="text-white">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500">
                <Icon size={28} />
              </div>

              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {service.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                {service.description}
              </p>

            </div>

            {/* Image */}
            {service.image && (
              <div className="relative h-[350px] overflow-hidden rounded-2xl lg:h-[450px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}

          </div>
        </div>
      </section>


      {/* Service Details */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">
              {service.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {service.longDescription}
            </p>
          </div>


          {/* What We Offer */}
          {service.features && (
            <div className="mt-14 grid gap-6 sm:grid-cols-2">

              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-gray-50 p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 text-white">
                    ✓
                  </div>

                  <p className="font-medium text-gray-900">
                    {feature}
                  </p>
                </div>
              ))}

            </div>
          )}

        </div>
      </section>


      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Need Help With Your Shipment?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Contact AM Logistics and let our team help you find the right
            logistics solution for your shipment.
          </p>

          <Link
            href="/contactUs"
            className="mt-8 inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            Request a Quote
          </Link>

        </div>
      </section>

    </main>
  );
}