export const courses = [
  {
    id: 1,
    title: "Pemrograman Web dengan React",
    description: "Belajar membangun aplikasi web modern menggunakan React.js dari dasar hingga mahir.",
    category: "Programming",
    level: "Pemula",
    duration: "10 Jam",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    instructor: "Budi Santoso",
    lessons: [
      { id: 101, title: "Pengenalan React", content: "React adalah library JavaScript untuk membangun UI." },
      { id: 102, title: "JSX dan Komponen", content: "Belajar tentang sintaks JSX dan cara membuat komponen." },
      { id: 103, title: "State dan Props", content: "Mengelola data dalam aplikasi React." }
    ]
  },
  {
    id: 2,
    title: "Desain UI/UX untuk Pemula",
    description: "Pelajari prinsip desain antarmuka dan pengalaman pengguna yang menarik.",
    category: "Design",
    level: "Pemula",
    duration: "8 Jam",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=800",
    instructor: "Siti Aminah",
    lessons: [
      { id: 201, title: "Apa itu UI/UX?", content: "Memahami perbedaan antara UI dan UX." },
      { id: 202, title: "Prinsip Desain Visual", content: "Belajar tentang warna, tipografi, dan tata letak." },
      { id: 203, title: "Prototyping dengan Figma", content: "Membuat prototype interaktif." }
    ]
  },
  {
    id: 3,
    title: "Data Science Dasar",
    description: "Mulai perjalanan Anda di dunia data dengan Python dan analisis data sederhana.",
    category: "Data Science",
    level: "Menengah",
    duration: "12 Jam",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    instructor: "Dr. Andi Wijaya",
    lessons: [
      { id: 301, title: "Pengenalan Python", content: "Dasar-dasar bahasa pemrograman Python." },
      { id: 302, title: "Pandas untuk Analisis Data", content: "Menggunakan library Pandas untuk mengolah data." },
      { id: 303, title: "Visualisasi Data", content: "Membuat grafik yang informatif." }
    ]
  }
];
