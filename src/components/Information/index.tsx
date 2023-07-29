import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";
import {useEffect, useState} from "react";

const Information = ({ information }: Pick<DataProps, "information">) => {
    const now = new Date();
    const startYear = 2020;
    const nowYear = now.getFullYear();
    const [annual, setAnnual] = useState<number>(0);

    useEffect(() => {
        setAnnual(nowYear - startYear + 1);
    }, []);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="leading-[1.15]">
          안녕하세요,
          <br /> {annual}년차 개발자{" "}
          <span className="title font-semibold">{information.name}</span>
          입니다.
        </h1>
        <div className="flex gap-1">
          {information.contact.map((contact) => (
            <ContactItem
              key={contact.id}
              className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
              {...contact}
            >
              {contact.name}
            </ContactItem>
          ))}
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
