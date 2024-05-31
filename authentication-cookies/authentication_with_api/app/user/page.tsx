import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

export default async function User(){
    const session =await getServerSession(NEXT_AUTH);;
    return <div>
        <Appbar/>
        user component 
          {JSON.stringify(session)}
    </div>
}