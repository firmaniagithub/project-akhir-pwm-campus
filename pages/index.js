import { useEffect, useState } from 'react';
import CampusCard from '../components/CampusCard';

export default function Home() {
    const [kampus, setKampus] = useState([]);

    useEffect(() => {
        // Fungsi untuk mengambil data kampus dari API
        const fetchKampus = async () => {
            const res = await fetch('/api/kampus');
            const data = await res.json();
            setKampus(data);
        };

        // Memanggil fungsi fetchKampus saat komponen mount
        fetchKampus();
    }, []);

    return (
        <div className="container">
            <div className="header">
                <h1>Katalog Kampus di Yogyakarta</h1>
            </div>
            <div className="campus-list">
                {kampus.map(k => (
                    // Mengirimkan data kampus ke komponen CampusCard
                    <CampusCard key={k.id} id={k.id} name={k.name} description={k.description} image={k.image} />
                ))}
            </div>
        </div>
    );
}