const ActivityItem = ({
  name,
  period,
  description,
}: {
  name: string;
  period: string[];
  description: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3>{name}</h3>
          <span className="period">{`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
        </div>
        <span className="whitespace-pre-wrap">{`${description}`}</span>
      </div>
    </div>
  );
};

export default ActivityItem;