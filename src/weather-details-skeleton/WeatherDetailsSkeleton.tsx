export default function WeatherDetailsSkeleton() {
  const labels = ["Feels Like", "Humidity", "Wind", "Precipitation"];
  return (
    <div className="weather_details">
      {labels.map((item) => (
        <div key={item} className="weather_details_card ">
          <h3 className="weather_details_card-label">{item}</h3>
          <span className="weather_details_card-value">-</span>
        </div>
      ))}
    </div>
  );
}
