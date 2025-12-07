import { Edit, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function TaskInviteCard() {
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0 mb-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900 font-poppins">
            Invite to office meet-up
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 font-poppins">
            Due date: <span className="text-gray-600">December 23, 2018</span>
          </p>
        </div>
        <span className="text-xs sm:text-sm text-gray-300 font-poppins self-start sm:self-auto">
          Call
        </span>
      </div>

      {/* User and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
            <AvatarImage src="" alt="Rebecca Moore" />
            <AvatarFallback className="bg-blue-100 text-blue-600 text-xs sm:text-sm font-poppins">
              RM
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-gray-500 font-poppins">
            Rebecca Moore
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="size-3 rounded-full bg-yellow-500 aspect-square" />
          <div className="size-3 rounded-full bg-green-300 aspect-square" />

          {/* Edit Button */}
          <Button
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full "
            aria-label="Edit"
            variant={"ghost"}
          >
            <Edit className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
          </Button>

          {/* Delete Button */}
          <Button
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full "
            aria-label="Delete"
            variant={"ghost"}
          >
            <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
          </Button>

          {/* Status Button */}
          <Button className="bg-[#F7685B] hover:bg-[#F7685B]/80 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-md font-poppins capitalize h-7 sm:h-8">
            Ended
          </Button>
        </div>
      </div>
    </div>
  );
}
