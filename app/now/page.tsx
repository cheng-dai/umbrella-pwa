import GetWeather from "@/app/ui/components/GetWeather";

export default function Now() {
  return (
    <div>
      Now
      <GetWeather mode="weather" />
    </div>
  );
}
