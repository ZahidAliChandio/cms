import toast from "react-hot-toast";
import http from "../../../utils/http";
import axios from "axios";

const ResultDetails = () => {
  const studentsList = [
    {
      id: 33434,
      name: "Shan",
      course: "BESE-26",
    },
    {
      id: 83344,
      name: "Saleem",
      course: "BESE-26",
    },
    {
      id: 44342,
      name: "Naeem",
      course: "BESE-26",
    },
  ];

  const getResults = () => {
    axios
      .get(`${process.env.REACT_APP_ATLAS_URI}/results/`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          console.log(response.results);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submited");
  };

  return (
    <div id="tablediv">
      <h2 className="text-2xl my-4 font-semibold">BESE-26</h2>
      <form onSubmit={onSubmitHandler}>
        <table className="w-full text-center border-separate border-spacing-4">
          <thead>
            <tr>
              <th>S.No</th>
              <th>CMS ID</th>
              <th>Name</th>
              <th>Total (Lab)</th>
              <th>Obtained (Lab)</th>
              <th>Total (Class)</th>
              <th>Obtained (Class)</th>
            </tr>
          </thead>
          <tbody>
            {studentsList.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>25</td>
                <td>
                  <input
                    type={"text"}
                    defaultValue="20"
                    className="w-8 text-center outline-none border border-gray-400"
                    required
                  />
                </td>
                <td>75</td>
                <td>
                  <input
                    type={"text"}
                    defaultValue="68"
                    className="w-8 text-center outline-none border border-gray-400"
                    required
                  />
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
        <div className="flex gap-4 mt-12 font-semibold float-right mr-20">
          <button
            className="p-2 bg-blue-600 text-white w-20"
            value="Edit"
            type="submit"
            onclick="update()"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResultDetails;
