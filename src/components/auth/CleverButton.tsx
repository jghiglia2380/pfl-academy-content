export function CleverButton() {
  return (
    <div className="flex w-full relative items-center justify-center rounded-full border border-slate-200 border-solid p-2 text-inherit no-underline px-10 cursor-pointer">
      <img src="/src/assets/images/clever.svg" alt="Google icon" className="w-6 h-6 mr-2 absolute left-10" />
      <span className="text-black font-medium">
        Continue with Clever
      </span>
  </div>
  );
}
