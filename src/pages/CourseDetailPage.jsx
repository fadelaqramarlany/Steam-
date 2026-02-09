import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Book, User, CheckCircle, ChevronRight } from 'lucide-react';
import { courses } from '../data/courses';

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <div className="text-center py-20">Kursus tidak ditemukan</div>;
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-lg text-gray-600 mb-8">{course.description}</p>

            <img
              src={course.image}
              alt={course.title}
              className="w-full h-80 object-cover rounded-2xl mb-12 shadow-lg"
            />

            <h2 className="text-2xl font-bold mb-6">Kurikulum Kursus</h2>
            <div className="space-y-4 mb-12">
              {course.lessons.map((lesson, index) => (
                <div key={lesson.id} className="flex items-center p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition group">
                  <div className="bg-blue-50 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div className="flex-1 font-semibold text-gray-800">{lesson.title}</div>
                  <Link
                    to={`/course/${course.id}/lesson/${lesson.id}`}
                    className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition"
                  >
                    Mulai <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">Instruktur</h2>
            <div className="flex items-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{course.instructor}</h3>
                <p className="text-gray-600">Expert in {course.category}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
              <div className="text-3xl font-bold text-gray-900 mb-6">Gratis</div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition mb-6">
                Ikuti Kursus Sekarang
              </button>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3 text-blue-500" />
                  <span>Durasi: {course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Book className="h-5 w-5 mr-3 text-blue-500" />
                  <span>Pelajaran: {course.lessons.length}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 mr-3 text-blue-500" />
                  <span>Akses Seumur Hidup</span>
                </div>
              </div>

              <hr className="my-8 border-gray-100" />

              <h4 className="font-bold mb-4">Yang Akan Kamu Pelajari:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Dasar-dasar {course.category}</li>
                <li>• Praktek langsung dengan studi kasus</li>
                <li>• Tips dan trik dari industri</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
