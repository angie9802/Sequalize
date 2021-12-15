const db = require('../database/models')
const genresController = {
    list :(req,res,next) =>{
        const genres = db.Genres.findAll();
        genres.then(genre =>{
            res.render("genresList", {
                genres : genre
            });
        }).catch(err =>{
            next(err);
        });  
    },
    detail : (req, res, next) => {
        const genres =  db.Genres.findByPk(req.params.id);
        genres.then(genre => {
            res.render("genresDetail",{
                genre : genre,
            });
        }).catch(err => {
            next(err);
        });
    },
}
module.exports = genresController