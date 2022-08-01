import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Comment } from "../../typings";

const commentQuery = groq`*[_type == 'comment' && references(*[_type == 'tweet' && _id =='0517ac81-fe11-4345-b008-d4e5869abd00']._id)] {
    _id,
    ...
  } | order(_createdAt desc)`;

type Data = Comment[];

export default async function handler(
    req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { tweetId } = req.query;
  
  const comments: Comment[] = await sanityClient.fetch(commentQuery, {
      tweetId, // this should ne {tweetId: tweetId} (since key and value are same we can leave it like so)
  })

  console.log('Comments >>>', comments);
  res.status(200).json(comments);
}
