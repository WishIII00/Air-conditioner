const { Orderlist } = require('../models')

module.exports = {
   
    async index(req, res) {
        try {
            const orderlists = await Orderlist.findAll()
            res.send(orderlists)
        } catch (err) {
            res.status(500).send({
                error: 'The blogs information was incorrect'
            })
        }
    },


    async create(req, res) {
        try {
            const orderlist = await Orderlist.create(req.body)
            res.send(orderlist.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create blog incorrect'
            })
        }
    },

 
    async put(req, res) {
        try {
            await Orderlist.update(req.body, {
                where: {
                    id: req.params.orderlistId
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
            const orderlist = await Orderlist.findOne({
                where: {
                    id: req.params.orderlistId
                }
            })

            if (!orderlist) {
                return res.status(403).send({
                    error: 'The blog information was incorrect'
                })
            }

            await orderlist.destroy()
            res.send(orderlist)
        } catch (err) {
            res.status(500).send({
                error: 'The blog information was incorrect'
            })
        }
    },

    
  async show (req, res) {
    try {
      const orderlist = await Orderlist.findByPk(req.params.orderlistId)
      res.send(orderlist)
    }
    catch (err) {
        res.status(500).send({
            error: 'The blog information was incorrect'
        })
    }
  }
}