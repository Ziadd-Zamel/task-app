"use client";

import * as React from "react";
import { TableBuilder } from "@/components/common/table-builder";
import { TableCell, TableRow } from "@/components/ui/table";
import { TbTrashXFilled } from "react-icons/tb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { RiEditBoxFill } from "react-icons/ri";

type Employee = {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  avatar: string;
};

const employeeHeader = [
  { headName: "Employees Name", className: "" },
  { headName: "Email Address", className: "" },
  { headName: "Department", className: "" },
  { headName: "Role", className: "" },
  { headName: "Action", className: "text-center" },
];

// Fake employee data
const fakeEmployees: Employee[] = [
  {
    id: "1",
    name: "Lindsey Stroud",
    email: "lindsey.stroud@gmail.com",
    department: "Technology Department",
    role: "Head of Technology",
    avatar: "/avatars/lindsey.jpg",
  },
  {
    id: "2",
    name: "Sarah brown",
    email: "sarah.brown@gmail.com",
    department: "Technology Department",
    role: "Head of Technology",
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: "3",
    name: "Micheal Owen",
    email: "michael.owen@gmail.com",
    department: "Technology Department",
    role: "Head of Technology",
    avatar: "/avatars/michael.jpg",
  },
  {
    id: "4",
    name: "Mary Jane",
    email: "mary.jane@gmail.com",
    department: "Technology Department",
    role: "Head of Technology",
    avatar: "/avatars/mary.jpg",
  },
  {
    id: "5",
    name: "Peter dodle",
    email: "peter.doodle@gmail.com",
    department: "Technology Department",
    role: "Head of Technology",
    avatar: "/avatars/peter.jpg",
  },
];

export default function EmployeeTable() {
  const [selectedItems, setSelectedItems] = React.useState<Set<string>>(
    new Set()
  );

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(new Set(fakeEmployees.map((emp) => emp.id)));
    } else {
      setSelectedItems(new Set());
    }
  };

  const handleRowSelect = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedItems);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedItems(newSelected);
  };

  return (
    <TableBuilder<Employee>
      hasCheckbox={true}
      onSelectAll={handleSelectAll}
      selectedItems={selectedItems}
      tableHeadNames={employeeHeader}
      tableData={fakeEmployees}
      renderRow={(employee) => (
        <TableRow key={employee.id} className="hover:bg-gray-50">
          <TableCell className="w-12 px-6">
            <Checkbox
              checked={selectedItems.has(employee.id)}
              onCheckedChange={(checked) =>
                handleRowSelect(employee.id, checked as boolean)
              }
            />
          </TableCell>
          <TableCell className="px-6">
            <div className="flex items-center gap-3">
              <Avatar className="h-7 w-7">
                <AvatarImage src={employee.avatar} alt={employee.name} />
                <AvatarFallback>
                  {employee.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-gray-900">{employee.name}</span>
            </div>
          </TableCell>
          <TableCell className="px-6">
            <span className="text-gray-700">{employee.email}</span>
          </TableCell>
          <TableCell className="px-6">
            <span className="text-gray-700">{employee.department}</span>
          </TableCell>
          <TableCell className="px-6">
            <span className="text-gray-700">{employee.role}</span>
          </TableCell>
          <TableCell className="px-6">
            <div className="flex items-center justify-center gap-2">
              <RiEditBoxFill className="h-6 w-6 text-blue-500" />
              <TbTrashXFilled className="h-6 w-6 text-red-500" />
            </div>
          </TableCell>
        </TableRow>
      )}
    />
  );
}
