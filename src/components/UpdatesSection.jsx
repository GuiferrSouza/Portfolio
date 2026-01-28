export default function UpdatesSection({ data }) {
    if (!data || data.length === 0) return null
    return (
        <section id="updates">
            <div className="updates-container">
                <h2 className="section-title">Updates</h2>
                <div className="updates-timeline">
                    {data.map((update) => (
                        <div key={update.id} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">{update.date}</span>
                                <h3 className="timeline-title">{update.title}</h3>
                                <p className="timeline-description">{update.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}