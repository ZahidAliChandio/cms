const StudentResults = () => {
  const resultList = [
    {
      assesmenttype: "Assignment",
      totalMarks: 10,
      marksObtained: 8,
    },
    {
      assesmenttype: "Assignment",
      totalMarks: 10,
      marksObtained: 7,
    },
    {
      assesmenttype: "Assignment",
      totalMarks: 10,
      marksObtained: 8,
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Student Result</h2>
      <div className="flex flex-col gap-1 text-lg font-medium font-serif">
        <span>Course: BESE-26</span>
        <h3>Student Name: Jameel</h3>
        <span>CMS Id: 348882</span>
      </div>
      <table className="w-full text-center box-shadow mt-8">
        <thead>
          <tr className="bg-[color:var(--primary-color)] h-11 text-white">
            <th className="font-medium">Assesment Type</th>
            <th className="font-medium">Total Marks</th>
            <th className="font-medium">Marks Obtaind</th>
            <th className="font-medium">Percentage</th>
          </tr>
        </thead>
        <tbody className="">
          {resultList.map((student, index) => (
            <tr key={index} className="font-semibold h-12 border-b">
              <td>{student.assesmenttype}</td>
              <td>{student.totalMarks}</td>
              <td>{student.marksObtained}</td>
              <td className="tracking-wider">
                {(student.marksObtained / student.totalMarks) * 100 + "%"}
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentResults;
