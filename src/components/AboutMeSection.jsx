export default function AboutMeSection({ data }) {
    if (!data || data.length === 0) return null
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-image-wrapper">
                        <img src={data.img_url} className="about-image" />
                    </div>
                    <div className="about-text">
                        <h2 className="section-title">{data.name}</h2>
                        <p className="about-description">{data.bio}</p>
                        <div className="about-skills">
                            {data.skills.map(skill => (
                                <span key={skill} className="skill-tag" translate="no">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}