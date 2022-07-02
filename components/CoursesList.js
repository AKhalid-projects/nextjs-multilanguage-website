import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const CoursesList = ({ blok }) => {
  return (
    <ul
      {...storyblokEditable(blok)}
      className="mx-auto w-full flex flex-col items-center"
    >
      {blok.courses.map((course) => {
        return (
          <li
            key={course.slug}
            className="max-w-4xl w-full px-10 my-4 py-6 rounded-lg shadow-md bg-white"
          >
            <div className="mt-2">
              <Link href={`courses/${course.slug}`}>
                <a className="text-2xl text-gray-700 font-bold hover:text-gray-600">
                  
                  {course.content.title}
                </a>
              </Link>

              <p className="mt-2 text-gray-600">
                
                {course.content.intro}
                </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <Link href={`courses/${course.slug}`}>
                <a className="text-blue-600 hover:underline">Learn more</a>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CoursesList;
