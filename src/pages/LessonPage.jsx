import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { courses } from '../data/courses';

const LessonPage = () => {
  const { id, lessonId } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) return <div className="p-20 text-center">Kursus tidak ditemukan</div>;

  const lessonIndex = course.lessons.findIndex(l => l.id === parseInt(lessonId));
  const lesson = course.lessons[lessonIndex];

  if (!lesson) return <div className="p-20 text-center">Pelajaran tidak ditemukan</div>;

  const prevLesson = course.lessons[lessonIndex - 1];
  const nextLesson = course.lessons[lessonIndex + 1];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to={`/course/${course.id}`} className="flex items-center text-gray-600 hover:text-blue-600">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-medium hidden sm:inline">Kembali ke Detail Kursus</span>
          </Link>
          <div className="font-bold text-gray-900 truncate px-4">{course.title}</div>
          <div className="w-10 sm:w-48"></div> {/* Spacer */}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="aspect-video bg-gray-900 flex items-center justify-center text-white">
            <div className="text-center">
              <PlayCircle className="h-20 w-20 mx-auto mb-4 opacity-50" />
              <p className="text-xl font-medium">Video Pelajaran {lesson.title}</p>
              <p className="text-sm opacity-60">Preview Placeholder</p>
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{lesson.title}</h1>
            <div className="prose prose-blue max-w-none text-gray-600 text-lg leading-relaxed">
              <p>{lesson.content}</p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          {prevLesson ? (
            <Link
              to={`/course/${course.id}/lesson/${prevLesson.id}`}
              className="flex items-center px-6 py-3 bg-white border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              <ChevronLeft className="h-5 w-5 mr-2" /> {prevLesson.title}
            </Link>
          ) : <div></div>}

          {nextLesson ? (
            <Link
              to={`/course/${course.id}/lesson/${nextLesson.id}`}
              className="flex items-center px-6 py-3 bg-blue-600 border border-blue-600 rounded-xl font-semibold text-white hover:bg-blue-700 transition"
            >
              {nextLesson.title} <ChevronRight className="h-5 w-5 ml-2" />
            </Link>
          ) : (
            <button className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition">
              Selesai Kursus
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
