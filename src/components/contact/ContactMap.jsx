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
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d336.95311435452487!2d31.33241202902301!3d29.969716501438022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1786559949320!5m2!1sen!2seg"
            className="h-[400px] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
