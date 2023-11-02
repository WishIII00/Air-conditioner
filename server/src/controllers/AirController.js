const { Air } = require('../models')

module.exports = {
   
    async index(req, res) {
        try {
            const airs = await Air.findAll()
            res.send(airs)
        } catch (err) {
            res.status(500).send({
                error: 'The blogs information was incorrect'
            })
        }
    },


    async create(req, res) {
        try {
            const air = await Air.create(req.body)
            res.send(air.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create blog incorrect'
            })
        }
    },

 
    async put(req, res) {
        try {
            await Air.update(req.body, {
                where: {
                    id: req.params.airId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update blog incorrect'
            })
        }
    },

   
    async remove(req, res) {
        try {
            const air = await Air.findOne({
                where: {
                    id: req.params.airId
                }
            })

            if (!air) {
                return res.status(403).send({
                    error: 'The blog information was incorrect'
                })
            }

            await air.destroy()
            res.send(air)
        } catch (err) {
            res.status(500).send({
                error: 'The blog information was incorrect'
            })
        }
    },

    
  async show (req, res) {
    try {
      const air = await Air.findByPk(req.params.airId)
      res.send(air)
    }
    catch (err) {
        res.status(500).send({
            error: 'The blog information was incorrect'
        })
    }
  }
}