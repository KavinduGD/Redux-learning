import { Children, createContext, useEffect, useReducer } from "react";
import axios from "axios";
export const StudentContext = createContext();

export const studentReducer = (state, action) => {
  switch (action.type) {
    case "Add_Students": {
      return {
        students: action.payload,
      };
    }
    case "Add_One_Student": {
      return {
        students: [...state.students, action.payload],
      };
    }
    case "Delete_Student": {
      return {
        students: state.students.filter(
          (student) => student._id !== action.payload
        ),
      };
    }
    case "Update_Student": {
      return {
        students: state.students.map((student) =>
          student._id === action.payload.id
            ? {
                ...student,
                studentId: action.payload.studentId,
                name: action.payload.name,
                course: action.payload.course,
              }
            : student
        ),
      };
    }
    default:
      return state;
  }
};

export const StudentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, {
    students: [],
  });

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
