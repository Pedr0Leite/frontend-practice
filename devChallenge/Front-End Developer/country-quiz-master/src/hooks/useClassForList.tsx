import { useState }  from 'react';

// export default function useClassForList(initialValue: string, correctAnswer: number, optionNumber: number){
//     const [classChoice1, setClassChoice1] = useState('');
//     const [classChoice2, setClassChoice2] = useState('');
//     const [classChoice3, setClassChoice3] = useState('');
//     const [classChoice4, setClassChoice4] = useState('');
//     const [numberOfCorrect, setNumberOfCorrect] = useState(0);

//     if(correctAnswer === optionNumber){
//         setNumberOfCorrect(Number(numberOfCorrect) + 1);
//         //correct answer
//         switch (optionNumber) {
//           case 1:
//             setClassChoice1('-right')
//             setClassChoice2('-disabled');
//             setClassChoice3('-disabled');
//             setClassChoice4('-disabled');
//             break;
//             case 2:
//             setClassChoice2('-right')
//             setClassChoice1('-disabled');
//             setClassChoice3('-disabled');
//             setClassChoice4('-disabled');
//             break;
//             case 3:
//             setClassChoice3('-right')
//             setClassChoice1('-disabled');
//             setClassChoice2('-disabled');
//             setClassChoice4('-disabled');
//             break;
//             case 4:
//             setClassChoice4('-right')
//             setClassChoice1('-disabled');
//             setClassChoice2('-disabled');
//             setClassChoice3('-disabled');
//             break;
//         }
  
//       }else{
//         //Wrong answer
//         switch (correctAnswer) {
//           case 1:
//             setClassChoice1('-right')
//             setClassChoice2('-disabled');
//             setClassChoice3('-disabled');
//             setClassChoice4('-disabled');
//             break;
//             case 2:
//             setClassChoice2('-right')
//             setClassChoice1('-disabled');
//             setClassChoice3('-disabled');
//             setClassChoice4('-disabled');
//             break;
//             case 3:
//             setClassChoice3('-right')
//             setClassChoice1('-disabled');
//             setClassChoice2('-disabled');
//             setClassChoice4('-disabled');
//             break;
//             case 4:
//             setClassChoice4('-right')
//             setClassChoice1('-disabled');
//             setClassChoice2('-disabled');
//             setClassChoice3('-disabled');
//             break;
//         }
  
//         switch (optionNumber) {
//           case 1:
//             setClassChoice1('-wrong');
//             break;
//             case 2:
//             setClassChoice2('-wrong')
//             break;
//             case 3:
//             setClassChoice3('-wrong')
//             break;
//             case 4:
//             setClassChoice4('-wrong')
//             break;
//         }
//       }



//     return [classChoice, setClassChoice];
// }