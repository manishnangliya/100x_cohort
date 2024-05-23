
import { PrismaClient } from '@prisma/client'
import client from '@/db'


async function getUserDetails() {
  // bad practice
  // const response = await axios.get("http://localhost:3000/api/user")

  //good practice database call logic
  const user = await client.user.findFirst();
  return {
    name: "Hello",
    email: user?.email
    
  }
}
// async component only in server component in nextjs
export default async function Home() {
  // promise resolved after 5 second 
  // await new Promise(function(resolve){
  //   setTimeout(resolve, 5000);
  // });
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userData?.name}
          </div>
          Email: {userData?.email}
        </div>
      </div>
    </div>
  );
}
