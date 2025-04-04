import React from "react";
import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { course1 } from "../courses/course1/course1";
import { course2 } from "../courses/course2/course2";
import { course3 } from "../courses/course3/course3";
import { course4 } from "../courses/course4/course4";
import { student } from "../dashboard/students";
import { teachers } from "../dashboard/teacher";
import { Homescreen } from "../courses/Homescreen";
import { Quiz } from "../Quiz/Quiz_game";
import { quizedit1 } from "../courses/course1/quiz_edit1";
import { quiztest1} from "../courses/course1/quizgametest1";
import { quizedit2 } from "../courses/course2/quiz_edit2";
import { quiztest2} from "../courses/course2/quizgametest2";
import { quizedit3 } from "../courses/course3/quiz_edit3";
import { quiztest3} from "../courses/course3/quizgametest3";
import { quizedit4 } from "../courses/course4/quiz_edit4";
import { quiztest4} from "../courses/course4/quizgametest4";
import { quizdelete1 } from "../courses/course1/course1(teachers)"
import { quizdelete2 } from "../courses/course2/course2(teachers)"
import { quizdelete3 } from "../courses/course3/course3(teachers)"
import { quizdelete4 } from "../courses/course4/course4(teachers)"
import {HomescreenTeacher } from "../courses/Homescreenteachers"
import {score1 } from "../courses/course1/test_results1"
import {score2 } from "../courses/course2/test_results2"
import {score3 } from "../courses/course3/test_results3"
import {score4 } from "../courses/course4/test_results4"
import  posttest1  from "../courses/course1/posttest1"
import { post_test1edit } from "../courses/course1/post_test1edit"
import { post_testquestions1} from "../courses/course1/post_testquestions1"
import { post_testresults1} from "../courses/course1/post_testresults1"
import { post_test2 } from "../courses/course2/post_test2"
import { post_test2edit } from "../courses/course2/post_test2edit"
import { post_testquestions2} from "../courses/course2/post_testquestions2"
import { post_testresults2} from "../courses/course2/post_testresults2"
import { post_test3 } from "../courses/course3/post_test3"
import { post_test3edit } from "../courses/course3/post_test3edit"
import { post_testquestions3} from "../courses/course3/post_testquestions3"
import { post_testresults3} from "../courses/course3/post_testresults3"
import { post_test4 } from "../courses/course4/post_test4"
import { post_test4edit } from"../courses/course4/post_test4edit"
import { post_testquestions4} from "../courses/course4/post_testquestions4"
import { post_testresults4} from "../courses/course4/post_testresults4"

const Tab = createBottomTabNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="homescreen" component={Homescreen} />
        <Stack.Screen name="course1" component={course1} />
        <Stack.Screen name="course2" component={course2} />
        <Stack.Screen name="course3" component={course3} />
        <Stack.Screen name="course4" component={course4} />
        <Stack.Screen name="students" component={student} />
        <Stack.Screen name="teachers" component={teachers} />
        <Stack.Screen name="Quizgame" component={Quiz} />
        <Stack.Screen name="createquiz1" component={quizedit1} />
        <Stack.Screen name="test1" component={quiztest1} />
        <Stack.Screen name="createquiz2" component={quizedit2} />
        <Stack.Screen name="test2" component={quiztest2} />
        <Stack.Screen name="createquiz3" component={quizedit3} />
        <Stack.Screen name="test3" component={quiztest3} />
        <Stack.Screen name="createquiz4" component={quizedit4} />
        <Stack.Screen name="test4" component={quiztest4} />
        <Stack.Screen name="delete1" component={quizdelete1} />
        <Stack.Screen name="delete2" component={quizdelete2} />
        <Stack.Screen name="delete3" component={quizdelete3} />
        <Stack.Screen name="delete4" component={quizdelete4} />
        <Stack.Screen name="HomescreenTeacher" component={HomescreenTeacher} />
        <Stack.Screen name="test_results1" component={score1} /> 
        <Stack.Screen name="test_results2" component={score2} /> 
        <Stack.Screen name="test_results3" component={score3} /> 
        <Stack.Screen name="test_results4" component={score4} /> 
        <Stack.Screen name="post_test1" component={posttest1} /> 
        <Stack.Screen name="post_test1edit" component={post_test1edit} /> 
        <Stack.Screen name="post_testquestions1" component={post_testquestions1} /> 
        <Stack.Screen name="post_testresults1" component={post_testresults1} /> 
        <Stack.Screen name="post_test2" component={post_test2} /> 
        <Stack.Screen name="post_test2edit" component={post_test2edit} /> 
        <Stack.Screen name="post_testquestions2" component={post_testquestions2} /> 
        <Stack.Screen name="post_testresults2" component={post_testresults2} /> 
        <Stack.Screen name="post_test3" component={post_test3} /> 
        <Stack.Screen name="post_test3edit" component={post_test3edit} /> 
        <Stack.Screen name="post_testquestions3" component={post_testquestions3} /> 
        <Stack.Screen name="post_testresults3" component={post_testresults3} /> 
        <Stack.Screen name="post_test4" component={post_test4} /> 
        <Stack.Screen name="post_test4edit" component={post_test4edit} /> 
        <Stack.Screen name="post_testquestions4" component={post_testquestions4} /> 
        <Stack.Screen name="post_testresults4" component={post_testresults4} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
