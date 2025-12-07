import { Button } from "@/components/ui/button";
import EmployeeTable from "./_components/employee-table";

export default function Page() {
  return (
    <div className="box-container pt-20">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-12">
        <div>
          <h3 className="font-poppins text-xl font-medium">Employees</h3>
          <p className="font-poppins text-sm mt-2 font-light">
            Here is a list of all employees
          </p>
        </div>

        <Button className="w-fit self-start  sm:w-auto py-6 px-10 bg-[#007EF2] hover:bg-[#007EF2]/80 font-poppins font-medium text-sm rounded-sm">
          Add employee
        </Button>
      </div>
      <EmployeeTable />
    </div>
  );
}
