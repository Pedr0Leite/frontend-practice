import React from 'react';
import { fireEvent, getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import { CardGame } from '../../components/Card/Card';

const initialState = {"questions": [
    {
      "number": 1,
      "question": "Eighteen thousandths, written as a decimal, is:",
      "answers": [
        "0.00018",
        "0.0018",
        "0.018",
        "0.18"
      ],
      "correct_answer": 1
        }
    ]
}

  test('onclick correct option, the class of the li should be card-li-choice-right', () => {
    const handleClick = jest.fn();
    /**
     * The classChoice is handled in the onClickOption depending on the correct answer
     * In this case, we are assuming choice 1 was the right one.
     */
    render(<CardGame onClickOption={handleClick} classChoice1={'-right'} classChoice2={'-wrong'} classChoice3={''} classChoice4={''} currentQuestionAnswer={initialState.questions[0].answers} question={initialState.questions[0].question} nextQuestion={handleClick}></CardGame>);
    const rightchoice = screen.queryAllByTestId("cardlirightchoice")[0];
  
    expect(rightchoice).toHaveClass("card-li-choice-right");
  });

  test('onclick wrong option, the class of the li should be card-li-choice-wrong', () => {
    const handleClick = jest.fn();
    /**
     * The classChoice is handled in the onClickOption depending on the correct answer
     * In this case, we are assuming choice 2 was the wrong one.
     */
    render(<CardGame onClickOption={handleClick} classChoice1={'-right'} classChoice2={'-wrong'} classChoice3={''} classChoice4={''} currentQuestionAnswer={initialState.questions[0].answers} question={initialState.questions[0].question} nextQuestion={handleClick}></CardGame>);
    const wrongchoice = screen.queryAllByTestId("cardliwrongchoice")[0];
  
    expect(wrongchoice).toHaveClass("card-li-choice-wrong");
  });

  test('onclick wrong option, the other claass should be disabled', () => {
    const handleClick = jest.fn();
    /**
     * The classChoice is handled in the onClickOption depending on the correct answer
     * In this case, we are assuming options have been selected and the other ones are disabled
     */
    render(<CardGame onClickOption={handleClick} classChoice1={'-right'} classChoice2={'-wrong'} classChoice3={'-disabled'} classChoice4={''} currentQuestionAnswer={initialState.questions[0].answers} question={initialState.questions[0].question} nextQuestion={handleClick}></CardGame>);
    const rightchoice = screen.queryAllByTestId("cardlirightchoice")[0];
    fireEvent.click(rightchoice);

    expect(handleClick).toBeCalled();

    const disablechoices = screen.queryAllByTestId("cardlidisablechoice")[0];

    expect(disablechoices).toHaveClass("card-li-choice-disabled");
  });