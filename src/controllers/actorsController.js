const db = require('../database/models')
const actorsController = {
    list :(req,res,next) =>{
        const actors = db.Actors.findAll();
        actors.then(actors =>{
            res.render("actorsList", {
                actors : actors
            });
        }).catch(err =>{
            next(err);
        });  
    },
    detail : (req, res, next) => {
        const actors =  db.Actors.findByPk(req.params.id);
        actors.then(actor => {
            res.render("actorsDetail",{
                actor : actor,
            });
        }).catch(err => {
            next(err);
        });
    },
}
module.exports = actorsController