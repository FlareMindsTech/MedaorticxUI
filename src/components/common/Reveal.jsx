export const Reveal = ({
  children,
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  );
};
