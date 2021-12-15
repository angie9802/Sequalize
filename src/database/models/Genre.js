module.exports=(sequelize,dataTypes)=>{
    const modelName= 'Genres'
    const columns={
        id:{
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        ranking:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        active:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
    }
    const options = {
        tableName: 'genres',
        timestamps: false,
    }
    const Genre = sequelize.define(modelName, columns,options)

    return Genre;
}