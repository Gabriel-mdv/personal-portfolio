interface TagProps {
  children: string;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="px-3 py-1 bg-[#1A2442] text-[#A9B4D0] text-sm rounded-full">
      {children}
    </span>
  );
}
