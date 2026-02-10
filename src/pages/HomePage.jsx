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
                Jasa Pembuatan Website Profesional
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Wujudkan website impian Anda bersama FadelWeb. Desain modern, responsif, dan siap membantu bisnis Anda berkembang.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://wa.me/628XXXXXXXXXX" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition flex items-center justify-center">
                  Konsultasi Gratis <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link to="/courses" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition flex items-center justify-center">
                   Lihat Portfolio
                </Link>
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
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Website Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">Dukungan Teknis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">Gratis</div>
              <div className="text-gray-600">Konsultasi & Domain*</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses (Now Projects) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Terbaru</h2>
              <p className="text-gray-600">Beberapa proyek website yang telah kami kerjakan dengan sepenuh hati.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih FadelWeb?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami memberikan kualitas terbaik untuk setiap baris kode yang kami tulis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Desain Custom</h3>
              <p className="text-gray-600">Setiap website dibuat unik sesuai dengan identitas brand Anda.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Optimasi SEO</h3>
              <p className="text-gray-600">Website Anda akan mudah ditemukan di mesin pencari seperti Google.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Responsif Mobile</h3>
              <p className="text-gray-600">Tampilan website yang sempurna di semua perangkat (HP, Tablet, Desktop).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
