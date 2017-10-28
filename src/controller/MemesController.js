const MemeModel = require('../models/MemeModel');

export function list(req, res) {
  MemeModel.find({}).exec()
  .then(function(memes) {
    return res.json(memes);
  });
}

export function show(req, res) {
  MemeModel.findById(req.params.id).exec()
  .then(function(meme) {
    return res.json(meme);
  });
}

export function create(req, res) {
  const meme = new MemeModel({
    name: req.body.name,
    url: req.body.url,
    width: req.body.width
    height: req.body.height
  });
  meme.save()
  .then(function(meme) {
    return res.json(meme);
  });
}

export function remove(req, res) {
  MemeModel.findByIdAndRemove(req.params.id).exec()
  .then(function(meme) {
    return res.json(meme);
  });
}
