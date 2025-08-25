import { rooms } from "../../../../data/hotels";

export async function GET(){
    return Response.json(rooms)
}