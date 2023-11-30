const express = require('express')
const Ticket = require("../models/ticketmodel")
const mongoose = require ('mongoose')

const router = express.Router()


router.get(('/'),
            async (req, res)=>{
                const tickets = await Ticket.find()
                return res.json({
                success: true,
                data: tickets
                })
            })

router.get(('/:id'),
            async(req, res)=>{
                const ticketId = req.params.id
                const tickets = await Ticket.findById(ticketId)
                return res.json({
                    success: true,
                    data: tickets
                })
            })

router.post(('/'),
            async (req, res)=>{
                const newTicket = await Ticket.create(req.body)
                return res.json({
                    success: true,
                    data: newTicket
                })
            })
router.put(('/:id'),
            async (req, res)=>{
                ticketId = req.params.id
                upTicket = await Ticket.findByIdAndUpdate(
                    ticketId,
                    req.body,
                    {
                        new:true
                    }
                )
                return res.json({
                    success:true,
                    data:updTicket
                })
            })

router.delete(':/',
            async (req, res)=>{
                ticketId = req.params.id
                await Ticket.findByIdAndDelete(ticketId)
                return res.json({
                    success:true ,
                    data:[]
                })
            })
module.exports = router