import Comment from '../models/comment-model';
import * as Company from './company-controller';

const createComment = (req, res) => {
  const comment = new Comment(req.body);
  comment.save()
    .then((savedComment) => {
      Company.addComment(req.params.name, savedComment.id);
    })
    .then(() => {
      res.json({ message: 'Comment successfully created' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export default createComment;
