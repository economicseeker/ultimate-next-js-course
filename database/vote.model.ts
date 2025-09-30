import { model, models, Schema, Types } from "mongoose";

export interface IVote {
  id: Types.ObjectId;
  author: Types.ObjectId;
  answer: Types.ObjectId;
  type: "question" | "answer";
  voteType: "upvote" | "downvote";
}

const VoteSchema = new Schema<IVote>(
  {
    id: { type: Schema.Types.ObjectId, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    answer: { type: Schema.Types.ObjectId, ref: "Answer", required: true },
    type: { type: String, enum: ["question", "answer"], required: true },
    voteType: { type: String, enum: ["upvote", "downvote"], required: true },
  },
  { timestamps: true }
);

const Vote = models?.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;
