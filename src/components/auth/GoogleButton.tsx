export function GoogleButton() {
  return (
    <div className="flex w-full items-center justify-center rounded-full border border-slate-200 border-solid p-2 text-inherit no-underline px-10 cursor-pointer relative">
      <img src="/src/assets/images/google.svg" alt="Google icon" className="w-6 h-6 mr-2 absolute left-10" />
      <span className="text-black font-medium">
        Continue with google
      </span>
  </div>
  );
}
