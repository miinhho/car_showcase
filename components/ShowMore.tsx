'use client'

import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import Button from "./Button";

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10
    const newPathname = updateSearchParams("limit", `${newLimit}`)

    router.push(newPathname)
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          btnType="button"
          title="Show More"
          className="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore