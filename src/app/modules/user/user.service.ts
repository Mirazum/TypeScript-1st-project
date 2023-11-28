import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //create a user object
  const userData: Partial<TUser> = {};

  //if password is not given use default password
  //   if(!password){
  //     user.password = config.default_password as string
  //   }else{
  //     user.password = password
  //   }
  //or
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  //set manually generated it
  userData.id = '2030100001';

  //create a user
  const NewUser = await User.create(userData); // built in static method

  //create a student

  if (Object.keys(NewUser).length) {
    // set id, _id as user
    studentData.id = NewUser.id;
    studentData.user = NewUser._id; //reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};

//example for instance method

// const student = new Student(studentData); // create an instance

// if (await student.isUserExists(studentData.id)) {
//   throw new Error('User already exists!');
// }

// const result = await student.save(); // built in instance method
