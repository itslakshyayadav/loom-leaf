import React from "react";

type LoaderButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  spinnerSize?: number;
};

const LoaderButton: React.FC<LoaderButtonProps> = ({
  loading = false,
  spinnerSize = 20,
  disabled,
  children,
  className = "",
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={`relative inline-flex items-center justify-center px-4 py-2 w-full bg-white text-black hover:bg-zinc-100 transition-all duration-200 disabled:opacity-100 disabled:cursor-not-allowed ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span
            className="animate-spin rounded-full border-2 border-black border-t-transparent"
            style={{ width: spinnerSize, height: spinnerSize }}
          />
        </span>
      )}

      {/* Keep text always in DOM for consistent size, just hide it visually */}
      <span className={loading ? "invisible" : "visible"}>{children}</span>
    </button>
  );
};

export default LoaderButton;
