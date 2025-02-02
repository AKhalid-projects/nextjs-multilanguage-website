import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const FeaturedCourses = ({ blok }) => {
  return (
    <div 
    {...storyblokEditable(blok)}
    className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="absolute inset-0">
      <div className="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        {blok.title}
          </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {blok.intro}
        </p>
      </div>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {blok.courses.map((course) => (
          <div key={course.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={course.content.image} alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <a href={`/courses/${course.slug}`} className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">{course.content.title}</p>
                  <p className="mt-3 text-base text-gray-500">{course.content.intro}</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
};

export default FeaturedCourses;
