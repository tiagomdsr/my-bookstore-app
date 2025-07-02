import { BookOpen } from "lucide-react"

type TypeLogo = {
    size: "small" | "medium" | "big";
    color: "black" | "white";
}

const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    big: "w-8 h-8",
}
export default function Logo({ color, size }: TypeLogo) {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
            <BookOpen className={`text-${color} ${sizeClasses[size]}`} />
        </div>
    );

}