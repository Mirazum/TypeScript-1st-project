/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';
// import studentValidationSchema from './student.validation';

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

const getAllStudents = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;

  const result = await StudentServices.getSingleStudentFromDB(studentId);

  res.status(200).json({
    success: true,
    message: 'Student is retrieved successfully',
    data: result,
  });
});

// const getSingleStudent: RequestHandler = async (req, res, next) => {
//   try {
//     const { studentId } = req.params;

//     const result = await StudentServices.getSingleStudentFromDB(studentId);

//     res.status(200).json({
//       success: true,
//       message: 'Student is retrieved successfully',
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//   }
// };
const getSingleStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;

  const result = await StudentServices.getSingleStudentFromDB(studentId);

  res.status(200).json({
    success: true,
    message: 'Student is retrieved successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;

  const result = await StudentServices.deleteStudentFromDB(studentId);

  res.status(200).json({
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
