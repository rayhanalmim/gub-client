import { Link } from "react-router-dom";
import useCourse from "../../Hook/useCourse";

const Course = () => {
  const { course, isLoading, refetch } = useCourse();

  return (
    <div className="grid grid-cols-3 gap-3">
      {course?.map((cour, idx) => (
        <div
          key={idx}
          className="p-4  border rounded-lg md:p-8 dark:bg-gray-800 relative"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <h2 className="text-3xl font-extrabold pb-1 tracking-widest text-white">
            {cour?.courseName}
          </h2>
          <p className="text-white dark:text-gray-400"> {cour?.courseCode}</p>

          <div className="flex justify-between">
            <h3 className="font-semibold text-lg text-white mb-2 mt-2">
              <span className="text-white font-semibold tracking-wider">
                Section:
              </span>
              {cour?.section}
            </h3>
            <div className="flex items-center">
              <Link to={`/details/`}>
                <button
                  href="#"
                  className="inline-flex items-center font-medium text-blue-600 hover:text-sky-600 dark:text-blue-500 dark:hover:text-blue-700"
                >
                  view details
                  <svg
                    className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="currentColor" d="m1 9 4-4-4-4" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
