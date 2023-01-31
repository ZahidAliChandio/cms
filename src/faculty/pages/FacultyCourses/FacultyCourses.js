import Card from "../../../shared/components/UI/Card";

const FacultyCourses = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-4">Courses</h1>
      <Card className="!p-0 !w-80">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-2 h-20 bg-[color:var(--primary-color)] p-4 text-white">
            <span>Software Engineering</span>
            <span>CS-330</span>
          </div>
          <span className="px-3 py-2">Credits: 3.0</span>
        </div>
      </Card>
    </div>
  );
};

export default FacultyCourses;
