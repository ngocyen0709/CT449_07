// const mongoose = require("mongoose");
// const {BadRequestError} = require("../errors");
// const Contact = require("../models/contact.model");
// const handlePromise = require("../helpers/promise.helper");

exports.create =  (req, res) => {
    res.send({ message: "create handler" });
    };
    
    exports.findAll =  (req, res) => {
    res.send({ message: "findAll hander" });
    };
    
    exports.findOne =  (req, res) => {
    res.send({ message: "findOne hander" });
    };
    
    exports.update =  (req, res) => {
    res.send({ message: "update hander" });
    };
    
    exports.delete =  (req, res) => {
    res.send({ message: "delete hander" });
    };
    
    exports.deleteAll =  (req, res) => {
    res.send({ message: "deleteAll hander" });
    };
    exports.findAllFavorite =(req, res) => {
        res.send({message: "finAllFavorite handler"})
    };
// exports.create = async (req, res, next) => {
//     if(!req.body.name) {
//         return next(new BadRequestError(400, "Name can bot ve empty"));
//     }

//     const contact = new Contact({
//         name: req.body.name,
//         email: req.body.email,
//         address: req.body.address,
//         phone: req.body.phone,
//         favorite: req.body.favorite === true,
//     });

//     const [error, document] = await handlePromise(contact.save());

//     if(error) {
//         return next(new BadRequestError(500, "An error occurred while creating the contact"));
//     }
//     return res.send(document);
// };

// //--------------------------------hander filAll--------------------------------
// //Cài đặt handler findAll:
// exports.findAll = async (req, res, next) => {
//     const condition = {  };
//         const { name } = req.query;
//         if (name) {
//             condition.name = { $regex: new RegExp(name), $options: "i" };
//         }

//         try{
//             const documents = await Contact.find(condition);
//             return res.send(documents);
//         }
//         catch(error){
//             return next
//                 new BadRequestError(
//                     500,
//                     "An error occurred while retrieving contacts"
//                 )
//         };
// };
// //-----------------hander findOne---------------------------
// //Cài đặt handler findOne:
// exports.findOne = async (req, res, next) => {
//     const { id } = req.params;
//     const condition = {
//         _id: id && mongoose.isValidObjectId(id) ? id : null,
//     };

//     try{
//         const document = await Contact.findOne(condition);
//         if(!document){
//             return next(new BadRequestError(404, "Contact not found"));
//         }
//         return res.send(document);
//     }catch(error){
//         return next(
//             new BadRequestError(
//                 500,
//                 `Error retrieving contact with id=$(req.params.id)`
//             )
//         );
//     }
    
// };
// //---------------------------------------hander update---------------------------------
// //Cài đặt handler update:
// exports.update = async (req, res, next) => {
//     if (Object.keys(req.body).length === 0) {
//         return next(new BadRequestError(404, 
//             "Data to update can not empty"));
//     }
//     const { id } = req.params;
//     const condition = {
//         _id: id && mongoose.isValidObjectId(id) ? id : null,
//     };

//     try{
//         const document = await Contact.findOneAndUpdate(condition,req.body,{
//             new: true,
//         })
//         if(!document){
//             return next(new BadRequestError(404, "Contact not found"));
//         }
//         return res.send({ message: "Contact was updated successfully"});
//     }catch(error){
//         return next(
//             new BadRequestError(500,
//                 `Error updating contact with id=${req.params.id}`
//                 )
//         );
//     }
// };

//  //-----------------------------------hander delete-----------------------------------
// //Cài đặt handler delete:
// exports.delete = async (req, res, next) => {
//     const { id } = req.params;
//     const condition = {
//         _id: id && mongoose.isValidObjectId(id) ? id : null,
//     };
//     try{
//         const document = await Contact.findOneAndDelete(condition);
//         if(!document){
//             return next (new BadRequestError(404, "Contact not found"));
//         }
//         return res.send({message: "Contact was deleted successfully"});
//     }catch(error){
//         console.log(error)
//         return next(
//             new BadRequestError(
//                 500,
//                 `Could not delete contact with id=${req.params.id}`
//             )
//         );
//     }
// };
// // //------------------------hander favorite------------------------------------------
// // //Cài đặt handler findAllFavorite:
// // exports.findAllFavorite = async (req, res, next) => {
// //     try{
// //         const documents = await Contact.find({favorite: true});
// //         return res.send(documents);
// //     }catch(error){
// //         return next(
// //             new BadRequestError(
// //                 500,
// //                 "An error occurred while retrieving favorite contacts"
// //             )
// //         );
// //     }
// // };
// //--------------------------deleteAlll--------------------------------------
// //Cài đặt handler deleteAll:
// exports.deleteAll = async (req, res, next) => {
//     try{
//         const data = await Contact.deleteMany({});
//         return res.send({
//             message: `${data.deletedCount} contacts were deleted successfully`,
//         });
//     }catch(error){
//         return next(
//             new BadRequestError(
//                 500,
//                 "An error occurred while removing all contacts"
//             )
//         );
//     }
// };