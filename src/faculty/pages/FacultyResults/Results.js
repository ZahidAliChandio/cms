import Card from "../../../shared/components/UI/Card";
import { Link } from "react-router-dom";

const Results = () => {
  const studentsList = [
    {
      id: 33434,
      name: "Junaid",
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
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
                <td>
                  <button
                    className="p-2 bg-blue-600 text-white w-20"
                    value="Edit"
                    type="submit"
                    onclick="update()"
                  >
                    Save
                  </button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Results;
