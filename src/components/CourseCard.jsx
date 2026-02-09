import React from 'react';
import { Clock, Book, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
      <img
        src={course.image}
        alt={course.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
            {course.category}
          </span>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-600">4.8</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <Book className="h-4 w-4 mr-1" />
            {course.lessons.length} Pelajaran
          </div>
        </div>
        <Link
          to={`/course/${course.id}`}
          className="block text-center bg-gray-50 text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
