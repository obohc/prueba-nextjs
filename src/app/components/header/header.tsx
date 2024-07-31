import Logo from "./logo";


type Props = {
  logoAlignment: "start" | "center" | "end";
}

export default function Header( { logoAlignment }: Props) {
  return (
    <div className={`w-full flex justify-${logoAlignment}`}>
      <Logo/>
    </div>
  );
}