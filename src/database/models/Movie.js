module.exports=(sequelize,dataTypes)=>{
    const modelName = 'Movies'
    const columns = {
        id:{
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: dataTypes.STRING,
            allowNull: false
        },
        rating:{
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        awards:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        release_date:{
            type: dataTypes.DATE,
            allowNull: false
        },
        length:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    const options ={
        tableName: 'movies',
        timestamps : false, // create At , update At
    }
    const Movie =  sequelize.define(modelName, columns, options);
    return Movie;
}