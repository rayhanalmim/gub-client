import { Link } from "react-router-dom";
import { RiChatDeleteFill } from "react-icons/ri";
import useCourse from "../../Hook/useCourse";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Course = () => {
  const { course, refetch } = useCourse();
  const axiosPublic = useAxiosPublic();

  const hendleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/deleteCourse?id=${id}`);
        if (res.status == 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        } else {
          Swal.fire({
            title: "something went wrong!",
            text: "Your file has not been deleted.",
            icon: "error",
          });
        }
      }
    });
  };

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
          <div
            onClick={() => hendleDelete(cour?._id)}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <RiChatDeleteFill className="text-2xl"></RiChatDeleteFill>
          </div>
          <p className="text-white dark:text-gray-400"> {cour?.courseCode}</p>

          <div className="flex justify-between">
            <h3 className="font-semibold text-lg text-white mb-2 mt-2">
              <span className="text-white font-semibold tracking-wider">
                Section:
              </span>
              <span className="text-base"> {cour?.section}</span>
            </h3>
            <div className="flex items-center">
              <Link to={`/details/${cour?._id}`}>
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
