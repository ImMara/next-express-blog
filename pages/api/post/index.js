import {createPost} from "../../../server/queries/post.queries";

export default async (req,res)=>{
        switch (req.method) {
            case 'POST' :
                try{
                    const body = req.body;
                    await createPost(body)
                    return res.json({
                        status: 'Ajouts done'
                    })
                }catch (e) {
                    res.json({e})
                }
                break;
            case 'DELETE':
                res.json({"delete":false})
                break;
            default:
                res.json({ 'POST':true , 'DELETE': false })
        }
}