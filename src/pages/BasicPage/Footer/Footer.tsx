import { Logotype } from "../../../shared/ui/Logotype/Logotype";

const Footer = () => {
  return (
    <footer className="h-[80px] bg-footer w-full flex flex-col justify-center items-center">
      <Logotype />
      <p className="text-footer-text font-footer-text">
        Copyright © 2024 My Tutor, Inc.
      </p>
    </footer>
  );
};

export { Footer };
