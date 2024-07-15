type Props = {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <div className="p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      {message}
    </div>
  );
}