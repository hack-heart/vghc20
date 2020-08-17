import { Router } from 'express';
import createComment from './controllers/comment-controller';
import * as Companies from './controllers/company-controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

router.route('/companies')
  .get(Companies.fetchCompanies)
  .post(Companies.createCompany)
  .put(Companies.increaseTally);

router.route('/companies/:id')
  .get(Companies.fetchCompanyAndComments);

router.route('/comments/:name')
  .post(createComment);

export default router;
