import { createJob } from "@/lib/prisma/jobs";

export async function GET() {
  return Response.json({ message: "GET method is here" });
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log(JSON.stringify(data));
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
