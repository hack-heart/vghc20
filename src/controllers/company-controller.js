import Company from '../models/company-model';

export const addComment = (name, commentId) => {
  Company.findOneAndUpdate({ name }, { $push: { comments: commentId } })
    .catch((error) => {
      console.log(error);
    });
};

export const createCompany = (req, res) => {
  const company = new Company(req.body);
  company.save()
    .then(() => {
      res.json({ message: 'Company successfully created' });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const fetchCompanies = (req, res) => {
  Company.find({}).sort({ name: 1 })
    .then((companies) => {
      res.json(companies);
    })
    .catch(((error) => {
      res.status(500).json(error);
    }));
};

export const fetchCompanyAndComments = (req, res) => {
  Company.findById(req.params.id)
    .populate('comments')
    .then((company) => {
      res.json(company);
    })
    .catch(((error) => {
      res.status(500).json(error);
    }));
};

export const increaseTally = (req, res) => {
  req.body.forEach((company) => {
    Company.findOne({ name: company })
      .then((companyToUpdate) => {
        companyToUpdate.contacts += 1;
        companyToUpdate.save();
      });
  });
};
