export default function handler(req, res) {
    const kampus = [
        { id: 1, name: 'Universitas Gadjah Mada', description: 'UGM adalah universitas negeri tertua di Indonesia.', image: '/images/ugm.jpeg' },
        { id: 2, name: 'Universitas Negeri Yogyakarta', description: 'UNY adalah universitas negeri yang terkenal dengan pendidikan guru.', image: '/images/uny.jpg' },
        { id: 3, name: 'Universitas Islam Indonesia', description: 'UII adalah universitas swasta tertua di Indonesia.', image: '/images/uii.jpg' },
        { id: 4, name: 'Universitas Atma Jaya Yogyakarta', description: 'UAJY adalah universitas swasta Katolik yang terkenal dengan pendidikan bisnis dan ekonomi.', image: '/images/uajy.jpg' },
        { id: 5, name: 'Universitas Sanata Dharma', description: 'USD adalah universitas swasta Katolik yang terkenal dengan pendidikan humaniora dan ilmu sosial.', image: '/images/usd.jpg' },
        { id: 6, name: 'Universitas Kristen Duta Wacana', description: 'UKDW adalah universitas swasta Kristen yang terkenal dengan pendidikan teologi dan ilmu sosial.', image: '/images/ukdw.jpg' },
        { id: 7, name: 'Universitas PGRI Yogyakarta', description: 'UPY adalah universitas negeri yang terkenal dengan pendidikan guru dan ilmu pendidikan.', image: '/images/upy.jpg' },
        { id: 8, name: 'Universitas Ahmad Dahlan', description: 'UAD adalah universitas swasta Islam yang terkenal dengan pendidikan ilmu sosial dan humaniora.', image: '/images/uad.jpg' },
        { id: 9, name: 'Universitas Muhammadiyah Yogyakarta', description: 'UMY adalah universitas swasta Islam yang terkenal dengan pendidikan ilmu sosial dan humaniora.', image: '/images/umy.jpg' },
        { id: 10, name: 'Universitas Teknologi Yogyakarta', description: 'UTY adalah universitas negeri yang terkenal dengan pendidikan ilmu pengetahuan dan teknologi.', image: '/images/uty.jpg' },
        { id: 11, name: 'Universitas Mercu Buana Yogyakarta', description: 'UMBY adalah universitas swasta yang terkenal dengan pendidikan ilmu komunikasi dan teknologi informasi.', image: '/images/umby.jpg' },
        { id: 12, name: 'Universitas Sarjanawiyata Tamansiswa', description: 'UST adalah universitas swasta yang terkenal dengan pendidikan ilmu pendidikan dan keguruan.', image: '/images/ust.jpg' },
        { id: 13, name: 'Universitas Janabadra', description: 'UJB adalah universitas swasta yang terkenal dengan pendidikan hukum dan ekonomi.', image: '/images/uj.jpg' },
        { id: 14, name: 'Universitas Respati Yogyakarta', description: 'UNRIYO adalah universitas swasta yang terkenal dengan pendidikan kesehatan dan ilmu sosial.', image: '/images/ury.jpg' },
        { id: 15, name: 'Universitas Amikom Yogyakarta', description: 'Amikom adalah universitas swasta yang terkenal dengan pendidikan teknologi informasi dan komunikasi.', image: '/images/amikom.jpg' },
        { id: 16, name: 'Universitas Alma Ata', description: 'UAA adalah universitas swasta yang terkenal dengan pendidikan kesehatan dan ilmu sosial.', image: '/images/alma.jpg' },
        { id: 17, name: 'Universitas Nahdlatul Ulama Yogyakarta', description: 'UNU Yogyakarta adalah universitas swasta yang terkenal dengan pendidikan agama dan ilmu sosial.', image: '/images/unuy.jpg' },
        { id: 18, name: 'Universitas Widya Mataram', description: 'UWM adalah universitas swasta yang terkenal dengan pendidikan ilmu sosial dan humaniora.', image: '/images/widya.jpg' },
        { id: 19, name: 'Universitas Proklamasi 45', description: 'UP45 adalah universitas swasta yang terkenal dengan pendidikan teknik dan ilmu sosial.', image: '/images/up45.jpeg' },
        { id: 20, name: 'Universitas Cokroaminoto Yogyakarta', description: 'UCY adalah universitas swasta yang terkenal dengan pendidikan ilmu sosial dan humaniora.', image: '/images/uca.jpg' }
    ];
// Mengirimkan data kampus sebagai respons
    res.status(200).json(kampus);
}

