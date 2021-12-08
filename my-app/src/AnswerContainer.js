import React from 'react'
import { Button, Grid } from "semantic-ui-react";

export default function AnswerContainer({answer, allQuestions, setQuestions}) {
    
    const randomAnswer1 = Math.floor(Math.random() * 4)
    const rightOrWrong = Math.floor(Math.random() * 2)

    function handleButtonClick(e) {
      if (e.target.innerText === answer) {
        setPlayerStat({...playerStat, money: playerStat.money + question, correct: playerStat.correct + 1 })
        //setTimeout(() => setQuestions([...allQuestions]) , 2000)
      } else {
        setPlayerStat({...playerStat, wrong: playerStat.wrong + 1, money: playerStat.money - question })
      }

        }
    
 
    const myAnswer = rightOrWrong === 1 ? <Grid columns="equal" fluid padded>
        <Grid.Row >
          <Button basic color="blue" size="huge" fluid key={{answer}} onClick={(e) => handleButtonClick(e)}>
            {answer}
          </Button>
        </Grid.Row>
  
        <Grid.Row>
          <Button basic color="blue" size="huge" fluid key={allQuestions[randomAnswer1].answer} onClick={(e) => handleButtonClick(e)}>
            {allQuestions[randomAnswer1].answer}
          </Button>
        </Grid.Row>
        </Grid>
        : 
        <Grid columns="equal" fluid padded>
        <Grid.Row >
          <Button basic color="blue" size="huge" fluid onClick={(e) => handleButtonClick(e)}>
            {allQuestions[randomAnswer1].answer}
          </Button>
        </Grid.Row>
  
        <Grid.Row>
          <Button basic color="blue" size="huge" fluid onClick={(e) => handleButtonClick(e)}>
            {answer}
          </Button>
        </Grid.Row>
        </Grid>
    
    return (
<>
        
    {myAnswer}

    <Grid>
        <Grid.Row>
          <Grid columns="3">
            <Grid.Column></Grid.Column>
            <Grid.Column textAlign="center">
              <Button negative>Skip</Button>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid>
        </Grid.Row>
      </Grid>
      </>
    )
}
