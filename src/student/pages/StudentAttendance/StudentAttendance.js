import Card from "../../../shared/components/UI/Card";
const StudentAttendance = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-4">Courses</h1>
      <Card className="!p-0 !w-80">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-2 h-20 bg-[color:var(--primary-color)] p-4 text-white">
            <span>Software Engineering</span>
            <span>CS-330</span>
          </div>
          <div className="flex items-center w-full m-4 gap-2">
            <input
              type={"range"}
              max={100}
              min={0}
              value={70}
              className={"w-4/5 bg-[color:var(--primary-color)]"}
            />
            <span className="font-semibold tracking-wide ">70%</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StudentAttendance;
