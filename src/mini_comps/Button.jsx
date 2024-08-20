export default function AppButton({ children, ...props }) {
  return (
    <>
      <button
        {...props}
        className="bg-blue-800 mt-3 hover:bg-blue-700 hover:shadow-md px-3 rounded-md hover:"
      >
        {children}
      </button>
    </>
  );
}
