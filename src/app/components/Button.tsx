type Props = {
  content: string;
  isDisabled?: boolean
  type?: "submit" | "reset" | "button";
}

export default function Button({type, content, isDisabled}: Props) {
  return (
    <button type={type} 
            className="w-full py-2.5 px-5 text-white text-sm font-medium rounded-md bg-blue-700 
                      hover:bg-blue-800 
                      active:ring-blue-900 active:ring-6 active:bg-blue-400
                      disabled:text-gray-600 disabled:bg-gray-100"
            disabled={isDisabled}
    >
      {content}
    </button>
  );
}