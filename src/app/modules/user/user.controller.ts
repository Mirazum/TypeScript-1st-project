import { RequestHandler } from 'express';
import { UserServices } from './user.service';

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    // creating a student validation using Joi
    const { password, student: studentData } = req.body;

    // data validation using Zod
    //   const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
