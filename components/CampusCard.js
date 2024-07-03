import { useEffect } from 'react';

export default function CampusCard({ id, name, description, image }) {
    useEffect(() => {
        // Menggunakan vanilla JavaScript untuk menambahkan event listener
        const handleClick = () => {
            alert(`Kampus: ${name}`);
        };

        // Mendapatkan elemen kartu kampus berdasarkan ID
        const cardElement = document.getElementById(`campus-card-${id}`);
        cardElement.addEventListener('click', handleClick);

        // Cleanup event listener saat komponen unmount
        return () => {
            cardElement.removeEventListener('click', handleClick);
        };
    }, [id, name]);

    return (
        <div id={`campus-card-${id}`} className="campus-item">
            <img src={image} alt={name} className="campus-image" />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}
