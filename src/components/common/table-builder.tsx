import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils/utils";

type Header = {
  headName: string;
  className?: string;
};

type TableBuilderProps<T> = {
  tableHeader?: React.ReactNode;
  tableHeadNames: Header[];
  tableData: T[];
  hasFooter?: boolean;
  renderRow: (_item: T, _index: number) => React.ReactNode;
  renderExtraRow?: () => React.ReactNode;
  headRowClasses?: string;
  tableHeadClassName?: string;
  emptyState?: React.ReactNode;
  totalPages?: number;
  totalItems?: number;
  hasCheckbox?: boolean;
  onSelectAll?: (_checked: boolean) => void;
  selectedItems?: Set<string | number>;
};

export function TableBuilder<T>({
  tableHeader,
  tableHeadNames,
  tableData,
  renderRow,
  renderExtraRow,
  headRowClasses,
  tableHeadClassName,
  emptyState,
  hasCheckbox = true,
  onSelectAll,
  selectedItems = new Set(),
}: TableBuilderProps<T>) {
  const allSelected =
    tableData.length > 0 && selectedItems.size === tableData.length;

  return (
    <div className="rounded-sm bg-white border border-gray-100 overflow-hidden scrollbar-hide">
      {tableHeader && (
        <div className="flex items-center font-semibold justify-between px-6 py-5 border-b border-gray-100">
          {tableHeader}
        </div>
      )}
      <Table>
        {/* Table header */}
        <TableHeader
          className={cn(
            "bg-[#EAEAEA] border-b-10 border-gray-100",
            tableHeadClassName
          )}
        >
          <TableRow
            className={cn("hover:bg-gray-100 h-[45px]", headRowClasses)}
          >
            {hasCheckbox && (
              <TableHead className="w-12 px-6 h-[45px]">
                <Checkbox
                  checked={allSelected}
                  onCheckedChange={(checked) =>
                    onSelectAll?.(checked as boolean)
                  }
                />
              </TableHead>
            )}
            {tableHeadNames.map((col, i) => (
              <TableHead
                key={i}
                className={cn(
                  "text-black font-medium text-sm h-[50px] px-6 font-poppins",
                  col.className
                )}
              >
                {col.headName}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody className="[&_tr]:border-b-10 [&_tr]:border-gray-100 [&_tr]:h-[45px]">
          {/* Show empty state if no data */}
          {tableData.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={tableHeadNames.length + (hasCheckbox ? 1 : 0)}
                className="h-[300px] text-center"
              >
                {emptyState || (
                  <div className="flex flex-col items-center justify-center py-12">
                    <p className="text-lg font-medium text-gray-900">
                      No data available
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      No records found
                    </p>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ) : (
            <>
              {/* Render dynamic data */}
              {tableData.map((item, index) => renderRow(item, index))}

              {/* Render the create new Entry in the table */}
              {renderExtraRow && renderExtraRow()}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
