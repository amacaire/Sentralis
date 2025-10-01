type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
  };
  
  export function Button({ variant = "primary", children, ...props }: ButtonProps) {
    const styles =
      variant === "primary"
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-gray-200 text-gray-800 hover:bg-gray-300";
  
    return (
      <button
        {...props}
        className={`px-4 py-2 rounded-md font-medium transition ${styles}`}
      >
        {children}
      </button>
    );
  }
  