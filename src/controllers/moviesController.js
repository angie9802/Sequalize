const db = require('../database/models')
const Op = db.Sequelize.Op;
const moviesController = {
    list :(req,res,next) =>{
        const movies = db.Movies.findAll();
        movies.then(movies =>{
            res.render("moviesList", {
                movies : movies
            });
        }).catch(err =>{
            next(err);
        });  
    },
    detail : (req, res, next) => {
        const movies = db.Movies.findByPk(req.params.id);
        movies.then(movie => {
            res.render("moviesDetail",{
                movie : movie,
            });
        }).catch(err => {
            next(err);
        });
    },
    new : (req, res, next) => {
       const movies = db.Movies.findAll({
        order: [
            // Will escape title and validate DESC against a list of valid direction parameters
            ['release_date', 'DESC']
        ]
    });
        movies.then(movies=>{
            
            res.render("newestMovies",{
                movies : movies
            });
        }).catch(err =>{
            next(err);
        });
    },
    recomended :(req, res, next) =>{
        const movies = db.Movies.findAll({
            where: {
                rating: {[Op.gte]: 7}
            },
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['title', 'DESC']
            ]  ,
            limit : 5 
        });
        movies.then(movie=>{
            
            res.render("recommendedMovies",{
                movies : movie
            });
        }).catch(err =>{
            next(err);
        });
    }
}
module.exports = moviesController