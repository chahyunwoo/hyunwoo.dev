interface IProps {
  children: React.ReactNode;
}

export default function Container({ children }: IProps) {
  return (
    <div className="w-full h-full max-w-screen-lg mx-auto">{children}</div>
  );
}
