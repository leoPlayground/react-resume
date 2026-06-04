import ContactItem from "./ContactItem";

const Footer = ({
  contact,
  name,
}: {
  contact: { id: number; name: string; href: string; isEmail?: boolean }[];
  name: string;
}) => {
  return (
    <footer className="flex h-32 flex-col items-center justify-center gap-3 bg-[#111827] text-xs text-[#9ca3af]">
      <div className="flex flex-wrap justify-center gap-1">
        {contact.map((contact) => (
          <ContactItem
            key={contact.id}
            className="rounded-full px-3 py-1 text-xs text-[#e5e7eb] transition hover:bg-white/10 hover:text-white"
            showLogo={false}
            {...contact}
          >
            {contact.name}
          </ContactItem>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <span className="whitespace-pre-wrap text-center">{`Copyright 2023. ${name} All rights reserved.`}</span>
        {/*<a target="_blank" rel="noreferrer" href="https://github.com/sjoleee/very-simple-portfolio">*/}
        {/*  Powered by very-simple-portfolio*/}
        {/*</a>*/}
      </div>
    </footer>
  );
};

export default Footer;
