import Image from "next/image";

import { topCategoryStyles } from "@/constants";
import { cn } from "@/lib/utils";

import { Progress } from "./ui/progress";

const Category = ({ category }: CategoryProps) => {
    const {
        bg,
        circleBg,
        text: { main, count },
        progress: { bg: progressBg, indicator },
        icon,
    } = topCategoryStyles[category.name as keyof typeof topCategoryStyles] ||
    topCategoryStyles.default;

    return (
        <div className={cn("gap-[18px] flex p-4 rounded-xl", bg)}>
            <figure className={cn("flex items-center justify-center size-10 rounded-full", circleBg)}>
                <Image src={icon} width={20} height={20} alt={category.name} />
            </figure>
            <div className="flex w-full flex-1 flex-col gap-2">
                <div className="text-[14px] leading-[20px] flex justify-between">
                    <h2 className={cn("font-medium", main)}>{category.name}</h2>
                    <h3 className={cn("font-normal", count)}>{category.count}</h3>
                </div>
                <Progress
                    value={(category.count / category.totalCount) * 100}
                    className={cn("text-[18px] leading-[22px] font-semibold text-gray-900 w-full", progressBg)}
                    indicatorClassName={cn("text-[18px] leading-[22px] font-semibold text-gray-900 w-full", indicator)}
                />
            </div>
        </div>
    );
};

export default Category;