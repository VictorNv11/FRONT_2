const express = require('express')
const User = require("../models/userModel")
const mongoose = require ('mongoose')

const router = express.Router()


router.get(('/'),
            async (req, res)=>{
                const users = await User.find()
                return res.json({
                success: true,
                data: users
                })
            })

router.get(('/:id'),
            async(req, res)=>{
                const userId = req.params.id
                const users = await User.findById(userId)
                return res.json({
                    success: true,
                    data: users
                })
            })

router.post(('/'),
            async (req, res)=>{
                const newUser = await User.create(req.body)
                return res.json({
                    success: true,
                    data: newUser
                })
            })
router.put(('/:id'),
            async (req, res)=>{
                userId = req.params.id
                updUser = await User.findByIdAndUpdate(
                    userId,
                    req.body,
                    {
                        new:true
                    }
                )
                return res.json({
                    success:true,
                    data:updUser
                })
            })

router.delete(':/',
            async (req, res)=>{
                userId = req.params.id
                await User.findByIdAndDelete(userId)
                return res.json({
                    success:true ,
                    data:[]
                })
            })
module.exports = router