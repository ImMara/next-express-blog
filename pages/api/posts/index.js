import {findAllPost} from "../../../server/queries/post.queries";

export default async (req,res,next) =>{
        try{
           const post = await findAllPost();
           console.log(post)
           res.json( {post} )
        }catch (e) {
           console.error(e)
        }
}