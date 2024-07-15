export default function LoadingSpinner() {
  return (
    <div className="fixed  top-0 left-0 right-0 bottom-0 bg-zinc-600/[.75] z-10">
      <div className="absolute left-1/2 top-1/2 w-[48px] h-[48px] rounded-full 
                    border-t-[#0000b4bf] border-t-4 border-r-transparent border-r-4 
                    animate-spin"></div>
    </div>
  );
}