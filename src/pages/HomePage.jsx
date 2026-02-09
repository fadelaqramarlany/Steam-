import React from 'react';
import { ArrowRight, Play, Users, Trophy, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const HomePage = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Tingkatkan Keahlian Anda Untuk Masa Depan
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Belajar dari ahli di bidangnya. Akses kursus berkualitas tinggi kapan saja, di mana saja.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition flex items-center justify-center">
                  Mulai Belajar <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5 fill-current" /> Lihat Demo
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                alt="Learning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">10rb+</div>
              <div className="text-gray-600">Siswa Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600">Kursus Ahli</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Instruktur</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.9</div>
              <div className="text-gray-600">Rating Rata-rata</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Kursus Terpopuler</h2>
              <p className="text-gray-600">Pilih dari berbagai kursus yang dirancang untuk membantu Anda sukses.</p>
            </div>
            <Link to="/courses" className="text-blue-600 font-semibold hover:underline flex items-center">
              Lihat Semua <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Belajar di EduPintar?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami menyediakan pengalaman belajar terbaik dengan fitur yang mendukung perkembangan karir Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Komunitas Belajar</h3>
              <p className="text-gray-600">Diskusi dengan ribuan siswa lainnya dan instruktur berpengalaman.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sertifikat Resmi</h3>
              <p className="text-gray-600">Dapatkan sertifikat penyelesaian untuk memperkuat portofolio Anda.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Akses Seumur Hidup</h3>
              <p className="text-gray-600">Belajar kapan saja tanpa batas waktu akses ke semua materi kursus.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
