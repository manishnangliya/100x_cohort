import { Hono } from 'hono'

const app = new Hono()

//middleware in couldflare
async function authMiddleware(c:any,next:any){
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have acces");
  }
}
// will run for every request .. used in admin dashboard
//error middleware
app.use(authMiddleware);


//getting input from user with middleware
app.post('/input', authMiddleware,async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})



app.get('/', (c) => {
  return c.text('Hello Hono!')
})
export default app
