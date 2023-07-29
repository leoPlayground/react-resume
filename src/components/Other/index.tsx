import SectionTitle from "../SectionTitle";
import OtherItem from "./OtherItem";

import { DataProps } from "@/types";

const Other = ({ other }: Pick<DataProps, "other">) => {
  return (
    <>
      <div>
        <SectionTitle>Others</SectionTitle>
        <div className="flex flex-col gap-24">
          {[...other]
            .reverse()
            .map((other) => (
              <OtherItem key={other.id} {...other} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Other;
