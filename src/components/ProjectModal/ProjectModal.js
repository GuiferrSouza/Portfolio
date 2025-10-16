import { useState } from "react";
import "./ProjectModal.css";

const ProjectModal = ({ visible, project, handleClose }) => {
    const [current, setCurrent] = useState(0);
    const length = project.gallery.length;

    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

    const [closing, setClosing] = useState(false);

    const closeModal = () => {
        setClosing(true);
    };

    const handleAnimationEnd = () => {
        if (closing) {
            handleClose();
            setClosing(false);
        }
    };

    if (!visible && !closing) return null;

    return (
        <div className={`modal-overlay ${closing ? "closing" : ""}`} onClick={closeModal}>
            <div className="modal-content"
                onClick={(e) => e.stopPropagation()}
                onAnimationEnd={handleAnimationEnd}>
                <button className="modal-close" onClick={closeModal}>✕</button>

                <div className="modal-body">
                    <div className="modal-gallery">
                        {project.gallery.map((img, i) => (
                            <div key={i} className={`slide ${i === current ? "active" : ""}`} >
                                {i === current && <img src={img} alt={`${project.title} ${i}`} />}
                            </div>
                        ))}
                        <button className="prev" onClick={(e) => { e.preventDefault(); prevSlide(); }}>‹</button>
                        <button className="next" onClick={(e) => { e.preventDefault(); nextSlide(); }}>›</button>
                    </div>

                    <div className="modal-info">
                        <h2>{project.title}</h2>
                        <p><strong>Status:</strong> {project.status}</p>
                        <p><strong>Empresa:</strong> {project.company}</p>
                        <p><strong>Descrição:</strong> {project.details}</p>
                        <p><strong>Tecnologias:</strong> {project.techs.join(", ")}</p>
                        {project.obs && <p><strong>Observação:</strong> {project.obs}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;