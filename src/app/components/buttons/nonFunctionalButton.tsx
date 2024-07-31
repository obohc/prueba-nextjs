import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
}

export default function NonFunctionalButton({children}: Props) {
  return (
    <button type="button" className="w-full py-2.5 px-5 text-white text-sm font-medium rounded-md bg-blue-700">
      {children}
    </button>
  );
}