// const postModel = require("./../models/post");
import postModel from "../models/post";

export class PostService {
    async fetchAll() {
        return await postModel
            .find({})
            // .sort("-createdAt")koleg
            .exec()
            .then((doc: any) => {
                return doc;
            })
            .catch((error: any) => {
                console.log('error', error);
            })

    }

}

// class PostService {
//     async pagination(page: number, perPage: number, params: {} | null) {
//         if (params) {
//             console.log("params", params);
//         }
//         return (
//             postModel
//                 .find(params)
//                 // .select("createdAt _id title description")
//                 .populate("user")
//                 .limit(perPage)
//                 .skip(perPage * page)
//                 .sort({
//                     _id: "desc",
//                 })
//                 // .sort("-createdAt")koleg
//                 .exec()
//                 .then((doc) => {
//                     return doc;
//                 })
//                 .catch((error) => {
//                     res.status(500).send({
//                         error: {
//                             message: "Error while fetching data from db",
//                             reason: error,
//                         },
//                     });
//                 })
//         );
//     }
//     async fetchAll() {
//         return (
//             postModel
//                 // .find(params)
//                 .select("createdAt _id title description")
//                 // .populate("user")
//                 .sort({
//                     _id: "desc",
//                 })
//                 // .sort("-createdAt")koleg
//                 .exec()
//                 .then((doc) => {
//                     return doc;
//                 })
//                 .catch((error) => {
//                     res.status(500).send({
//                         error: {
//                             message: "Error while fetching data from db",
//                             reason: error,
//                         },
//                     });
//                 })
//         );
//     }

//     async findOneById(id) {
//         const post = await postModel
//             .findById(id)
//             .populate("user")
//             .then((doc) => {
//                 return doc;
//             })
//             .catch((error) => {
//                 res.status(500).send({
//                     error: {
//                         message: "Error while fetching data from db",
//                         reason: error,
//                     },
//                 });
//             });

//         delete post.user.password;
//         return post;
//     }
//     async updateVote(params) {
//         const { type, postId } = params;
//         const post = await this.findOneById(postId);
//         const voteNumber = type == "up" ? post.voteNumber + 1 : post.voteNumber - 1;

//         postModel
//             .updateOne({ _id: postId }, { $set: { voteNumber: voteNumber } })
//             .exec()
//             .then((result) => {
//                 console.log("updatevvvvvvvvvvv", result);
//             })
//             .catch((error) => {
//                 res.status(500).send({
//                     error: {
//                         message: "Error update vote",
//                         reason: error,
//                     },
//                 });
//             });
//     }
// }
// export PostService;
// module.exports = PostService;