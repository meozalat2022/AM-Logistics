import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-4 text-center">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <Phone className="mx-auto mb-4 text-blue-900" />
            <h4 className="mb-2 font-semibold">Phone</h4>
            <p className="text-sm text-gray-600">+20 10 0000 0000</p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <Mail className="mx-auto mb-4 text-blue-900" />
            <h4 className="mb-2 font-semibold">Email</h4>
            <p className="text-sm text-gray-600">info@amlogistics.com</p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <MapPin className="mx-auto mb-4 text-blue-900" />
            <h4 className="mb-2 font-semibold">Office</h4>
            <p className="text-sm text-gray-600">Cairo, Egypt</p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <Clock className="mx-auto mb-4 text-blue-900" />
            <h4 className="mb-2 font-semibold">Working Hours</h4>
            <p className="text-sm text-gray-600">Sun – Thu | 9:00 – 18:00</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
