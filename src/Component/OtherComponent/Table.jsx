import { useState, useEffect } from "react";
import useStudents from "../../Hook/useStudents";

const Table = () => {
  const { students, isLoading, refetch } = useStudents();
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showTable, setShowTable] = useState(false); // State to track view
  const [searchQuery, setSearchQuery] = useState(""); // State to track the search query

  // Update selectAll state based on selectedItems array
  useEffect(() => {
    setSelectAll(selectedItems.length === students.length);
  }, [selectedItems, students]);

  // Function to handle the click event of the checkbox in the header
  const handleSelectAll = () => {
    if (!selectAll) {
      setSelectedItems(students.map((student) => student._id));
    } else {
      setSelectedItems([]);
    }
    setSelectAll(!selectAll);
  };

  // Function to handle the click event of a checkbox in the table body
  const handleCheckboxChange = (studentId) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(studentId)
        ? prevSelectedItems.filter((item) => item !== studentId)
        : [...prevSelectedItems, studentId]
    );
  };

  // Function to handle the Next button click
  const handleNextClick = () => {
    setShowTable(true);
  };

  // Function to handle the search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // Ensure students is an array before filtering
  const filteredStudents = Array.isArray(students)
    ? students.filter((student) =>
        student.studentId.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="">
      <div className="relative overflow-y-hidden shadow-md sm:rounded-lg bg-slate-100">
        <div className="flex items-center p-6 justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 dark:bg-gray-900">
          <div className="flex">
            <div
              className={`py-3 pl-6 pr-10 ${
                showTable
                  ? "bg-gray-400 text-gray-700"
                  : "bg-green-600 text-white"
              } rounded-l-lg`}
              style={{
                clipPath: "polygon(0 0, 100% 0%, 81% 100%, 0% 100%)",
                marginRight: "-10px",
              }}
            >
              <h3 className="font-bold text-3xl">Add Details</h3>
            </div>
            <div
              className={`py-3 pl-8 pr-6 ${
                showTable
                  ? "bg-green-600 text-white"
                  : "bg-gray-400 text-gray-700"
              } rounded-r-lg`}
              style={{
                clipPath: "polygon(17% 0, 100% 0, 100% 100%, 0% 100%)",
                marginLeft: "-30px",
              }}
            >
              <h3 className="font-bold text-3xl">Select Student</h3>
            </div>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by student ID"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Conditionally render the content based on showTable state */}
        {showTable ? (
          <div className="h-96 overflow-y-auto pr-10 overflow-x-hidden w-full">
            {" "}
            {/* Set max height and overflow for the table container */}
            <table className="w-full mx-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onChange={handleSelectAll}
                        checked={selectAll}
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Student ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Current Semester
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {filteredStudents.map((student, idx) => (
                  <tr
                    key={idx}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id={`checkbox-table-search-${idx}`}
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          checked={selectedItems.includes(student._id)}
                          onChange={() => handleCheckboxChange(student._id)}
                        />
                        <label
                          htmlFor={`checkbox-table-search-${idx}`}
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src="/docs/images/people/profile-picture-1.jpg"
                        alt="Jese image"
                      />
                      <div className="ps-3">
                        <div className="text-base font-semibold">
                          {student.name}
                        </div>
                        <div className="font-normal text-gray-500">
                          {student.studentId}@student.green.edu.bd
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{student.studentId}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                        Active
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit user
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6">
            {" "}
            {/* This div is displayed by default */}
            {/* Content for the Add Details section */}
            <p>Please click "Next" to view student data.</p>
          </div>
        )}

        <div className="flex justify-end py-5 pr-5">
          {!showTable && (
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleNextClick}
            >
              Next
            </button>
          )}
          {showTable && (
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5 me-2 mb-2"
              //   onClick={handleNextClick}
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
