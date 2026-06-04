import { ReactNode } from "react";

const ContactItem = ({
  children,
  isEmail,
  href,
  className,
  showLogo = true,
}: {
  children: ReactNode;
  href: string;
  isEmail?: boolean;
  className?: string;
  showLogo?: boolean;
}) => {
  const isMedimeetLogo = showLogo && children === "Medimeet";

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={isEmail ? `mailto:${href}` : href}
      className="contact-link"
    >
      <span
        className={`${className ?? "px-1 text-xs text-[#30403b]"} ${
          isMedimeetLogo ? "contact-label--logo" : ""
        }`}
      >
        {isMedimeetLogo ? (
          <>
            <img
              className="contact-logo contact-logo--medimeet"
              src="/images/portfolio/medimeet-logo.png"
              alt="Medimeet"
            />
            <span className="sr-only">Medimeet</span>
          </>
        ) : (
          children
        )}
      </span>
    </a>
  );
};

export default ContactItem;
