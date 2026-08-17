const ContactMap = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Our Office Location
        </h2>

        <div className="overflow-hidden rounded-xl shadow-md">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1728.0400499201562!2d31.316164999999984!3d29.97712794037891!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1769453989330!5m2!1sen!2seg"
            className="h-[400px] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
