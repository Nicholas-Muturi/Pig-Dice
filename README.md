# Pig Dice

## Description
Pig dice (or Pig) is a jeopardy game where you risk everything to see if you can win more. On a turn, a player rolls the die repeatedly. The goal is to accumulate as many points as possible, adding up the numbers rolled on the die. However, if a player rolls a 1, the player's turn is over and any points they have accumulated during this turn are forfeited. Rolling a 1 doesn't wipe out your entire score, just the total earned during that particular roll. When a player reaches a total of 100 or more points, the game ends and that player is the winner

A player can also choose to hold (stop rolling) if they do not want to take a chance of rolling a 1 and losing all of their points from this turn. If the player chooses to hold, all of the points rolled during that turn are added to his or her score.

There are two counters at hand: _Overall Score_ & _Turn Score_ . The turn score collects the user's score whenever they roll a die, summing the numbers up provided the die doesn't fall on 1 as explained above.
If the current player decides to hold, the _total turn score_ is added to the overall score and the turn score is reset to 0. Since it is based on a die, an alternative solution to achieve the same unpredictable outcome is by using a random number generator

**EXAMPLE OUTCOMES**
Example 1: Boyd rolls a 3 and decides to continue rolling. He rolls seven more times, getting a 6, 2, 4, 5, 6, and then 1. Because he rolled a 1, Boyd's turn is over and he earns 0 points for this turn.

Example 2: Cynthia rolls a 6 and decides to continue. She then chooses to roll four more times, getting a 3, 4, 2, and 6. She decides to hold (and not take a chance of getting a 1). Cynthia earns 21 points for this turn

## Setup Requirements
Clone the repository using the following command in your terminal: `https://github.com/Nicholas-Muturi/Pig-Dice.git`

Access the files by typing this in the location where the repo was cloned: `ls Pig\ Dice/
`
## Technologies used
* Html
* Css
* Bootstrap
* Jquery
* Javascript

## Known Bugs
As far as I'm aware, none. However, if you do come across a bug, feel free to contact me and inform me about it.

## Contributors
[Nicholas Muturi](https://github.com/Nicholas-Muturi/)

## Live demo
To view the live demo, [click Here](https://nicholas-muturi.github.io/Pig-Dice/)

## Contact Details
* [LinkedIn](https://www.linkedin.com/in/nicholas-muturi)
* [Gmail](nicholasmuturi1@gmail.com)

## License
This projects has a MIT License [found here](LICENSE)
