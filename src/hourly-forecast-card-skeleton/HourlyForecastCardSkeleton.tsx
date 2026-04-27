export default function HourlyForecastCardSkeleton() {
  return (
    <>
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="hourly_forecast_card pulse"></div>
      ))}
    </>
  );
}
