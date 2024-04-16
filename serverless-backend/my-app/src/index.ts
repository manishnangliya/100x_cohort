

export interface Env {
	
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext){
		return  Response.json({
			messsage:'New message'
		});
	},
};
