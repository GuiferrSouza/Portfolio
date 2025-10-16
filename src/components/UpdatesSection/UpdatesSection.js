import { forwardRef } from 'react';
import data from "../../data/updatesData";
import "./UpdatesSection.css";

const UpdatesSection = forwardRef((_, ref) => {
    return (
        <section id="updates" className="updates" ref={ref}>
            <h2 className="fade">Atualizações</h2>
            <ul className="update-list">
                {data.map((item) => (
                    <li key={item.id} className="fade">{item.text}</li>
                ))}
            </ul>
        </section>
    );
});

export default UpdatesSection;