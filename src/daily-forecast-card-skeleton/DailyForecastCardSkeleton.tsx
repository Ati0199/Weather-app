import "./DailyForecastCardSkeleton.scss";

export default function DailyForecastCardSkeleton() {
  return (
    <>
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="daily_forecast_card_skeleton pulse"></div>
      ))}
    </>
  );
}
