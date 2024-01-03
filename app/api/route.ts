export async function POST(req: Request) {
  const reqObj = await req.json();

  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/${reqObj.mode}?lat=${reqObj.latitude}&lon=${reqObj.longitude}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API}`
  );
  const returned = await result.json();
  return Response.json(returned);
}

export async function GET(req: Request) {
  return Response.json("test");
}
