export default function ContactsSection({ data }) {
    if (!data || data.length === 0) return null
    return (
        <section id="contact">
            <div className="contact-container">
                <h2 className="section-title">Contact Me</h2>
                <div className="contact-links">
                    {data.map((contact) => (
                        <a key={contact.id} href={contact.url} className="contact-link">
                            <span className="contact-link-name" translate="no">{contact.name}</span>
                            <span className="contact-link-handle" translate="no">{contact.handle}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}