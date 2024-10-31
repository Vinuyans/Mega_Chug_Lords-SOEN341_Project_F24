import express from "express";
import studentRouter from "./studentRouter.js";
import teacherRouter from "./teacherRouter.js";
import { initDb as db } from "../db/connection.js";
import Course from "../db/schemas/course.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/student", studentRouter);
router.use("/teacher", teacherRouter);

router.get("/all-courses", async (req, res) => {
  await db.getAll(Course).then((data) => {
    res.status(200).json(data);
  });
});

// leaving here as an example of how to use the db functions
/* router.get("/test", async (req, res) => {
  db.addUser("Stue", "Dent", "student", "12345678", "Password!1");
  db.addUser("Dent", "Stue", "student", "12345679", "Password!2");
  db.addUser("Tech", "Art", "teacher", "87654321", "Password!1");
  const course = await db.addCourse(
    "311",
    "ENGR",
    "87654321",
    ["12345678"],
    []
  );
  const group = await db.addGroupToCourse(course._id, ["12345678"]);
  db.addUserToCourseGroup("12345678", group._id);
  const assignment = await db.addAssignmentToGroup(
    group._id,
    "bad content",
    "12345678"
  );
  db.addReviewToGroup(group._id, "12345678", assignment._id, 2);
  const courses = await db.getTeacherCourses("87654321");
  console.log(courses);
  for (const course of courses) {
    const ids = course.student_ids;
    console.log(ids);
    for (const id of ids) {
      console.log(await db.getUser(id));
    }
  }
  res.status(200).json({ message: "done" });
});*/

export default router;
