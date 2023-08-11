import contacts from "content/contacts.json";

export default function Contact() {
  return (
    <section id="kontakt" className="pt-12 pb-20 lg:pt-24 lg:pb-40">
      <h2 className="section-header">Kontakt</h2>
      <p className="font-light text-base md:text-lg mx-auto mt-0 mb-8 text-center max-w-[700px]">
        {contacts[0].description}
      </p>
      <div className="flex-center">
        <a
          aria-label="Wyślij e-maila na adres kontakt@jakubsoboczynski.pl"
          className="button"
          href="mailto:kontakt@jakubsoboczynski.pl"
          rel="noreferrer nofollow noopener"
          target="_blank">
          Cześć
        </a>
      </div>
    </section>
  );
}
