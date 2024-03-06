import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/AxiosPublic";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SectionTitle from "../../Components/SectionTitle";

const UpdateAssignment = () => {
//   const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [selectedLevel, setSelectedLevel] = useState([]); //state for level selection
  const [dueDate, setDueDate] = useState(new Date()); // State for due date

  const handleLevelChange = (selectedOptions) => {
    setSelectedLevel(selectedOptions);
  };

  // Level
  const LevelOptions = [
    { value: "Easy", label: "Easy" },
    { value: "Moderate", label: "Moderate" },
    { value: "Advance", label: "Advance" },
  ];

  const handleAddAssignment = async (event) => {
    event.preventDefault();

    const form = event.target;

    // Continue with Assignment submission
    const title = form.title.value;
    const description = form.description.value;
    const Levels = selectedLevel.value || "Not Defined";
    const image = form.image.value;

    const updatedAssignment = {
      title,
      image,
      description,
      Levels,
      dueDate: dueDate.toISOString(), // Convert dueDate to ISO string format
    };

    console.log(updatedAssignment);

    // axiosPublic
    //   .patch(`/assignment/${id}`, updatedAssignment)
    //   .then((res) => {
    //     if (res.data.insertedId) {
    //       form.reset();
    //       toast.success("Assignment updatinged successfully");
    //     } else {
    //       toast.error("Error updatinging Assignment");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     toast.error("Error updatinging Assignment");
    //   });
  };
  return  <div>
    <Toaster />
  <section className="bg-base-200 dark:bg-gray-900 pt-14 container mx-auto rounded-xl py-3">
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-6">
      <h2 className="mb-4 text-4xl text-slate-800 font-bold  dark:text-white py-2"></h2>
      <SectionTitle title="Add a new Assignment" />

      <form onSubmit={handleAddAssignment} className="pt-5">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Title */}
          <div className="sm:col-span-2">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Assignment Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type Assignment name"
              required
            />
          </div>
          {/* Image */}
          <div className="sm:col-span-2">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Assignment thumbnail Image URL
            </label>
            <input
              type="url"
              name="image"
              id="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter Img URL of your Assignment"
              required
            />
          </div>
            {/* Description */}
          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Assignment Description
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type Assignment description here"
              required
            />
          </div>
          {/* react select for level selection */}
          <div className="sm:col-span-2">
            <label
              htmlFor="Levels"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Level
            </label>
            <Select
              id="Levels"
              name="Levels"
              options={LevelOptions}
              closeMenuOnSelect={false}
              value={selectedLevel}
              onChange={handleLevelChange}
            />
          </div>
          {/* Date Picker for Due Date */}
          <div className="sm:col-span-2">
            <label
              htmlFor="dueDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Due Date
            </label>
            <DatePicker
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholderText="Select due date"
              required
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <input
            type="submit"
            className="font-medium mt-4 w-full  text-center bg-blue-950 text-white hover:bg-blue-900 text-base  px-5 py-2.5 rounded-lg focus:ring-4"
            value="Update Assignment"
          />
        </div>
      </form>
    </div>
  </section>
</div>
};

export default UpdateAssignment;
