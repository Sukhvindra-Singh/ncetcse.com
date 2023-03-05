const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Register = require("../models/registerModel");


// Register a User
exports.createRegistration = catchAsyncErrors(async (req, res, next) => {

  const user = await Register.create(req.body);
  res.status(201).json({
    success: true,});
});

// Get all users detail --> Admin
exports.getAllRegistration = catchAsyncErrors(async (req, res, next) => {
  const registrations = await Register.find();

  res.status(200).json({
    success: true,
    registrations,
  });
});

exports.getRegistration = catchAsyncErrors(async (req, res, next) => {
  const Registration = await Register.findById(req.params.id);

  if (!Registration) {
    return next(
      new ErrorHandler(`Student Registration does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    Registration,
  });
});
exports.getAllStudentRegistrations = catchAsyncErrors(async (req, res, next) => {
  const studentRegistrations = await Register.find({"categorytype": "student"});

  if (!studentRegistrations) {
    return next(
      new ErrorHandler(`Students Registration does not exists: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    studentRegistrations,
  });
});
exports.getAllFacultyRegistrations = catchAsyncErrors(async (req, res, next) => {
  const facultyRegistrations = await Register.find({"categorytype": "faculty"});

  if (!facultyRegistrations) {
    return next(
      new ErrorHandler(`Faculty Registration does not exists: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    facultyRegistrations,
  });
});

// Delete Registration --Admin
exports.deleteRegistration = catchAsyncErrors(async (req, res, next) => {
  const registration = await Register.findById(req.params.id);

  if (!registration) {
    return next(
      new ErrorHandler(`Registration does not exist with Id: ${req.params.id}`, 400)
    );
  }

  await Register.deleteOne({_id:req.params.id})

  res.status(200).json({
    success: true,
    message: "Registration Deleted Successfully",
  });
});