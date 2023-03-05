const express = require("express");
const router = express.Router();

const {createRegistration,getAllRegistration,getAllFacultyRegistrations,getRegistration,getAllStudentRegistrations,deleteRegistration} = require("../controllers/registerController");

router.route("/create/registeration").post(createRegistration);
router.route("/all/registration").get(getAllRegistration);
router.route("/registration/:id").get(getRegistration);
router.route("/all/faculty/registrations").get(getAllFacultyRegistrations);
router.route("/all/student/registrations").get(getAllStudentRegistrations);
router.route("/delete/registration/:id").delete(deleteRegistration);

module.exports = router;