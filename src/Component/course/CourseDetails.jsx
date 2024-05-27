import { useParams } from "react-router-dom";
import useGetSingleCourse from "../../Hook/useGetSingleCourse";

const CourseDetails = () => {
  const { id } = useParams();
  const { singleCourse, isLoading, refetch } = useGetSingleCourse(id);
  const { courseCode, courseName, enrolled_student, section, totalClass } =
    singleCourse;

  return (
    <div>
      <div className=" p-4 bg-slate-100 rounded-lg md:p-8 dark:bg-gray-800">
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Course Name : {courseName}
        </h2>
        <div className="flex gap-3 justify-center">
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            Course code : {courseCode}
          </p>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            Course section : {section}
          </p>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            Total nunber of Class : {totalClass}
          </p>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            Total student : {enrolled_student?.length}
          </p>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Enrolled Students
                </th>
                <th scope="col" className="px-6 py-3">
                  Student ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Attendance
                </th>
              </tr>
            </thead>
            <tbody>
              {enrolled_student?.map((student, idx) => (
                <tr
                  key={idx}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {student?.name}
                  </th>
                  <td className="px-6 py-4">{student?.studentId}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                      Active
                    </div>
                  </td>
                  <td className="px-6 py-4">100%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
